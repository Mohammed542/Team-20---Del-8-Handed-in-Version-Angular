import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main.service';
import { ConfdeletepaymentComponent } from './confdeletepayment/confdeletepayment.component';
import { SucsdeletepaymentComponent } from './sucsdeletepayment/sucsdeletepayment.component';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  allPayments: any;

  deletePayment: boolean = false;

  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('htmlData') htmlData: ElementRef;
  displayedColumns: string[] = ['Date', 'PaymentName', 'Method', 'BuildingName', 'UnitNumber', 'Tenant', 'Amount', 'Icon'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router, private dialog: MatDialog, private service: MainService, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
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

  // onClick(){
  //   this.router.navigateByUrl('landlord/payments/raisepayment')
  // }

  onClickk() {
    this.router.navigateByUrl('landlord/payments/capturepayment')
  }

  onClickGenReceipt(id) {
    localStorage.setItem('PaymentID', id.PaymentID);
    this.router.navigateByUrl('landlord/payments/generatereceipt')
  }

  onClickEdit(id) {
    localStorage.setItem('PaymentID', id.PaymentID);
    //route to edit payment
  }

  onClickDelete(id) {
    localStorage.setItem('PaymentID', id.PaymentID);

    const dialogRef = this.dialog.open(ConfdeletepaymentComponent, {
      restoreFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      this.deletePayment = result.data;

      if (this.deletePayment) {
        //doDelete
        // console.log("delete payment");
        this.service.deletePayment(id.PaymentID).subscribe((result: any) => {
          // console.log(result);
          if (result.Success) {
            this.matSnackBar.open(result.Message, 'x', {
              duration: 2500,
              verticalPosition: 'top',
              horizontalPosition: 'right',
              panelClass: ['green-snackbar']
            });

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
          else {
            this.matSnackBar.open(result.Message, 'x', {
              duration: 2500,
              verticalPosition: 'top',
              horizontalPosition: 'right',
              panelClass: ['red-snackbar']
            });
          }
        })
        //doDelete

        // const dialogRef = this.dialog.open(SucsdeletepaymentComponent, {
        //   restoreFocus: false
        // });

        // dialogRef.afterClosed().subscribe(result => {
        //   this.service.getPayments().subscribe((data) => {
        //     this.allPayments = data;
        //     console.log(data);

        //     this.allPayments.forEach(element => {
        //       element.Date = element.Date.substring(0, element.Date.indexOf("T"))
        //       console.log(element);
        //     });
        //   });
        // });
      }
    });
  }
}
