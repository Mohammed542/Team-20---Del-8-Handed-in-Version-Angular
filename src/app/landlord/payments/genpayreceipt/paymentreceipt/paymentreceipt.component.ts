import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main.service';
import { SuccgenreceiptComponent } from '../succgenreceipt/succgenreceipt.component';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-paymentreceipt',
  templateUrl: './paymentreceipt.component.html',
  styleUrls: ['./paymentreceipt.component.scss']
})
export class PaymentreceiptComponent implements OnInit {

  // @ViewChild('receiptDiv') receiptDiv: ElementRef;

  paymentID;
  payment: any;
  paymentMethods: any;
  tenant: any;
  balance: any;

  toGetBalance = {
    BuildingID: "",
    UnitID: 0,
    StartDate: "",
    EndDate: "",
  }

  nowDate = new Date();
  longMonth = this.nowDate.toLocaleString('en-us', { month: 'long' });
  //date = this.nowDate.getFullYear()+'/'+(this.nowDate.getMonth()+1)+'/'+this.nowDate.getDate();
  date = this.nowDate.getDate() + " " + this.longMonth + " " + this.nowDate.getFullYear();

  constructor(private dialog: MatDialog, private router: Router, private service: MainService, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.paymentID = localStorage.getItem('PaymentID');

    this.service.getPayment(this.paymentID).subscribe((result: any) => {
      if (result.Success) {
        this.payment = result.Result;
        // console.log('result', result);
        this.payment.PaymentDate = this.payment.PaymentDate.substring(0, this.payment.PaymentDate.indexOf("T"));
        // console.log(this.payment);

        this.service.getTenantI("unit" + this.payment.UnitID).subscribe((result: any) => {
          if(result.Success){
            this.tenant = result.Result;
            // console.log(this.tenant);
          }
          else{
            this.matSnackBar.open(result.Message, 'x', {
              duration: 2500,
              verticalPosition: 'top',
              horizontalPosition: 'right',
              panelClass: ['red-snackbar']
            });
          }
        });

        this.toGetBalance.UnitID = this.payment.UnitID;

        localStorage.setItem('FromReceipt', "true");
        this.service.getBalance(this.toGetBalance).subscribe(result => {
          this.balance = result;
          // console.log(this.balance);
        });
        this.matSnackBar.open('Successfully generated payment receipt!', 'x', {
          duration: 2500,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['green-snackbar']
        });
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
    const dialogRef = this.dialog.open(SuccgenreceiptComponent, { restoreFocus: false });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  downloadPaymentReceipt() {
    let DATA = document.getElementById('receiptDiv');

    html2canvas(DATA).then(canvas => {
      let fileWidth = 210;
      let fileHeight = canvas.height * fileWidth / canvas.width;

      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);

      PDF.save(this.tenant.FirstName + this.tenant.LastName + "-Receipt-" + this.payment.PaymentDate + '.pdf');
    });
  }

  // public downloadAsPDF(){
  //   const doc = new jsPDF();

  //   const receiptDiv = this.receiptDiv.nativeElement;

  //   var html = htmlToPdfmake(receiptDiv.innerHTML);

  //   const documentDefinition = { content: html };
  //   pdfMake.createPdf(documentDefinition).open();
  // }

  clickCancel() {
    this.router.navigateByUrl('landlord/payments');
  }
}
