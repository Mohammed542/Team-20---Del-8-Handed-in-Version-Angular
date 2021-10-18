import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main.service';
import { RADocumentViewerComponentCID } from '../radocument-viewerCID/radocument-viewer.component';

@Component({
  templateUrl: './company-id.component.html',
  styleUrls: ['./company-id.component.scss']
})
export class CompanyIDComponent implements OnInit {

  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('htmlData') htmlData: ElementRef;
  displayedColumns: string[] = ['Tenant', 'Building', 'Unit', 'Status', 'Type', 'StartDate', 'EndDate', 'Options'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  allID: any;
  
  constructor(private router: Router, private service: MainService, private dialog: MatDialog, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.service.getCompanyID().subscribe((res: any) => {
      if (res.Success) {
        this.allID = res.Result;
        console.log(this.allID);
        this.dataSource.data = this.allID;
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

  onViewCID(raDoc) {
    console.log(raDoc);
    sessionStorage['RentalAgreementID'] = raDoc.RentalAgreementID;
    const dialogRef = this.dialog.open(RADocumentViewerComponentCID, {
      restoreFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onClick() {
    this.router.navigateByUrl('landlord/home')
  }

}
