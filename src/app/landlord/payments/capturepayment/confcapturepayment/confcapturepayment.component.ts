import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MainService } from 'src/app/main.service';
import { SucsfulcapturepaymentComponent } from '../sucsfulcapturepayment/sucsfulcapturepayment.component';

@Component({
  selector: 'app-confcapturepayment',
  templateUrl: './confcapturepayment.component.html',
  styleUrls: ['./confcapturepayment.component.scss']
})
export class ConfcapturepaymentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog, private service: MainService, private dialogRef: MatDialogRef<ConfcapturepaymentComponent>) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  CapturePayment = {
    PaymentName: "",
    PaymentMethodID: 0,
    PaymentAmount: "",
    Date: null,
    BuildingID: 0,
    UnitID: 0
  }

  doCapturePayment(){
    this.CapturePayment.PaymentName = this.data.CapturePayment.PaymentName;
    this.CapturePayment.PaymentMethodID = this.data.CapturePayment.PaymentMethodID;
    this.CapturePayment.PaymentAmount = this.data.CapturePayment.PaymentAmount;
    this.CapturePayment.Date = this.data.CapturePayment.Date;
    this.CapturePayment.BuildingID = this.data.CapturePayment.BuildingID;
    this.CapturePayment.UnitID = this.data.CapturePayment.UnitID;

    console.log("domanual",this.CapturePayment);

    this.service.capturePayment(this.CapturePayment).subscribe(res => {
      this.openDialog();
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(SucsfulcapturepaymentComponent, { restoreFocus: false });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  clickCancel(){
    this.dialogRef.close({data: false});
  }

  clickConfirm(){
    this.dialogRef.close({data: true});
  }
}
