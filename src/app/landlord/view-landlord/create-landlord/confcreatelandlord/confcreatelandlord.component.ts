import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  templateUrl: './confcreatelandlord.component.html',
  styleUrls: ['./confcreatelandlord.component.scss']
})
export class ConfcreatelandlordComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfcreatelandlordComponent>) { }

  ngOnInit(): void {
  }
  clickCancel(){
    this.dialogRef.close({data: false});
  }

  clickConfirm(){
    this.dialogRef.close({data :true});
  }
}
