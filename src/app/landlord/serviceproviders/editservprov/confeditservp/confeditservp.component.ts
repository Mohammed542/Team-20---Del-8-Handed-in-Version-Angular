import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confeditservp',
  templateUrl: './confeditservp.component.html',
  styleUrls: ['./confeditservp.component.scss']
})
export class ConfeditservpComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfeditservpComponent>) { }

  ngOnInit(): void {
  }

  clickCancel(){
    this.dialogRef.close({data: false});
  }

  clickConfirm(){
    this.dialogRef.close({data :true});
  }
}
