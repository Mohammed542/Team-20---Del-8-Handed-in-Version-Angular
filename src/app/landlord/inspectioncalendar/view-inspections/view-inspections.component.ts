import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-view-inspections',
  templateUrl: './view-inspections.component.html',
  styleUrls: ['./view-inspections.component.scss']
})
export class ViewInspectionsComponent implements OnInit {
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('htmlData') htmlData: ElementRef;
  displayedColumns: string[] = ['Date', 'StartTime', 'EndTime', 'InspectionType', 'Building', 'Unit', 'Status', 'Comment'];

  constructor(private mainService: MainService,private router: Router) { }

  ngOnInit(): void {
    this.mainService.GetAllInspectionWithDetail(+sessionStorage.getItem('LandlordID')).subscribe((response: any) => {
    if(response.Success) {
      this.dataSource.data = response.Result;
      this.dataSource.sort = this.sort;
    } else {

    }
  });
  }

  onOpenInspection(row) {
    this.router.navigate(['inspection/view-inspection-items', row.InspectionID]);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
