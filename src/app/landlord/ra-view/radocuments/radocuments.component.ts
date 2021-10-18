import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import { MainService } from 'src/app/main.service';
import { RaViewComponent } from '../ra-view.component';
import { RADocumentViewerComponent } from '../radocument-viewer/radocument-viewer.component';

@Component({
  templateUrl: './radocuments.component.html',
  styleUrls: ['./radocuments.component.scss']
})
export class RADocumentsComponent implements OnInit {

  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('htmlData') htmlData: ElementRef;
  displayedColumns: string[] = ['Tenant', 'Building', 'Unit', 'Status', 'Type', 'StartDate', 'EndDate', 'Options'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  allAgreements: any;
  
  constructor(private router: Router, private service: MainService, private dialog: MatDialog, private matSnackBar: MatSnackBar) { }

  

  ngOnInit(): void {
    this.service.getRentalAgreementsL().subscribe((res: any) => {
      if (res.Success) {
        this.allAgreements = res.Result;
        console.log(this.allAgreements);
        this.dataSource.data = this.allAgreements;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

      } else {
        this.matSnackBar.open(res.Message, 'x', {
          duration: 2500,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['red-snackbar']
        });
      }
    });
  }

  onViewRA(raDoc) {
    console.log(raDoc);
    sessionStorage['RentalAgreementID'] = raDoc.RentalAgreementID;
    const dialogRef = this.dialog.open(RADocumentViewerComponent, {
      restoreFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onClickViewAgreement() {
    this.router.navigateByUrl('')
  }

  onClick() {
    this.router.navigateByUrl('landlord/home')
  }

  onDeactivateRA(raDoc) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: 'Confirm',
        message:
          'Are you sure you want to deactivate this Rental Agreement?',
      },
    })
      .afterClosed()
      .subscribe((response) => {
        if (response) {
          this.service.cancelRentalAgreement(raDoc.RentalAgreementID).subscribe((result: any) => {
            if (result.Success) {
              this.service.getRentalAgreementsL().subscribe((res: any) => {
                if (res.Success) {
                  this.allAgreements = res.Result;
                  console.log(this.allAgreements);
                  this.dataSource.data = this.allAgreements;
                  this.dataSource.sort = this.sort;
                  this.dataSource.paginator = this.paginator;

                } else {
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
              this.matSnackBar.open(result.Message, 'x', {
                duration: 2500,
                verticalPosition: 'top',
                horizontalPosition: 'right',
                panelClass: ['red-snackbar']
              });
            }
          });
        }
        location.reload();
      });

  }

  onClickCancelAgreement() {
    const dialogRef = this.dialog.open(RaViewComponent, { restoreFocus: false });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
