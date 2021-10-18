import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UnitService } from '../unit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unit-deletion',
  templateUrl: './unit-deletion.component.html',
  styleUrls: ['./unit-deletion.component.scss']
})
export class UnitDeletionComponent implements OnInit {

  constructor(private router: Router, public dialogRef: MatDialogRef<UnitDeletionComponent>, private service: UnitService) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close({data: false});
  }

  async DeleteUnit(){
    await this.service.DeleteUnit(localStorage["UnitToDelete"]).subscribe((x)=>{
      console.log(x);
      this.dialogRef.close({data: true});
    })
    // this.router.navigate(["units"])
  }

}
