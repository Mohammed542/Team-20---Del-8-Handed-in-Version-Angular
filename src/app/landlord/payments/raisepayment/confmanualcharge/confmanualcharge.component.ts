import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main.service';
import { SucsfulmanualchargeComponent } from '../sucsfulmanualcharge/sucsfulmanualcharge.component';

@Component({
  selector: 'app-confmanualcharge',
  templateUrl: './confmanualcharge.component.html',
  styleUrls: ['./confmanualcharge.component.scss']
})
export class ConfmanualchargeComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog, private service: MainService, private router: Router, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  // manualCharge: any = this.data;

  ManualCharge = {
    ChargeName: "",
    ChargeAmount: "",
    BuildingID: 0,
    UnitID: 0
  }

  doManualRaisePayment(){
    this.ManualCharge.ChargeName = this.data.ManualCharge.ChargeName;
    this.ManualCharge.ChargeAmount = this.data.ManualCharge.ChargeAmount;
    this.ManualCharge.BuildingID = this.data.ManualCharge.BuildingID;
    this.ManualCharge.UnitID = this.data.ManualCharge.UnitID;

    // console.log("domanual",this.ManualCharge);

    this.service.manualRaisePayment(this.ManualCharge).subscribe((res: any) => {
      // this.openDialog();
      if (res.Success) {
        this.matSnackBar.open(res.Message, 'x', {
          duration: 2500,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['green-snackbar']
        });
        
        this.router.navigate(["landlord/invoice"]);
      }
      else {
        this.matSnackBar.open(res.Message, 'x', {
          duration: 2500,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['red-snackbar']
        });
      }
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(SucsfulmanualchargeComponent, {restoreFocus: false});

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(["landlord/invoice"]);
    });
  }
}
