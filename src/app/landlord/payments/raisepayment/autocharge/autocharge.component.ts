import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main.service';
import { RaisepaymentComponent } from '../raisepayment.component';
import { SuccessautochargeComponent } from '../successautocharge/successautocharge.component';

@Component({
  selector: 'app-autocharge',
  templateUrl: './autocharge.component.html',
  styleUrls: ['./autocharge.component.scss']
})
export class AutochargeComponent implements OnInit {

  constructor(private dialog: MatDialog, private service: MainService, private router: Router, private matSnackBar: MatSnackBar, private dialogRef: MatDialogRef<AutochargeComponent>) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(SuccessautochargeComponent, {restoreFocus: false});

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(["landlord/invoice"]);
    });
  }

  doRaisePayment(){
    this.service.autoRaisePayment().subscribe((result: any) => {
      if(result.Success){
        this.matSnackBar.open(result.Message, 'x', {
          duration: 2500,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['green-snackbar']
        });

        this.dialogRef.close({data :true});
      }
      else{
        this.matSnackBar.open(result.Message, 'x', {
          duration: 2500,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['red-snackbar']
        });
      }
      // console.log(result);
      // console.log("Payments automatically raised");

      // this.openDialog();
    });
  }
}
