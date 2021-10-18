import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SucsdeletepaymentComponent } from '../sucsdeletepayment/sucsdeletepayment.component';

@Component({
  selector: 'app-confdeletepayment',
  templateUrl: './confdeletepayment.component.html',
  styleUrls: ['./confdeletepayment.component.scss']
})
export class ConfdeletepaymentComponent implements OnInit {

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<ConfdeletepaymentComponent>) { }

  ngOnInit(): void {
  }

  clickCancel(){
    this.dialogRef.close({data: false});
  }

  clickConfirm(){
    this.dialogRef.close({data :true});
  }

  // openDialog() {
  //   const dialogRef = this.dialog.open(SucsdeletepaymentComponent, {restoreFocus: false});

  //   dialogRef.afterClosed().subscribe(result => {     
  //   });
  // }
}
