import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  templateUrl: './confdlttenant.component.html',
  styleUrls: ['./confdlttenant.component.scss']
})
export class ConfdlttenantComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfdlttenantComponent>) { }

  ngOnInit(): void {
  }

  clickCancel(){
    this.dialogRef.close({data: false});
  }

  clickConfirm(){
    this.dialogRef.close({data :true});
  }
}
