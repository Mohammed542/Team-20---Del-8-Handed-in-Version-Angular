import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-viewmbilldetails',
  templateUrl: './viewmbilldetails.component.html',
  styleUrls: ['./viewmbilldetails.component.scss']
})
export class ViewmbilldetailsComponent implements OnInit {
  
  billBuildingName: any = "";
  billMonth: any = "";
  billYear: any = 0;

  @ViewChild(MatSort) sort1: MatSort;
  @ViewChild(MatSort) sort2: MatSort;
  @ViewChild(MatSort) sort3: MatSort;
  @ViewChild('htmlData') htmlData: ElementRef;
  dataSource1 = new MatTableDataSource<any>([]);
  displayedColumns1: string[] = ['BuildingUnits', 'BuildingRate', 'BuildingAmount'];
  dataSource2 = new MatTableDataSource<any>([]);
  displayedColumns2: string[] = ['DisposalChargePercent', 'DisposalChargeRate', 'FixedChargeRate'];
  dataSource3 = new MatTableDataSource<any>([]);
  displayedColumns3: string[] = ['PreviousReading', 'CurrentReading', 'ConsumptionChargeRate', 'FixedChargeRate'];

  @ViewChild(MatPaginator) paginator1: MatPaginator;
  @ViewChild(MatPaginator) paginator2: MatPaginator;
  @ViewChild(MatPaginator) paginator3: MatPaginator;

  constructor(private mainService: MainService, private router: Router, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    var mbid = sessionStorage.getItem('MunicipalityBillDetailsID');
    this.billBuildingName = localStorage.getItem('MBBuildingName');
    this.billMonth = localStorage.getItem('MBMonth');
    this.billYear = localStorage.getItem('MBYear');
    this.mainService.getMunicipalBillDetails(mbid).subscribe((response: any) => {
      console.log(response);
      
      if (response.Success) {
        this.dataSource1.data = response.Result.ElectricityBuilding;
        this.dataSource1.sort = this.sort1;
        this.dataSource1.paginator = this.paginator1;
        this.dataSource2.data = response.Result.SewageBuilding;
        this.dataSource2.sort = this.sort2;
        this.dataSource2.paginator = this.paginator2;
        this.dataSource3.data = response.Result.WaterAndSanitationBuilding;
        this.dataSource3.sort = this.sort3;
        this.dataSource3.paginator = this.paginator3;
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

}
