import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MainService } from 'src/app/main.service';
import { ConfdlttenantComponent } from './confdlttenant/confdlttenant.component';
import { SucsdlttenantComponent } from './sucsdlttenant/sucsdlttenant.component';
import { ViewSelectedTenantProfileComponent } from './view-selected-tenant-profile/view-selected-tenant-profile.component';

@Component({
  templateUrl: './view-tenant.component.html',
  styleUrls: ['./view-tenant.component.scss']
})
export class ViewTenantComponent implements OnInit {
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('htmlData') htmlData: ElementRef;
  displayedColumns: string[] = ['Tenant', 'Building', 'Unit', 'Status', 'Options'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  allTenants: any;
  deleteTenant: boolean = false;

  constructor(private router: Router, private service: MainService, private dialog: MatDialog, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
  //  this.service.getTenants().subscribe((res: any) => {
  //    this.allTenants = res.Result;
  //  });

  this.service.getTenants().subscribe((res: any) => {
    if (res.Success) {
      this.allTenants = res.Result;
      console.log(res);
      this.dataSource.data = res.Result;
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
  onClick(){
    this.router.navigateByUrl('landlord/home')
  }

  onView(id){
    localStorage.setItem('TenantID', id.TenantID);
    console.log(id);
    console.log(id.TenantID);
    this.router.navigateByUrl("landlord/tenant/viewProfile");
    // this.router.navigateByUrl('landlord/editprofile')
  }
  
  // searchChange(event){
  //   //console.log(event);
  //   console.log(event.target.value);

  //   if(event.target.value != ""){
  //     this.service.getSearchedTenants(event.target.value).subscribe(res => {
  //       this.allTenants = res;
  //       console.log("do search");
  //       console.log(res);
  //       this.dataSource.data = this.allTenants;

  //       // this.allLandlords.forEach(element => {
  //       //   element.FirstName = element.FirstName + " " + element.LastName;
  //       // });
  //     });
  //   }
  //   else{
  //     this.service.getTenants().subscribe(res => {
  //       this.allTenants = res;
  //       console.log("done search");
  //     });
  //   }
  // }
  
  // searchChange(event){
  //   //console.log(event);
  //   console.log(event.target.value);

  //   if(event.target.value != ""){
  //     this.service.getSearchedTenants(event.target.value).subscribe((res) => {
  //       this.allTenants = res;
  //       console.log("do search");
  //       console.log(res);
  //       this.dataSource.data = this.allTenants;

  //       // this.allLandlords.forEach(element => {
  //       //   element.FirstName = element.FirstName + " " + element.LastName;
  //       // });
  //     });
  //   }
  //   else{
  //     this.service.getTenants().subscribe((res: any) => {
  //       this.allTenants = res.Result;
  //       this.dataSource.data = this.allTenants;
  //       console.log("done search");
  //     });
  //   }
  // }

  searchChange(event){
    //console.log(event);
    console.log(event.target.value);

    if(event.target.value != ""){
      this.service.getSearchedTenants(event.target.value).subscribe(res => {
        this.allTenants = res;
        console.log("do search");
        console.log(res);
        this.dataSource.data = this.allTenants;

        // this.allLandlords.forEach(element => {
        //   element.FirstName = element.FirstName + " " + element.LastName;
        // });
      });
    }
    else{
      this.service.getTenants().subscribe((res: any) => {
        this.allTenants = res.Result;
        this.dataSource.data = this.allTenants;
        console.log("done search");
      });
    }
  }







  onClickDelete(id){
    localStorage.setItem('TenantID', id.TenantID);
    console.log(id);
    console.log(id.TenantID);

    const dialogRef = this.dialog.open(ConfdlttenantComponent, {
      restoreFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      this.deleteTenant = result.data;
      console.log(result);
      console.log(result.data);

      if(this.deleteTenant == true){
        //doDelete
        this.service.deleteTenant(id.TenantID).subscribe(res => {
          console.log(res);
        });
        //doDelete
  
        const dialogRef = this.dialog.open(SucsdlttenantComponent, {
          restoreFocus: false
        });
    
        dialogRef.afterClosed().subscribe(result => {
          this.service.getTenants().subscribe(res => {
            this.allTenants = res;
            location.reload();
          });
        });
      }
    });
    
  }

}
