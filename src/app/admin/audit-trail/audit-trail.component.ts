import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-audit-trail',
  templateUrl: './audit-trail.component.html',
  styleUrls: ['./audit-trail.component.scss']
})
export class AuditTrailComponent implements OnInit {
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('htmlData') htmlData: ElementRef;
  displayedColumns: string[] = ['Date', 'Time', 'Email', 'FullName', 'TransactionType', 'CriticalData'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  formGroup: FormGroup;
  loading: boolean = false;

  constructor(private adminService: AdminService,
    private matSnackBar: MatSnackBar,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      startDate: [null],
      endDate: [null],
      emailAddress: [null],
      fullName: [null],
      transactionType: [null],
      criticalData: [null],
    });
    this.onLoadData();
  }

  onLoadData() {
    this.loading = true;
    let startDate = null;
    let endDate = null;
    if(this.formGroup.controls.startDate.value) {
      startDate = new Date(this.formGroup.controls.startDate.value);
      startDate.setHours(0);
      startDate.setMinutes(0);
      startDate.setSeconds(0);
      startDate.setMilliseconds(0);
      startDate = this.datePipe.transform(startDate, 'yyyy/MM/dd HH:mm:ss')
    }
    if (this.formGroup.controls.endDate.value) {
      endDate = new Date(this.formGroup.controls.endDate.value);
      endDate.setHours(23);
      endDate.setMinutes(59);
      endDate.setSeconds(59);
      endDate.setMilliseconds(59);
      endDate = this.datePipe.transform(endDate, 'yyyy/MM/dd HH:mm:ss')
    }
    const obj = {
      startDate: startDate,
      endDate: endDate,
      transactionType: this.formGroup.controls.transactionType.value,
      userFullName: this.formGroup.controls.fullName.value,
      userEmailAddress: this.formGroup.controls.emailAddress.value,
      criticalData: this.formGroup.controls.criticalData.value,
    };
    this.adminService.getAuditTrail(obj).subscribe((response: any) => {
      if (response.Success) {
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
      this.loading = false;
    });
  }
}
