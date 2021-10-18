import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BuildingService } from '../building.service';

@Component({
  selector: 'app-building-deletion',
  templateUrl: './building-deletion.component.html',
  styleUrls: ['./building-deletion.component.scss']
})
export class BuildingDeletionComponent implements OnInit {

  constructor(private router: Router, public dialogRef: MatDialogRef<BuildingDeletionComponent>, private service: BuildingService, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close({data: false});
  }

  async DeleteBuilding(){
    await this.service.DeleteBuilding(localStorage["BuildingToDelete"]).subscribe((x: any)=>{
      if(x.Success){
        this.matSnackBar.open(x.Message, 'x', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['green-snackbar']
        });
        console.log(x);
        this.dialogRef.close({data: true});
        // this.router.navigate(["buildings"]);
      }
      else{
        this.matSnackBar.open(x.Message, 'x', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['red-snackbar']
        });
        this.dialogRef.close({data: false});
      }
    })
  }

}
