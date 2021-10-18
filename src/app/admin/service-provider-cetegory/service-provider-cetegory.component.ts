import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import { AdminService } from '../admin.service';
import { SaveServiceProviderCetegoryComponent } from './save-service-provider-cetegory/save-service-provider-cetegory.component';

@Component({
  selector: 'app-service-provider-cetegory',
  templateUrl: './service-provider-cetegory.component.html',
  styleUrls: ['./service-provider-cetegory.component.scss']
})
export class ServiceProviderCetegoryComponent implements OnInit {
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
    this.adminService.get('ServiceProviderCategories').subscribe((response: any) => {
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
    this.dialog.open(SaveServiceProviderCetegoryComponent, {
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
          'Are you sure you want to delete a service provider category?',
      },
    })
    .afterClosed()
    .subscribe((response) => {
      if (response) {
        this.adminService.delete('ServiceProviderCategory', row.Id).subscribe((response: any) => {
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
