import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main.service';
import { ViewpopComponent } from 'src/app/tenant/proofofpayment/readsavedpop/viewpop/viewpop.component';
import { ConfcapturepaymentComponent } from './confcapturepayment/confcapturepayment.component';
import { SucsfulcapturepaymentComponent } from './sucsfulcapturepayment/sucsfulcapturepayment.component';

@Component({
  selector: 'app-capturepayment',
  templateUrl: './capturepayment.component.html',
  styleUrls: ['./capturepayment.component.scss']
})
export class CapturepaymentComponent implements OnInit {
  allBuildings: any = [];
  building: any;
  unitsList: any[] = [];
  selectUnit: any;
  allMethods: any;
  method: any;
  pops:  any = [];
  pop: any;

  form: FormGroup;

  confSubmit: boolean = false;

  minDate;
  maxDate;

  constructor(private dialog: MatDialog, private router: Router, private formBuilder: FormBuilder, private service: MainService, private matSnackBar: MatSnackBar) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear, 0, 1);
    this.maxDate = new Date(currentYear, 11, 31);
  }

  ngOnInit(): void {
    this.service.GetListBuildingUnitsLandlord().subscribe(result => {
      this.allBuildings = result;
    });

    this.service.getPaymentMethods().subscribe(result => {
      this.allMethods = result;
      // console.log(result);
    });

    var currencyRegExpr = '^\d\d+(\.[1-9])?$'

    this.form = this.formBuilder.group({
      PaymentName: ['', [Validators.required, Validators.pattern('[A-Za-z ]+'), Validators.maxLength(49)]],
      PaymentMethodID: ['', Validators.required],
      Amount: ['', [Validators.required, Validators.pattern('[0-9]*\.[0-9]+')]],
      Date: ['', Validators.required],
      BuildingID: ['', Validators.required],
      UnitID: ['', Validators.required],
      ProofOfPaymentID: ['', Validators.required]
    });
  }
  
  getErrorMessage(data) {
    if (data == "name") {
      if (this.form.controls.PaymentName.hasError('required')) {
        return 'You must provide a payment name';
      }
      if (this.form.controls.PaymentName.hasError('pattern')) {
        return 'Payment name can only contain letters and spaces';
      }
      if (this.form.controls.PaymentName.hasError('maxlength')) {
        return 'Payment name too long';
      }
    }
    if (data == "method") {
      if (this.form.controls.PaymentMethodID.hasError('required')) {
        return 'You must select a method';
      }
    }
    if (data == "amount") {
      if (this.form.controls.Amount.hasError('required')) {
        return 'You must provide an amount';
      }
      if (this.form.controls.Amount.hasError('pattern')) {
        return 'Incorrect amount format';
      }
    }
    if (data == "date") {
      if (this.form.controls.Date.hasError('required')) {
        return 'You must select a date';
      }
    }
    if (data == "building") {
      if (this.form.controls.BuildingID.hasError('required')) {
        return 'You must select a building';
      }
    }
    if (data == "unit") {
      if (this.form.controls.UnitID.hasError('required')) {
        return 'You must select a unit';
      }
    }
    
    if (data == "pop") {
      if (this.form.controls.ProofOfPaymentID.hasError('required')) {        
        return 'You must select a proof of payment';
      }
    }
  }

  onBuildingChange(event) {
    this.building = event.value;
    // console.log(this.building);
    // console.log(event);
    this.unitsList = [];

    if(this.building != undefined){
      this.allBuildings.forEach(element => {
        // console.log(element);
        if (element.Building.BuildingID == this.building) {
          // console.log(element.Building.BuildingID);
          element.Units.forEach(element2 => {
            // console.log(element2);
            this.unitsList.push(element2);
          });
        }
      });
    }
    else{
      this.form.controls["UnitID"].setValue(undefined);
      this.selectUnit = undefined;
    }
    // console.log(this.unitsList);
  }

  onUnitChange(event){
    this.selectUnit = event.value;
    // console.log(this.selectUnit);

    if(this.selectUnit != undefined){
      this.service.getProofOfPayments(this.selectUnit).subscribe(result => {
        this.pops = result;
        // console.log(result);
      });
    }
    else{
      this.form.controls["ProofOfPaymentID"].setValue(undefined);
    }
  }

  onMethodChange(event){
    this.method = event.value;
  }

  onPoPChange(event){
    this.pop = event.value;  
  }
  
  ViewPDFClicked(){
    var popType = "";
    this.pops.forEach(element => {
      if (element.ProofOfPayementID == this.pop) {
        popType = element.Type;
      }
    });

    popType = popType.substring(popType.indexOf("/") + 1);

    // console.log(this.pop);
    // console.log(popType);
    
    sessionStorage['ProofOfPaymentID'] = this.pop;
    sessionStorage['ProofOfPaymentFileType'] = popType;
    //this.router.navigateByUrl('tenant/readproofofpayment/view');
    // let newUrl = "tenant/readproofofpayment/view";
    // window.open(newUrl, "_blank");

    const dialogRef = this.dialog.open(ViewpopComponent, {
      restoreFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog(form) {
    // console.log(form);
    const dialogRef = this.dialog.open(ConfcapturepaymentComponent, {
      restoreFocus: false,
      data:{
        CapturePayment: {
          PaymentName: form.PaymentName,
          PaymentMethodID: form.PaymentMethodID,
          Amount: form.Amount,
          Date: form.Date,
          BuildingID: form.BuildingID,
          UnitID: form.UnitID
        }
      }
    });

    dialogRef.afterClosed().subscribe(result => {     
    });
  }

  onSubmit(form){
    // console.log(form);
    const dialogRef = this.dialog.open(ConfcapturepaymentComponent, {
      restoreFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      this.confSubmit = result.data;
      // console.log(this.confSubmit);

      if(this.confSubmit){
        this.service.capturePayment(form).subscribe((res: any) => {
          // console.log("subs submit");
          if (res.Success) {
            this.matSnackBar.open(res.Message, 'x', {
              duration: 2500,
              verticalPosition: 'top',
              horizontalPosition: 'right',
              panelClass: ['green-snackbar']
            });
            this.router.navigateByUrl("landlord/payments");
          }
          else {
            this.matSnackBar.open(res.Message, 'x', {
              duration: 2500,
              verticalPosition: 'top',
              horizontalPosition: 'right',
              panelClass: ['red-snackbar']
            });
          }
        });
        // console.log("submitted");

        // const dialogRef = this.dialog.open(SucsfulcapturepaymentComponent, {
        //   restoreFocus: false
        // });
    
        // dialogRef.afterClosed().subscribe(result => {
        //   this.router.navigateByUrl("landlord/payments");
        // });
      }
    });
  }

  clickCancel(){
    this.router.navigateByUrl('landlord/payments');
  }
}
