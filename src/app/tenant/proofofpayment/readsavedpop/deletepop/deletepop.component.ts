import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-deletepop',
  templateUrl: './deletepop.component.html',
  styleUrls: ['./deletepop.component.scss']
})
export class DeletepopComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeletepopComponent>) { }

  ngOnInit(): void {
  }

  clickCancel(){
    this.dialogRef.close({data: false});
  }

  clickConfirm(){
    this.dialogRef.close({data :true});
  }
}
