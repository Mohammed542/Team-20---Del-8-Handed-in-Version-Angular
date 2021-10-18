import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { VatService } from '../vat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vat-deletion',
  templateUrl: './vat-deletion.component.html',
  styleUrls: ['./vat-deletion.component.scss']
})
export class VatDeletionComponent implements OnInit {

  constructor(private router: Router, public dialogRef: MatDialogRef<VatDeletionComponent>, private service: VatService) { }

  ngOnInit(): void {
  }

  clickCancel(){
    this.dialogRef.close({data: false});
  }

  close(){
    //this.dialogRef.close([]);
    this.dialogRef.close({data :true});
  }

  async DeleteVATPercentage(){
    await this.service.DeleteVATPercentage(localStorage["DeleteVATID"]).subscribe((x)=>{
      // console.log(x);
      this.close();
      // this.router.navigateByUrl('vat');
    })
  }

}
