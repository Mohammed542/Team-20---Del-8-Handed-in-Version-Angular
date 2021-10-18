import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confdltservp',
  templateUrl: './confdltservp.component.html',
  styleUrls: ['./confdltservp.component.scss']
})
export class ConfdltservpComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfdltservpComponent>) { }

  ngOnInit(): void {
  }

  clickCancel(){
    this.dialogRef.close({data: false});
  }

  clickConfirm(){
    this.dialogRef.close({data :true});
  }
}
