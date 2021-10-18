import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ConfdeletepaymentComponent } from 'src/app/landlord/payments/confdeletepayment/confdeletepayment.component';
import { MainService } from 'src/app/main.service';
import { GenstatementMdl } from 'src/app/Models/GenStatementMdl';
import { DeletepopComponent } from './deletepop/deletepop.component';
import { SsfuldeletepopComponent } from './ssfuldeletepop/ssfuldeletepop.component';
import { ViewpopComponent } from './viewpop/viewpop.component';

@Component({
  selector: 'app-readsavedpop',
  templateUrl: './readsavedpop.component.html',
  styleUrls: ['./readsavedpop.component.scss']
})
export class ReadsavedpopComponent implements OnInit {

  // base64File: any = "";
  // blobb;
  // PathReportString;
  // currentBlob: any;

  // constructor(private service: MainService) { }

  // ngOnInit(): void {
  //   this.service.getFile().subscribe(res => {
  //     this.base64File = res;
  //     console.log(this.base64File);

  //     const byteCharacters = atob(this.base64File);

  //     const byteNumbers = new Array(byteCharacters.length);
  //     for (let i = 0; i < byteCharacters.length; i++) {
  //       byteNumbers[i] = byteCharacters.charCodeAt(i);
  //     }

  //     const byteArray = new Uint8Array(byteNumbers);

  //     const blob = new Blob([byteArray], { type: 'application/pdf' });

  //     const blobUrl = URL.createObjectURL(blob);
  //     // var binaryImg = atob(this.base64File);
  //     // var binaryImgLength = binaryImg.length;
  //     // var arrayBuffer = new ArrayBuffer(binaryImgLength);
  //     // var uInt8Array = new Uint8Array(arrayBuffer);

  //     // for (var i = 0; i < length; i++) {
  //     //   uInt8Array[i] = binaryImg.charCodeAt(i);
  //     // }

  //     // this.currentBlob = new Blob([uInt8Array], { type: 'application/pdf' });
  //     // document.querySelector("iframe").src = URL.createObjectURL(this.currentBlob);

  //     //this.PathReportString = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' +result);

  //     //this.base64File.split(',');
  //     //console.log(this.base64File);

  //     //let content = encodeURIComponent(this.base64File);

  //     //const byteArray = decodeURIComponent(atob(this.base64File).split('').map(x => '%' + x.charCodeAt(0).toString(16)).join(''));
  //     //const byteArray = new Uint8Array(atob(this.base64File).split('').map(char => char.charCodeAt(0)));
  //     //console.log(byteArray);

  //     //const byteArray = new Uint8Array(atob(this.base64File).split(',').map(char => char.charCodeAt(0)));
  //     //this.blobb = new Blob([byteArray], { type: 'application/pdf' });

  //     //const url = window.URL.createObjectURL(this.blobb);

  //     // i.e. display the PDF content via iframe
  //     //document.querySelector("iframe").src = url;
  //     document.querySelector("iframe").src = blobUrl;
  //   });
  // }

  // allBuildings: any;
  // building: any;
  // unitsList: any[] =[];
  // selectUnit: any;

  // form: FormGroup;

  // constructor(private router: Router, private service: MainService, private formBuilder: FormBuilder) { }

  // ngOnInit(): void {
  //   this.service.GetListBuildingUnitsLandlord().subscribe((data) => {
  //     this.allBuildings = data;
  //   });

  //   this.form = this.formBuilder.group({
  //     selectedBuilding: [Validators.required],
  //     selectedUnit: [Validators.required],
  //     startDate: [Validators.required],
  //     endDate: [Validators.required]
  //   });
  // }

  // // onClick(){
  // //   this.router.navigateByUrl('landlord/succesfullygenstatemnt');
  // // }

  // onClick(form) {
  //   let statement = new GenstatementMdl();

  //   statement.BuildingID = form.selectedBuilding;
  //   statement.UnitID = form.selectedUnit;
  //   statement.StartDate = form.startDate;
  //   statement.EndDate = form.endDate;

  //   this.service.updateStatementDataLandlord(statement);
  // }

