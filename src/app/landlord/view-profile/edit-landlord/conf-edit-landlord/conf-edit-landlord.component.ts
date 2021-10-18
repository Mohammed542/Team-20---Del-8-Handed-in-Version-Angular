import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  templateUrl: './conf-edit-landlord.component.html',
  styleUrls: ['./conf-edit-landlord.component.scss']
})
export class ConfEditLandlordComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfEditLandlordComponent>) { }

  ngOnInit(): void {
  }
  clickCancel(){
    this.dialogRef.close({data: false});
  }

  clickConfirm(){
    this.dialogRef.close({data :true});
  }



}
