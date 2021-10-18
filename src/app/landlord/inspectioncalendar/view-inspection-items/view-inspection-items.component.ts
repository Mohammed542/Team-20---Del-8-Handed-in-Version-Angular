import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-view-inspection-items',
  templateUrl: './view-inspection-items.component.html',
  styleUrls: ['./view-inspection-items.component.scss']
})
export class ViewInspectionItemsComponent implements OnInit {
  clearOutDataSource = new MatTableDataSource<any>([]);
  takeOnDataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('htmlData') htmlData: ElementRef;
  displayedColumns: string[] = ['Space', 'Ok', 'Problem', 'Amount'];
  inspectionItems: any[] = [];
  inspection: any;

  constructor(private mainService: MainService, private route: ActivatedRoute, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.mainService.getInspectionDetail(this.route.snapshot.params.inspectionId).subscribe((response: any) => {
      if (response.Success) {
        this.inspection = response.Result;
      } else {
        this.matSnackBar.open('Failed to get inspection', 'x', {
          duration: 2500,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['red-snackbar']
        });
      }
    });
    this.mainService.getInspectionItems(+sessionStorage.getItem('LandlordID'), 1).subscribe((response: any) => {
      if (response.Success) {
        this.takeOnDataSource.data = response.Result;
        this.takeOnDataSource.sort = this.sort;
      } else {
        this.matSnackBar.open('Failed to get inspection', 'x', {
          duration: 2500,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['red-snackbar']
        });
      }
    });
    this.mainService.getInspectionItems(+sessionStorage.getItem('LandlordID'), 2).subscribe((response: any) => {
      if (response.Success) {
        this.clearOutDataSource.data = response.Result;
        this.clearOutDataSource.sort = this.sort;
      } else {
        this.matSnackBar.open('Failed to get inspection', 'x', {
          duration: 2500,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['red-snackbar']
        });
      }
    });
  }

}
