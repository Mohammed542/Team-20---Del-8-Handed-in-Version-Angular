import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main.service';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-geninvoice',
  templateUrl: './geninvoice.component.html',
  styleUrls: ['./geninvoice.component.scss']
})
export class GeninvoiceComponent implements OnInit {

  chargeIn: any;
  amtexcl: any;
  vatperc: any;
  vatamt: any;
  dateIn: any;
  topdtesplit: any;
  topdat: any;
  tenantData: any;
  invDeets: any;

  constructor(private router: Router, private service: MainService, private dialog: MatDialog, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.service.getLatestVatI(localStorage.getItem('AccountID')).subscribe((result) => {
      this.vatperc = result;

      this.service.getCharge(localStorage.getItem('AccountID')).subscribe(res => {
        this.chargeIn = res;

        if(this.vatperc == 1){
          this.amtexcl = this.chargeIn.Amount;
          this.vatamt = 0;
        }
        else{
          this.amtexcl = this.chargeIn.Amount - (this.chargeIn.Amount * this.vatperc.VATPercentage / 100);
          this.vatamt = this.chargeIn.Amount*this.vatperc.VATPercentage / 100;
        }
        
        this.dateIn = this.chargeIn.Date.toLocaleString('en-ZA').split('T')[0];
        this.topdtesplit = this.dateIn.split('-');
        this.topdat = this.topdtesplit[2]+"/"+this.topdtesplit[1]+"/"+this.topdtesplit[0].substring(2);
        console.log(this.chargeIn);      
  
        this.service.getTenantI("ra" + this.chargeIn.RentalAgreementID).subscribe((res: any) => {
          if(res.Success){
            this.tenantData = res.Result;
            console.log(this.tenantData);
          }
          else{
            this.matSnackBar.open(res.Message, 'x', {
              duration: 2500,
              verticalPosition: 'top',
              horizontalPosition: 'right',
              panelClass: ['red-snackbar']
            });
          }
        });
      });
    });
    console.log(localStorage.getItem('AccountID'));
    

    // this.service.getLatestVat().subscribe(result => {
    //   this.vatperc = result;
    // });
    

    this.service.GetInvoiceDeets(localStorage.getItem('AccountID')).subscribe((res: any) => {
      if(res.Success){
        this.invDeets = res.Result;
        console.log(this.invDeets);
      }
      else{
        this.matSnackBar.open(res.Message, 'x', {
          duration: 2500,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['red-snackbar']
        });
      }
    });

    // var newstr = "ra" + this.chargeIn.RentalAgreementID;
    
  }

  onBack(){
    this.router.navigateByUrl('landlord/invoice');
  }

  onHomeClick(){
    this.router.navigateByUrl('landlord/home');
  }

  public openPDF():void {
    let DATA = document.getElementById('htmlData');

    html2canvas(DATA).then(canvas => {
      let fileWidth = 210;
      let fileHeight = canvas.height * fileWidth / canvas.width;

      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);

      PDF.save('angular-demo.pdf');
    });
  }

}
