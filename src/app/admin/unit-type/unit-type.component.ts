import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import { AdminService } from '../admin.service';
import { SaveUnitTypeComponent } from './save-unit-type/save-unit-type.component';

@Component({
  selector: 'app-unit-type',
  templateUrl: './unit-type.component.html',
  styleUrls: ['./unit-type.component.scss']
})
export class UnitTypeComponent implements OnInit {
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('htmlData') htmlData: ElementRef;
  displayedColumns: string[] = ['Description', 'Actions'];

  constructor(private adminService: AdminService,
    private matSnackBar: MatSnackBar,
    public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.onLoadData();
  }

  onLoadData() {
    this.adminService.get('UnitTypes').subscribe((response: any) => {
      if (response.Success) {
        this.dataSource.data = response.Result;
        this.dataSource.sort = this.sort;
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

  onOpen(row) {
    this.dialog.open(SaveUnitTypeComponent, {
      data: row,
    }).afterClosed().subscribe(() => {
      this.onLoadData();
    });
  }

  onDelete(row) {
    this.dialog
    .open(ConfirmationDialogComponent, {
      data: {
        title: 'Confirm',
        message:
          'Are you sure you want to delete an unit type?',
      },
    })
    .afterClosed()
    .subscribe((response) => {
      if (response) {
        this.adminService.delete('UnitType', row.Id).subscribe((response: any) => {
            if (response.Success) {
              this.onLoadData();
              this.matSnackBar.open(response.Message, 'x', {
                duration: 2500,
                verticalPosition: 'top',
                horizontalPosition: 'right',
                panelClass: ['green-snackbar']
              });
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
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
