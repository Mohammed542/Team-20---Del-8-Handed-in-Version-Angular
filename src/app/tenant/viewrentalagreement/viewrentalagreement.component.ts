import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MainService } from 'src/app/main.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TenantAgreementViewerComponent } from './tenant-agreement-viewer/tenant-agreement-viewer.component';

@Component({
  selector: 'app-viewrentalagreement',
  templateUrl: './viewrentalagreement.component.html',
  styleUrls: ['./viewrentalagreement.component.scss']
})
export class ViewrentalagreementComponent implements OnInit {
  allAgreements: any;

  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('htmlData') htmlData: ElementRef;
  displayedColumns: string[] = ['Tenant', 'Building', 'Unit', 'Status', 'Type', 'StartDate', 'EndDate', 'Options'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private router: Router, private service: MainService, private dialog: MatDialog, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    let TenantID = sessionStorage['TenantID'];
    this.service.getRentalAgreementsT(TenantID).subscribe((res: any) => {
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

  searchChange(event){
    //console.log(event);
    console.log(event.target.value);

    if(event.target.value != ""){
      this.service.getSearchedTenants(event.target.value).subscribe(res => {
        this.allAgreements = res;
        console.log("do search");
        console.log(res);
        this.dataSource.data = this.allAgreements;

        // this.allLandlords.forEach(element => {
        //   element.FirstName = element.FirstName + " " + element.LastName;
        // });
      });
    }
    else{
      this.service.getTenants().subscribe(res => {
        this.allAgreements = res;
        console.log("done search");
      });
    }
  }

  onViewRA(raDoc) {
    console.log(raDoc);
    sessionStorage['RentalAgreementID'] = raDoc.RentalAgreementID;
    const dialogRef = this.dialog.open(TenantAgreementViewerComponent, {
      restoreFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onClickViewAgreement(){
    this.router.navigateByUrl('')
  }

  onClick(){
    this.router.navigateByUrl('tenant/home')
  }

  onClickCancelAgreement(){
    const dialogRef = this.dialog.open(ViewrentalagreementComponent, {restoreFocus: false});

    dialogRef.afterClosed().subscribe(result => {     
    });
  }
}
