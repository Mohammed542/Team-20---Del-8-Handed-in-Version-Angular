import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main.service';
import { ViewSelectedLandlordProfileComponent } from './view-selected-landlord-profile/view-selected-landlord-profile.component';

@Component({
  selector: 'app-viewlandlord',
  templateUrl: './view-landlord.component.html',
  styleUrls: ['./view-landlord.component.scss']
})
export class ViewLandlordComponent implements OnInit {
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('htmlData') htmlData: ElementRef;
  displayedColumns: string[] = ['Name', 'EmailAddress', 'CellphoneNumber', 'Options'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  allLandlords: any;

  constructor(private router: Router, private service: MainService, private dialog: MatDialog, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
  //  this.service.getLandlords().subscribe(res => {
  //    this.allLandlords = res;
  //  });

    this.service.getLandlords().subscribe((res: any) => {
      if (res.Success) {
        this.allLandlords = res.Result;
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
  onClickViewLandlordProfile(){
    this.router.navigateByUrl('')
  }
  onCreate(){
    console.log("create landlord clicked");
    this.router.navigateByUrl("landlord/view-landlords/createlandlord");
  }
  onClickView(id){
    localStorage.setItem('LandlordID', id.LandlordID);
    console.log(id);
    console.log(id.LandlordID);
    //this.router.navigateByUrl("landlord/serviceproviders/createserviceprovider");
    //console.log(form);
    this.router.navigateByUrl("landlord/viewLandlords/viewSelectedProfile");

   // const dialogRef = this.dialog.open(ViewSelectedLandlordProfileComponent, {
   //   restoreFocus: false
   // });
  }

  searchChange(event){
    //console.log(event);
    console.log(event.target.value);

    if(event.target.value != ""){
      this.service.getSearchedLandlords(event.target.value).subscribe(res => {
        this.allLandlords = res;
        console.log("do search");
        console.log(res);
        this.dataSource.data = this.allLandlords;

        // this.allLandlords.forEach(element => {
        //   element.FirstName = element.FirstName + " " + element.LastName;
        // });
      });
    }
    else{
      this.service.getLandlords().subscribe((res: any) => {
        this.allLandlords = res.Result;
        this.dataSource.data = this.allLandlords;
        console.log("done search");
      });
    }
  }

  
}
