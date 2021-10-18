import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-viewtpayments',
  templateUrl: './viewtpayments.component.html',
  styleUrls: ['./viewtpayments.component.scss']
})
export class ViewtpaymentsComponent implements OnInit {
  allPayments: any;
  allCharges: any;

  deletePayment: boolean = false;

  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['Date', 'PaymentName', 'Method', 'BuildingName', 'UnitNumber', 'Tenant', 'Amount'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource1 = new MatTableDataSource<any>([]);
  @ViewChild("sort1") sort1: MatSort;
  displayedColumns1: string[] = ['Date', 'ChargeName', 'BuildingName', 'UnitNumber', 'Tenant', 'Amount'];

  @ViewChild("paginator1") paginator1: MatPaginator;

  constructor(private router: Router, private dialog: MatDialog, private service: MainService, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.service.GetAllViewTPayments().subscribe((data: any) => {
      if (data.Success) {
        this.allPayments = data.Result;
        // console.log(data);

        this.allPayments.forEach(element => {
          element.Date = element.Date.substring(0, element.Date.indexOf("T"))
          // console.log(element);
        });

        this.dataSource.data = data.Result;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
      else {
        this.matSnackBar.open(data.Message, 'x', {
          duration: 2500,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['red-snackbar']
        });
      }
    });

    this.service.GetAllViewTCharges().subscribe((data: any) => {
      if(data.Success){
        this.allCharges = data.Result;
        // console.log(data);
        this.dataSource1.data = this.allCharges;
        this.dataSource1.sort = this.sort1;
        this.dataSource1.paginator = this.paginator1;
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

  searchChange(event) {
    //console.log(event);
    // console.log(event.target.value);

    if (event.target.value != "") {
      this.service.getSearchedPayments(event.target.value).subscribe((res: any) => {
        if (res.Success) {
          this.allPayments = res.Result;
          // console.log("do search");
          // console.log(res);

          this.allPayments.forEach(element => {
            element.Date = element.Date.substring(0, element.Date.indexOf("T"))
            // console.log(element);
          });
          // this.allPayments.forEach(element => {
          //   element.Name = element.Name + " " + element.Surname;
          // });
          this.dataSource.data = res.Result;
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
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
    }
    else {
      // this.service.getPayments().subscribe(res => {
      //   this.allPayments = res;
      //   console.log("done search");
      // });
      this.service.getPayments().subscribe((data: any) => {
        if (data.Success) {
          this.allPayments = data.Result;
          // console.log(data);

          this.allPayments.forEach(element => {
            element.Date = element.Date.substring(0, element.Date.indexOf("T"))
            // console.log(element);
          });

          this.dataSource.data = data.Result;
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        }
        else {
          this.matSnackBar.open(data.Message, 'x', {
            duration: 2500,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: ['red-snackbar']
          });
        }
      });
    }
  }
}
