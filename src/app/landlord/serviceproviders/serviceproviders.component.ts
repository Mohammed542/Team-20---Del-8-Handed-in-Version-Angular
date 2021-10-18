import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main.service';
import { ConfdltservpComponent } from './confdltservp/confdltservp.component';
import { SucsdltservpComponent } from './sucsdltservp/sucsdltservp.component';

@Component({
  selector: 'app-serviceproviders',
  templateUrl: './serviceproviders.component.html',
  styleUrls: ['./serviceproviders.component.scss']
})
export class ServiceprovidersComponent implements OnInit {

  allServiceProviders: any;

  deleteSP: boolean = false;

  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('htmlData') htmlData: ElementRef;
  displayedColumns: string[] = ['Name', 'Category', 'EmailAddress', 'CellNumber', 'Icon'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router, private service: MainService, private dialog: MatDialog, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.service.getServiceProviders().subscribe((res: any) => {
      if(res.Success){
        this.allServiceProviders = res.Result;
        this.dataSource.data = res.Result;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
      else{
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
    // console.log(event.target.value);

    if(event.target.value != ""){
      this.service.getSearchedServiceProviders(event.target.value).subscribe((res: any) => {
        if(res.Success){
          this.allServiceProviders = res.Result;
          // console.log("do search");
          // console.log(res);

          this.allServiceProviders.forEach(element => {
            element.Name = element.Name + " " + element.Surname;
          });

          this.dataSource.data = this.allServiceProviders;
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        }
        else{
          this.matSnackBar.open(res.Message, 'x', {
            duration: 2500,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: ['red-snackbar']
          });
        }
      });
    }
    else{
      // this.service.getServiceProviders().subscribe((res: any) => {
      //   this.allServiceProviders = res;
      //   this.dataSource.data = res;
      //   // console.log("done search");
      // });
      this.service.getServiceProviders().subscribe((res: any) => {
        if(res.Success){
          this.allServiceProviders = res.Result;
          this.dataSource.data = res.Result;
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        }
        else{
          this.matSnackBar.open(res.Message, 'x', {
            duration: 2500,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: ['red-snackbar']
          });
        }
      });
    }
  }

  onBack(){
    this.router.navigateByUrl("landlord/home");
  }

  onCreate(){
    // console.log("create sp clicked");
    this.router.navigateByUrl("landlord/serviceproviders/createserviceprovider");
  }

  onClickEdit(id){
    localStorage.setItem('ServiceProviderID', id.ServiceProviderID);
    // console.log(id);
    // console.log(id.ServiceProviderID);
    this.router.navigateByUrl("landlord/serviceproviders/editserviceprovider");
  }

  onClickDelete(id){
    localStorage.setItem('ServiceProviderID', id.ServiceProviderID);
    // console.log(id);
    // console.log(id.ServiceProviderID);
    //this.router.navigateByUrl("landlord/serviceproviders/createserviceprovider");
    //console.log(form);

    const dialogRef = this.dialog.open(ConfdltservpComponent, {
      restoreFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      this.deleteSP = result.data;
      // console.log(result);
      // console.log(result.data);

      if(this.deleteSP == true){
        //doDelete
        this.service.deleteServiceProvider(id.ServiceProviderID).subscribe((res: any) => {
          // console.log(res);
          if(res.Success){
            this.matSnackBar.open(res.Message, 'x', {
              duration: 2500,
              verticalPosition: 'top',
              horizontalPosition: 'right',
              panelClass: ['green-snackbar']
            });
            this.service.getServiceProviders().subscribe((res: any) => {
              if(res.Success){
                this.allServiceProviders = res.Result;
                this.dataSource.data = res.Result;
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
              }
              else{
                this.matSnackBar.open(res.Message, 'x', {
                  duration: 2500,
                  verticalPosition: 'top',
                  horizontalPosition: 'right',
                  panelClass: ['red-snackbar']
                });
              }
            });
          }
          else{
            this.matSnackBar.open(res.Message, 'x', {
              duration: 2500,
              verticalPosition: 'top',
              horizontalPosition: 'right',
              panelClass: ['red-snackbar']
            });
          }
        });
        //doDelete
  
        // const dialogRef = this.dialog.open(SucsdltservpComponent, {
        //   restoreFocus: false
        // });
    
        // dialogRef.afterClosed().subscribe(result => {
        //   this.service.getServiceProviders().subscribe(res => {
        //     this.allServiceProviders = res;
        //   });
        // });
      }
    });
  }
}
