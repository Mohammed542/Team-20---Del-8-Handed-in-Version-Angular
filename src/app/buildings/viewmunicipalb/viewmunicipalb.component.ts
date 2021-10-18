import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main.service';
import { ViewmbilldetailsComponent } from './viewmbilldetails/viewmbilldetails.component';

@Component({
  selector: 'app-viewmunicipalb',
  templateUrl: './viewmunicipalb.component.html',
  styleUrls: ['./viewmunicipalb.component.scss']
})
export class ViewmunicipalbComponent implements OnInit {
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('htmlData') htmlData: ElementRef;
  displayedColumns: string[] = ['BuildingName', 'Month', 'Year'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private mainService: MainService, private router: Router, private matSnackBar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.mainService.getAllMunicipalBills().subscribe((response: any) => {
      if(response.Success) {
        console.log(response);
        
        this.dataSource.data = response.Result;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      } else {
        this.matSnackBar.open(response.Message, 'x', {
          duration: 2500,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['red-snackbar']
        });
      }
    });
  }

  onOpenMunicipal(row) {
    sessionStorage['MunicipalityBillDetailsID'] = row.MunicipalID;
    localStorage.setItem('MBBuildingName', row.BuildingName);
    localStorage.setItem('MBMonth', row.Month);
    localStorage.setItem('MBYear', row.Year);
    const dialogRef = this.dialog.open(ViewmbilldetailsComponent, {
      restoreFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    // this.router.navigate(['inspection/view-inspection-items', row.InspectionID]);
  }
}