  // onBuildingChange(event) {
  //   this.building = event.value;
  //   console.log(this.building);
  //   console.log(event);
  //   this.unitsList = [];

  //   this.allBuildings.forEach(element => {
  //     console.log(element);
  //     if (element.Building.BuildingID == this.building) {
  //       console.log(element.Building.BuildingID);
  //       element.Units.forEach(element2 => {
  //         console.log(element2);
  //         this.unitsList.push(element2);
  //       });
  //     }
  //   });
  //   console.log(this.unitsList);
  // }

  // onUnitChange(event){
  //   this.selectUnit = event.value;
  //   console.log(this.selectUnit);
  // }

  allProofOfPayments: any;

  tenantID = sessionStorage['TenantID'];

  deletePOP: boolean = false;

  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('htmlData') htmlData: ElementRef;
  displayedColumns: string[] = ['Date', 'FileName', 'Type', 'BuildingName', 'UnitNumber', 'ViewFile', 'Icon'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router, private dialog: MatDialog, private service: MainService, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.service.getProofsOfPayments(this.tenantID).subscribe((data:any) => {
      if(data.Success){
        this.allProofOfPayments = data.Result;
        this.dataSource.data = data.Result;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        console.log(data);
      }
      else{
        this.matSnackBar.open(data.Message, 'x', {
          duration: 2500,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['red-snackbar']
        });
      }
    });
  }

  ViewPDFClicked(pop){
    console.log(pop);
    console.log(pop.ProofOfPaymentID);
    sessionStorage['ProofOfPaymentID'] = pop.ProofOfPaymentID;
    sessionStorage['ProofOfPaymentFileType'] = pop.Type;
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

  onClickCreate(){
    this.router.navigateByUrl("tenant/proofofpayment");
  }

  onClickEdit(payment){
    console.log(payment);
    console.log(payment.ProofOfPaymentID);

    sessionStorage['ProofOfPaymentID'] = payment.ProofOfPaymentID;

    this.router.navigateByUrl("tenant/readproofofpayment/editpop");
  }

  onClickDelete(payment){
    sessionStorage['ProofOfPaymentID'] = payment.ProofOfPaymentID;
    console.log(payment);
    console.log(payment.ProofOfPaymentID);
    
    const dialogRef = this.dialog.open(DeletepopComponent, {
      restoreFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      this.deletePOP = result.data;

      if(this.deletePOP == true){
        //doDelete
        this.service.deleteProofOfPayment(payment.ProofOfPaymentID).subscribe((res: any) => {
          //console.log(res);

          if (res.Success) {
            this.service.getProofsOfPayments(this.tenantID).subscribe((data:any) => {
              if(data.Success){
                this.allProofOfPayments = data.Result;
                this.dataSource.data = data.Result;
                this.dataSource.sort = this.sort;
                console.log(data);
              }
              else{
                this.matSnackBar.open(data.Message, 'x', {
                  duration: 2500,
                  verticalPosition: 'top',
                  horizontalPosition: 'right',
                  panelClass: ['red-snackbar']
                });
              }
            });
            this.matSnackBar.open(res.Message, 'x', {
              duration: 2500,
              verticalPosition: 'top',
              horizontalPosition: 'right',
              panelClass: ['green-snackbar']
            });
          } else {
            this.matSnackBar.open(res.Message, 'x', {
              duration: 2500,
              verticalPosition: 'top',
              horizontalPosition: 'right',
              panelClass: ['red-snackbar']
            });
          }
        });
        //doDelete
  
        // const dialogRef = this.dialog.open(SsfuldeletepopComponent, {
        //   restoreFocus: false
        // });
    
        // dialogRef.afterClosed().subscribe(result => {
          // this.service.getProofsOfPayments(this.tenantID).subscribe(res => {
          //   this.allProofOfPayments = res;
          // });
        // });
      }
    });
    // const dialogRef = this.dialog.open(ConfdeletepaymentComponent, {restoreFocus: false});

    // dialogRef.afterClosed().subscribe(result => {     
    // });
  }
}
