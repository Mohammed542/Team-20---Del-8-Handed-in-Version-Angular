import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main.service';
import { ConfgenreceiptComponent } from './confgenreceipt/confgenreceipt.component';

@Component({
  selector: 'app-genpayreceipt',
  templateUrl: './genpayreceipt.component.html',
  styleUrls: ['./genpayreceipt.component.scss']
})
export class GenpayreceiptComponent implements OnInit {

  paymentID;
  payment: any;
  paymentMethods: any;

  form: FormGroup;

  constructor(private dialog: MatDialog, private router: Router, private service: MainService, private formBuilder: FormBuilder, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.paymentID = localStorage.getItem('PaymentID');

    this.form = this.formBuilder.group({
      PaymentName: new FormControl({ value: '', disabled: true }),
      PaymentAmount: new FormControl({ value: '', disabled: true }),
      PaymentMethod: new FormControl({ value: '', disabled: true }),
      PaymentDate: new FormControl({ value: '', disabled: true }),
      BuildingName: new FormControl({ value: '', disabled: true }),
      UnitNumber: new FormControl({ value: '', disabled: true })
    });

    // this.service.getPaymentMethods().subscribe(result => {
    //   this.paymentMethods = result;
    //   console.log(this.paymentMethods);
    // });

    this.service.getPayment(this.paymentID).subscribe((result: any) => {
      if (result.Success) {
        this.payment = result.Result;
        console.log(this.payment);
        this.form.controls['PaymentName'].patchValue(this.payment.PaymentName);
        this.form.controls['PaymentAmount'].patchValue(this.payment.PaymentAmount);
        this.form.controls['PaymentMethod'].patchValue(this.payment.PaymentMethod);
        this.form.controls['PaymentDate'].patchValue(this.payment.PaymentDate);
        this.form.controls['BuildingName'].patchValue(this.payment.BuildingName);
        this.form.controls['UnitNumber'].patchValue(this.payment.UnitNumber);
      }
      else {
        this.matSnackBar.open(result.Message, 'x', {
          duration: 2500,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['red-snackbar']
        });
      }
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ConfgenreceiptComponent, { restoreFocus: false });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  clickCancel() {
    this.router.navigateByUrl('landlord/payments');
  }
}
