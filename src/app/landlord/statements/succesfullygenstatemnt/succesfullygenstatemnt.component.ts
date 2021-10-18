import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MainService } from 'src/app/main.service';
import { GenstatementMdl } from 'src/app/Models/GenStatementMdl';
import { ConfirmstatementsendComponent } from '../confirmstatementsend/confirmstatementsend.component';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-succesfullygenstatemnt',
  templateUrl: './succesfullygenstatemnt.component.html',
  styleUrls: ['./succesfullygenstatemnt.component.scss']
})
export class SuccesfullygenstatemntComponent implements OnInit {
  public statementData: GenstatementMdl;
  genStatementData: Observable<any>;
  unitNumber: any;
  finalBalance: any;

  currDate = new Date(Date.now()).toLocaleString('en-ZA').split(',')[0];

  receivedData = {
    buildingName: "",
    unitNumber: 0,
    date: this.currDate,
    tableData: ''
  };

  @ViewChild('htmlData') htmlData:ElementRef;

  tenantData: any;

  constructor(private dialog: MatDialog, private router: Router, private service: MainService) { }

  ngOnInit(): void {
    this.service.getStatementDataLandlord().subscribe(data => this.statementData = data);
    console.log(this.statementData);
    
    this.service.getStatementLandlord(this.statementData).subscribe((data) => {
      this.genStatementData = data;
      this.unitNumber = data.UnitNumber;
      this.receivedData.unitNumber = data.UnitNumber;
      this.receivedData.tableData = data.tableData;
      let lengt = this.receivedData.tableData.length - 1;
      this.finalBalance = this.receivedData.tableData[lengt];

      console.log("receiddata", this.receivedData);
      console.log("this.genStatementData", this.genStatementData);
    });

    this.service.getTenantI("unit" + this.statementData.UnitID).subscribe(res => {
      this.tenantData = res;
      console.log(this.tenantData);
    });
  }

  // openDialog() {
  //   const dialogRef = this.dialog.open(ConfirmstatementsendComponent, {restoreFocus: false});

  //   dialogRef.afterClosed().subscribe(result => {     
  //   });
  // }

  // clickCancel(){
  //   this.router.navigateByUrl('landlord/statements');
  // }

  onClick(){
    this.router.navigateByUrl('landlord/statements');
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

      //PDF.save('angular-demo.pdf');

      
      var base = PDF.output('datauristring');

      console.log("base is", base);

      this.service.sendPDFBase64(base).subscribe(res => {
        console.log(res);
      });
    });
  }
}
