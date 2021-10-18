import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import { MainService } from 'src/app/main.service';
import { AddInspectionComponent } from '../add-inspection/add-inspection.component';

@Component({
  selector: 'app-update-inspection',
  templateUrl: './update-inspection.component.html',
  styleUrls: ['./update-inspection.component.scss'],
})
export class UpdateInspectionComponent implements OnInit {
  allBuildings: any;
  building: any;
  unitsList: any[] = [];
  selectUnit: any;
  form: FormGroup;
  inspectionTypes: any[] = [];
  startTimes: any[] = [];
  loading: boolean = false;
  showError: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<AddInspectionComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private mainService: MainService,
    private datePipe: DatePipe,
    private matSnackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    var count = 8;
    for (let index = 0; index < 4; index++) {
      let date = new Date(this.data.Date);
      date.setHours(count);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
      const value = this.datePipe.transform(new Date(date), 'HH:mm:ss');
      this.startTimes.push(value);
      count += 2;
    }

    this.mainService.GetListBuildingUnitsLandlord().subscribe((response: any) => {
      this.allBuildings = response;
      this.building = this.data.BuildingId;
      this.unitsList = [];
      this.allBuildings.forEach((element) => {
        if (element.Building.BuildingID == this.building) {
          element.Units.forEach((element2) => {
            this.unitsList.push(element2);
          });
        }
      });
      this.onUnitChange({ value: this.data.UnitId });
    });

    this.form = this.formBuilder.group({
      inspectionType: [{value: this.data.InspectionTypeID, disabled: this.data.Comment !== ''}, Validators.required],
      date: [{value: this.datePipe.transform(this.data.Date, 'yyyy/MM/dd'), disabled: this.data.Comment !== ''}, Validators.required],
      startTime: [{value: this.datePipe.transform(this.data.StartTime, 'HH:mm:ss'), disabled: this.data.Comment !== ''}, Validators.required],
      endTime: [{value: this.datePipe.transform(this.data.EndTime, 'HH:mm:ss'), disabled: this.data.Comment !== ''}, Validators.required],
      selectedBuilding: [{value: this.data.BuildingId, disabled: this.data.Comment !== ''}, Validators.required],
      selectedUnit: [{value: this.data.UnitId, disabled: this.data.Comment !== ''}, Validators.required],
      tenantName: [{value: null, disabled: this.data.Comment !== ''}, Validators.required],
      cellPhoneNumber: [{value: null, disabled: this.data.Comment !== ''}, Validators.required],
      emailAddress: [{value: null, disabled: this.data.Comment !== ''}, Validators.required],
    });
  }

  onChangeStartDate(event) {
    let StartDate = new Date(this.data.Date);
    StartDate.setHours(+event.substring(0, 2));
    StartDate.setMinutes(0);
    StartDate.setSeconds(0);
    StartDate.setMilliseconds(0);
    let endDate = new Date(this.data.Date);
    endDate.setHours(+event.substring(0, 2) + 2);
    endDate.setMinutes(0);
    endDate.setSeconds(0);
    endDate.setMilliseconds(0);

    const obj = {
      InspectionID: this.data.InspectionID,
      StartTime: this.datePipe.transform(StartDate, 'yyyy/MM/dd HH:mm:ss'),
      EndTime: this.datePipe.transform(endDate, 'yyyy/MM/dd HH:mm:ss')
    }
    this.mainService.validateBookingTime(obj).subscribe((response: any) => {
      this.showError = response.Result;
      const value = this.datePipe.transform(endDate, 'HH:mm:ss');
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
            if (response.Result.length === 0) {
              this.inspectionTypes.push({ InspectionTypeID: this.data.InspectionTypeID, Description: this.data.InspectionTypeID === 1 ? 'Take On' : 'Clear Out' });
              this.form.controls.inspectionType.disable({ onlySelf: true, emitEvent: false });
            } else if (response.Result.length === 1) {
              this.inspectionTypes = response.Result;
              this.inspectionTypes.push({ InspectionTypeID: this.inspectionTypes[0].InspectionTypeID === 1 ? 2 : 1, Description: this.inspectionTypes[0].InspectionTypeID === 1 ? 'Clear Out' : 'Take On' });
            }
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

  update(): void {
    this.loading = true;
    let obj = {
      InspectionID: this.data.InspectionID,
      LandlordID: +sessionStorage.getItem('LandlordID'),
      InspectionTypeID: this.form.controls.inspectionType.value,
      InspectionStatusID: this.data.InspectionStatusID,
      Date: this.datePipe.transform(this.form.controls.date.value, 'yyyy/MM/dd HH:mm:ss'),
      StartTime: this.form.controls.startTime.value,
      EndTime: this.form.controls.endTime.value,
      BuildingId: this.form.controls.selectedBuilding.value,
      UnitId: this.form.controls.selectedUnit.value,
    };
    let startDate = new Date(this.data.Date);
    startDate.setHours(this.form.controls.startTime.value.substring(0, 2));
    startDate.setMinutes(0);
    startDate.setSeconds(0);
    startDate.setMilliseconds(0);
    obj.StartTime = this.datePipe.transform(startDate, 'yyyy/MM/dd HH:mm:ss');
    let endDate = new Date(this.data.Date);
    endDate.setHours(this.form.controls.endTime.value.substring(0, 2));
    endDate.setMinutes(0);
    endDate.setSeconds(0);
    endDate.setMilliseconds(0);
    obj.EndTime = this.datePipe.transform(endDate, 'yyyy/MM/dd HH:mm:ss');
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

  deleteInspection() {
    this.loading = true;
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: {
          title: 'Confirm',
          message:
            'Are you sure you want to delete an inspection booking slot?',
        },
      })
      .afterClosed()
      .subscribe((response) => {
        if (response) {
          this.mainService
            .deleteInspection(this.data.InspectionID)
            .subscribe((response) => {
              if (response.Success) {
                this.dialogRef.close();
              } else {
                this.matSnackBar.open(response.Message, 'x', {
                  duration: 2500,
                  verticalPosition: 'top',
                  horizontalPosition: 'right',
                  panelClass: ['red-snackbar']
                });
              }
              this.loading = false;
            });
        } else {
          this.loading = false;
        }
      });
  }

  get f() {
    return this.form.controls;
  }
}
