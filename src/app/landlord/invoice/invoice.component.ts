import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main.service';
import { RaisepaymentComponent } from '../payments/raisepayment/raisepayment.component';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  allCharges: any;
  
  scsfulCharge: boolean = false;

  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('htmlData') htmlData: ElementRef;
  displayedColumns: string[] = ['Date', 'ChargeName', 'BuildingName', 'UnitNumber', 'Tenant', 'Amount', 'Icon'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  // form: FormGroup;
  // control = new FormControl();

  constructor(private router: Router, private dialog: MatDialog, private service: MainService, private formBuilder: FormBuilder, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.service.getAllCharges().subscribe((data: any) => {
      if(data.Success){
        this.allCharges = data.Result;
        // console.log(data);
        this.dataSource.data = this.allCharges;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
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

    // this.form = this.formBuilder.group({
    //   AccountID: ['']
    // });
  }

  // onClick(){
  //   this.router.navigateByUrl('landlord/payments/raisepayment')
  // }

  // onClickk(){
  //   this.router.navigateByUrl('landlord/payments/capturepayment')
  // }

  // onClickGenReceipt(){
  //   this.router.navigateByUrl('landlord/payments/generatereceipt')
  // }

  // onClickDelete(){
  //   // const dialogRef = this.dialog.open(ConfdeletepaymentComponent, {restoreFocus: false});

  //   // dialogRef.afterClosed().subscribe(result => {     
  //   // });
  // }

  clicked = "yes";

  onClickRaise(){
    // this.router.navigateByUrl('landlord/payments/raisepayment');
    const dialogRef = this.dialog.open(RaisepaymentComponent, {restoreFocus: false});

    dialogRef.afterClosed().subscribe(result => {
      this.scsfulCharge = result.data;
      
      if(this.scsfulCharge){
        this.service.getAllCharges().subscribe((data: any) => {
          if(data.Success){
            this.allCharges = data.Result;
            // console.log(data);
            this.dataSource.data = this.allCharges;
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
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
    });
  }

  onClickGenInvoice(charge){
    // let elementID: string = (event.target as Element).id;
    // let elementValue: string = (event.target as Element).nodeValue;
    // console.log("id", elementID);
    // console.log("id", elementValue);
    // console.log((event.target as Element).id);
    // console.log((event.target as Element).nodeValue);

    // var target = event.target || event.srcElement || event.currentTarget;
    // var idAttr = target.attributes.id;
    // var value2 = idAttr.nodeValue;
    // console.log("value2", value2);

    // console.log(event.value);
    // console.log(form);
    // console.log(this.control);
    localStorage.setItem('AccountID', charge.AccountID);
    this.router.navigateByUrl("landlord/invoice/generateinvoice");
  }

  onClickEdit(id){

  }

  onClickDelete(id){

  }
}
