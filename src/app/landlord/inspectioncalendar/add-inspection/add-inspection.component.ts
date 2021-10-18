import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-add-inspection',
  templateUrl: './add-inspection.component.html',
  styleUrls: ['./add-inspection.component.scss'],
})
export class AddInspectionComponent implements OnInit {
  allBuildings: any;
  building: any;
  unitsList: any[] = [];
  selectUnit: any;
  form: FormGroup;
  inspectionTypes: any[];
  startTimes: any[] = [];
  loading: boolean = false;
  showError: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<AddInspectionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private mainService: MainService,
    private datePipe: DatePipe,
    private matSnackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    var count = 8;
    for (let index = 0; index < 4; index++) {
      let date = new Date(this.data.dateStr);
      date.setHours(count);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
      this.startTimes.push(date);
      count += 2;
    }

    this.mainService.GetListBuildingUnitsLandlord().subscribe((response: any) => {
      this.allBuildings = response;
    });

    this.form = this.formBuilder.group({
      inspectionType: [null, Validators.required],
      date: [this.datePipe.transform(this.data.dateStr, 'yyyy/MM/dd'), Validators.required],
      startTime: [null, Validators.required],
      endTime: [null, Validators.required],
      selectedBuilding: [null, Validators.required],
      selectedUnit: [null, Validators.required],
      tenantName: [null, Validators.required],
      cellPhoneNumber: [null, Validators.required],
      emailAddress: [null, Validators.required],
    });
  }

  onChangeStartDate(event) {
    const dateHours = new Date(event).getHours();
    let date = new Date(this.data.dateStr);
    date.setHours(dateHours + 2);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);

    const obj = {
      StartTime: this.datePipe.transform(new Date(event), 'yyyy/MM/dd HH:mm:ss'),
      EndTime: this.datePipe.transform(date, 'yyyy/MM/dd HH:mm:ss')
    }
    this.mainService.validateBookingTime(obj).subscribe((response: any) => {
      this.showError = response.Result;
      const value = this.datePipe.transform(date, 'HH:mm:ss');
      this.form.controls.endTime.setValue(value);
    });
  }

  onBuildingChange(event) {
    this.building = event.value;
    this.unitsList = [];
    this.allBuildings.forEach((element) => {
      if (element.Building.BuildingID == this.building) {
        element.Units.forEach((element2) => {
          this.unitsList.push(element2);
        });
      }
    });
    this.form.controls.inspectionType.patchValue(null);
    this.form.controls.selectedUnit.patchValue(null);
    this.form.controls.tenantName.patchValue(null);
    this.form.controls.cellPhoneNumber.patchValue(null);
    this.form.controls.emailAddress.patchValue(null);
    this.form.controls.startTime.patchValue(null);
    this.form.controls.endTime.patchValue(null);
  }

  onUnitChange(event) {
    this.loading = true;
    this.selectUnit = event.value;
    this.mainService.getTenant(this.selectUnit).subscribe((response: any) => {
      if (response.Success) {
        this.form.controls.tenantName.patchValue(response.Result.FirstName);
        this.form.controls.cellPhoneNumber.patchValue(response.Result.CellPhoneNumber);
        this.form.controls.emailAddress.patchValue(response.Result.EmailAddress);
        this.mainService.getInspectionTypes(event.value).subscribe((response: any) => {
          if (response.Success) {
            this.inspectionTypes = response.Result;
            this.loading = false;
          } else {
            this.matSnackBar.open('Failed to get inspection types', 'x', {
              duration: 2500,
              verticalPosition: 'top',
              horizontalPosition: 'right',
              panelClass: ['red-snackbar']
            });
          }
        });
      } else {
        this.form.controls.tenantName.patchValue(null);
        this.form.controls.cellPhoneNumber.patchValue(null);
        this.form.controls.emailAddress.patchValue(null);
        this.form.updateValueAndValidity();
        this.matSnackBar.open(response.Message, 'x', {
          duration: 2500,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['red-snackbar']
        });
      }
    });
  }

  create(): void {
    this.loading = true;
    let obj = {
      LandlordID: +sessionStorage.getItem('LandlordID'),
      InspectionTypeID: this.form.controls.inspectionType.value,
      InspectionStatusID: 1,
      Date: this.datePipe.transform(this.form.controls.date.value, 'yyyy/MM/dd HH:mm:ss'),
      StartTime: this.datePipe.transform(this.form.controls.startTime.value, 'yyyy/MM/dd HH:mm:ss'),
      EndTime: this.form.controls.endTime.value,
      BuildingId: this.form.controls.selectedBuilding.value,
      UnitId: this.form.controls.selectedUnit.value,
    };
    let date = new Date(this.data.dateStr);
    date.setHours(this.form.controls.endTime.value.substring(0, 2));
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    obj.EndTime = this.datePipe.transform(date, 'yyyy/MM/dd HH:mm:ss');
    this.mainService.saveInspection(obj).subscribe((response) => {
      if (response.Success) {
        this.matSnackBar.open('Successfully saved', 'x', {
          duration: 2500,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['green-snackbar']
        });
        this.dialogRef.close();
      } else {
        this.matSnackBar.open('Failed to save', 'x', {
          duration: 2500,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['red-snackbar']
        });
      }
      this.loading = false;
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  get f() { return this.form.controls; }
}
