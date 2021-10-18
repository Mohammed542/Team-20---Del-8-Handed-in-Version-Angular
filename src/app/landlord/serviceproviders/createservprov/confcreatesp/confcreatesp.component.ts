import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confcreatesp',
  templateUrl: './confcreatesp.component.html',
  styleUrls: ['./confcreatesp.component.scss']
})
export class ConfcreatespComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfcreatespComponent>) { }

  ngOnInit(): void {
  }

  clickCancel(){
    this.dialogRef.close({data: false});
  }

  clickConfirm(){
    this.dialogRef.close({data :true});
  }
}
