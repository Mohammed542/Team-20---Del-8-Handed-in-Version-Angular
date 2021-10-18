import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AutochargeComponent } from './autocharge/autocharge.component';

@Component({
  selector: 'app-raisepayment',
  templateUrl: './raisepayment.component.html',
  styleUrls: ['./raisepayment.component.scss']
})
export class RaisepaymentComponent implements OnInit {
  scsfulCharge: boolean = false;

  constructor(private dialog: MatDialog, private router: Router, private dialogRef: MatDialogRef<RaisepaymentComponent>) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(AutochargeComponent, {restoreFocus: false});

    dialogRef.afterClosed().subscribe(result => {     
      this.scsfulCharge = result.data;
      
      if(this.scsfulCharge){
        this.dialogRef.close({data :true});
      }
    });
  }

  onClick(){
    this.dialogRef.close();
    this.router.navigateByUrl('landlord/payments/raisepayment/manualcharge');
  }
}
