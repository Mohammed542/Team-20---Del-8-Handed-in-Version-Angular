import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MainService } from 'src/app/main.service';
import { ConfdltlandlordComponent } from './confdltlandlord/confdltlandlord.component';
import { SucsdltlandlordComponent } from './sucsdltlandlord/sucsdltlandlord.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
  checked = false;
  toggle = "Show ID Number";
  LandlordProfile : any;
  deleteLandlord: boolean = false;
  constructor(private router: Router, private service: MainService, private dialog: MatDialog, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    let LandlordID = sessionStorage['LandlordID'];
    this.service.getLandlordProfile(LandlordID).subscribe(res => {
      this.LandlordProfile = res;
    });
  }
  onClick(){
    this.router.navigateByUrl('landlord/home')
  }
  onEdit(id){
    localStorage.setItem('LandlordID', id.LandlordID);
    console.log(id);
    console.log(id.LandlordID);
    this.router.navigateByUrl("landlord/viewprofile/edit");
   
   
   
   
    // this.router.navigateByUrl('landlord/editprofile')
  }
  
  onClickDelete(id){
    localStorage.setItem('LandlordID', id.LandlordID);
    console.log(id);
    console.log(id.LandlordID);

    const dialogRef = this.dialog.open(ConfdltlandlordComponent, {
      restoreFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      this.deleteLandlord = result.data;
      console.log(result);
      console.log(result.data);

      if(this.deleteLandlord == true){
        //doDelete
        this.service.deleteLandlord(id.LandlordID).subscribe((res: any) => {
          // console.log(res);
          if(res.Success){
            this.matSnackBar.open(res.Message, 'x', {
              duration: 2500,
              verticalPosition: 'top',
              horizontalPosition: 'right',
              panelClass: ['green-snackbar']
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
  
        // this.dialog.open(SucsdltlandlordComponent, {
        //   restoreFocus: false
        // }).afterClosed().subscribe(result => {
        //   this.router.navigateByUrl("login");
        //   });
        
      }
    });
  }



  handleChange(event: MatSlideToggleChange) {
    if (event.checked) {
      this.toggle = "Hide ID Number"
      this.checked = true;
    }
    else {
      this.toggle = "Show ID Number"
      this.checked = false;
    }
  }

}
