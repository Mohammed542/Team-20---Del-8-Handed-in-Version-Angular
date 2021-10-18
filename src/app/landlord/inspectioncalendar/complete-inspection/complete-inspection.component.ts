import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/app/main.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-complete-inspection',
  templateUrl: './complete-inspection.component.html',
  styleUrls: ['./complete-inspection.component.scss']
})
export class CompleteInspectionComponent implements OnInit {
  displayedColumns: string[] = ['space', 'ok', 'problem', 'amountDue'];
  form: FormGroup;
  formGroup: FormGroup;
  formGroupDetail: FormGroup;
  inspectionItems: any[] = [];
  takeOnInspectionItems: any[] = [];
  inspection: any;
  comments: string[] = ['Passed', 'Failed'];

  constructor(
    private formBuilder: FormBuilder,
    private mainService: MainService,
    private route: ActivatedRoute,
    private matSnackBar: MatSnackBar,
    private router: Router,
    private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      space: [null, Validators.required],
      ok: [false, Validators.required],
      problem: [null, Validators.required],
      amountDue: [null, [Validators.required, Validators.pattern('[0-9]*\.[0-9]+')]],
    });
    this.formGroup = this.formBuilder.group({
      comment: [null, Validators.required],
    });
    this.formGroupDetail = this.formBuilder.group({
      streetAddress: new FormControl([{ value: null, disabled: false }]),
      buildingName: [{ value: null, disabled: false }],
      unitNumber: [{ value: null, disabled: false }],
      tenantName: [{ value: null, disabled: false }],
      takeOnInspectionDate: [{ value: null, disabled: false }],
      clearOutInspectionDate: [{ value: null, disabled: false }],
    });
    this.mainService.getInspectionDetail(this.route.snapshot.params.inspectionId).subscribe((response: any) => {
      if (response.Success) {
        this.inspection = response.Result;
        this.formGroupDetail.controls.streetAddress.setValue(this.inspection.StreetAddress + '\n\n' + this.inspection.Suburb + '\n\n' + this.inspection.City + '\n\n' + this.inspection.PostalCode);
        this.formGroupDetail.controls.buildingName.setValue(this.inspection.Building);
        this.formGroupDetail.controls.unitNumber.setValue(this.inspection.Unit);
        this.formGroupDetail.controls.tenantName.setValue(this.inspection.TenantName);
        this.formGroupDetail.controls.takeOnInspectionDate.setValue(this.datePipe.transform(this.inspection.TakeOnInspectionDate, 'MM/dd/yyyy HH:mm:ss'));
        this.formGroupDetail.controls.clearOutInspectionDate.setValue(this.inspection.ClearOutInspectionDate ?
          this.datePipe.transform(this.inspection.ClearOutInspectionDate, 'MM/dd/yyyy HH:mm:ss') : 'Not Booked'
        );
        this.formGroup.controls.comment.setValue(this.inspection.Comment);
        this.mainService.getInspectionItems(+sessionStorage.getItem('LandlordID'), this.inspection.InspectionTypeID).subscribe((response: any) => {
          if (response.Success) {
            this.inspectionItems = response.Result;
            if (this.inspection.InspectionTypeID === 2) {
              this.mainService.getInspectionItems(+sessionStorage.getItem('LandlordID'), 1).subscribe((response: any) => {
                if (response.Success) {
                  this.takeOnInspectionItems = response.Result;
                  if (this.takeOnInspectionItems.length === 0) {
                    this.formGroup.controls.comment.disable();
                  }
                } else {
                  this.matSnackBar.open('Failed to get inspection items', 'x', {
                    duration: 2500,
                    verticalPosition: 'top',
                    horizontalPosition: 'right',
                    panelClass: ['red-snackbar']
                  });
                }
              });
            }
          } else {
            this.matSnackBar.open('Failed to get inspection items', 'x', {
              duration: 2500,
              verticalPosition: 'top',
              horizontalPosition: 'right',
              panelClass: ['red-snackbar']
            });
          }
        });
      } else {
        this.matSnackBar.open('Failed to get inspection', 'x', {
          duration: 2500,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['red-snackbar']
        });
      }
    });
  }

  onChangeOk(event) {
    if (event.checked === false) {
      this.form.controls.amountDue.setValue(null);
      this.form.controls.amountDue.enable();
      this.form.controls.amountDue.updateValueAndValidity();
      this.form.controls.problem.setValue('');
      this.form.controls.problem.enable();
      this.form.controls.problem.updateValueAndValidity();
    } else {
      this.form.controls.amountDue.setValue(0);
      this.form.controls.amountDue.setErrors(null);
      this.form.controls.amountDue.disable();
      this.form.controls.problem.setValue('N/A');
      this.form.controls.problem.setErrors(null);
      this.form.controls.problem.disable();
    }
  }

  add() {
    const obj = {
      InspectionID: this.route.snapshot.params.inspectionId,
      Space: this.form.controls.space.value,
      Ok: this.form.controls.ok.value,
      Problem: this.form.controls.problem.value,
      Amount: +this.form.controls.amountDue.value
    };
    this.inspectionItems.push(obj);
    this.form.controls.problem.enable();
    this.form.controls.amountDue.enable();
    this.formGroup.reset();
    this.form.reset();
    this.form.controls.ok.setValue(false);
  }

  remove(item) {
    if (item.InspectionItemID > 0) {
      this.mainService.deleteInspectionItem(item.InspectionItemID).subscribe((response: any) => {
        if (response.Success) {
          this.inspectionItems = this.inspectionItems.filter(x => x.InspectionItemID !== item.InspectionItemID);
          this.matSnackBar.open('Successfully deleted', 'x', {
            duration: 2500,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: ['green-snackbar']
          });
          this.form.controls.problem.enable();
          this.form.controls.amountDue.enable();
          this.formGroup.reset();
          this.form.reset();
          this.form.controls.ok.setValue(false);
        } else {
          this.matSnackBar.open('Failed to delete', 'x', {
            duration: 2500,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: ['red-snackbar']
          });
        }
      });
    } else {
      this.inspectionItems.splice(this.inspectionItems.indexOf(item), 1);
      this.form.controls.problem.enable();
      this.form.controls.amountDue.enable();
      this.formGroup.reset();
      this.form.reset();
      this.form.controls.ok.setValue(false);
    }
  }

  save() {
    this.mainService.completeInspection(this.inspectionItems, this.route.snapshot.params.inspectionId, this.formGroup.controls.comment.value).subscribe((response: any) => {
      if (response.Success) {
        this.matSnackBar.open('Successfully saved', 'x', {
          duration: 2500,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['green-snackbar']
        });
        this.router.navigateByUrl('/inspection/book')
      } else {
        this.matSnackBar.open('Failed to save', 'x', {
          duration: 2500,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['red-snackbar']
        });
      }
    });
  }
}
