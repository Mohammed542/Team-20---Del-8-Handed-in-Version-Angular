import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { MainService } from 'src/app/main.service';
import { GenstatementMdl } from 'src/app/Models/GenStatementMdl';
import { Observable, Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-succgenstatement',
  templateUrl: './succgenstatement.component.html',
  styleUrls: ['./succgenstatement.component.scss']
})
export class SuccgenstatementComponent implements OnInit {
  public statementData: GenstatementMdl;
  // public subscription: Subscription;
  genStatementData: Observable<any>;
  unitNumber: any;
  finalBalance: any;

  currDate = new Date(Date.now()).toLocaleString('en-ZA').split(',')[0];

  receivedData = {
    buildingName: "",
    unitNumber: 0,
    date: this.currDate,
    tableData: []
  };

  @ViewChild('htmlData') htmlData:ElementRef;

  tenantID = sessionStorage['TenantID'];
  tenantIDStr: string;

  tenantData: any;

  constructor(private router: Router, private service: MainService, private matSnackBar: MatSnackBar) { }

  // public ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }

  ngOnInit(): void {
    this.tenantID = sessionStorage['TenantID'];
    this.tenantIDStr = this.tenantID.toString();
    this.service.getTenantI(this.tenantIDStr).subscribe((res: any) => {
      // this.tenantData = res;
      // console.log(this.tenantData);
      if(res.Success){
        this.tenantData = res.Result;
        // this.matSnackBar.open('Successfully Generated Statement', 'x', {
        //   duration: 2500,
        //   verticalPosition: 'top',
        //   panelClass: ['green-snackbar']
        // });
      }
      else{
        this.matSnackBar.open(res.Message, 'x', {
          duration: 4000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['red-snackbar']
        });
        this.router.navigateByUrl('tenant/generatestatement');
      }
    });
    // this.subscription = this.service.getStatementData().subscribe(data => this.statementData = data);
    this.service.getStatementData().subscribe((data: any) => {
      // this.statementData = data

      if(data == null){
        this.matSnackBar.open('Your browser was reloaded! Please re-enter the details below.', 'x', {
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['yellow-snackbar']
        });
        this.router.navigateByUrl('tenant/generatestatement');
      }
      else{
        this.statementData = data;
        // this.matSnackBar.open('Successfully Generated Statement', 'x', {
        //   duration: 2500,
        //   verticalPosition: 'top',
        //   panelClass: ['green-snackbar']
        // });
        this.service.getStatement(this.statementData).subscribe((data:any) => {
          // console.log(data);
          if (data.Success) {
            this.genStatementData = data.Result;
            this.unitNumber = data.Result.UnitNumber;
            this.receivedData.buildingName = data.Result.BuildingName;
            this.receivedData.unitNumber = data.Result.UnitNumber;
            // this.receivedData.date = data.CurrentDate;
            this.receivedData.tableData = data.Result.tableData;
            let lengt = this.receivedData.tableData.length - 1;
            this.finalBalance = this.receivedData.tableData[lengt];
    
            this.matSnackBar.open('Successfully Generated Statement!', 'x', {
              duration: 2500,
              verticalPosition: 'top',
              horizontalPosition: 'right',
              panelClass: ['green-snackbar']
            });
            // console.log("receiddata", this.receivedData);
            // console.log("this.genStatementData", this.genStatementData);
          } else {
            this.matSnackBar.open(data.Message, 'x', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'right',
              panelClass: ['red-snackbar']
            });
          }
        });
      }
    });
    // console.log(this.statementData);
    // console.log(this.subscription);
    // this.service.getStatement(this.statementData).subscribe(dat => this.genStatementData = dat);
    

    // this.genStatementData = this.service.getStatement(this.statementData);
    // console.log("genData", this.genStatementData);

    // this.service.GetListBuildingUnits().subscribe((data) => {
    //   this.allBuildings = data;
    // });
  }

  onClick(){
    this.router.navigateByUrl('tenant/generatestatement');
  }

  onHomeClick(){
    this.router.navigateByUrl('tenant/home');
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
