import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  templateUrl: './conf-edit-tenant.component.html',
  styleUrls: ['./conf-edit-tenant.component.scss']
})
export class ConfEditTenantComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfEditTenantComponent>) { }

  ngOnInit(): void {
  }
  clickCancel(){
    this.dialogRef.close({data: false});
  }

  clickConfirm(){
    this.dialogRef.close({data :true});
  }

}
