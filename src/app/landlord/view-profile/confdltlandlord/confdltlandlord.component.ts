import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  templateUrl: './confdltlandlord.component.html',
  styleUrls: ['./confdltlandlord.component.scss']
})
export class ConfdltlandlordComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfdltlandlordComponent>) { }

  ngOnInit(): void {
  }

  clickCancel(){
    this.dialogRef.close({data: false});
  }

  clickConfirm(){
    this.dialogRef.close({data :true});
  }
}
