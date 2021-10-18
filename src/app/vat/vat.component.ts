import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Config } from 'protractor';
import { VatDeletionComponent } from './vat-deletion/vat-deletion.component';
import { VatService } from './vat.service';


@Component({
  selector: 'app-vat',
  templateUrl: './vat.component.html',
  styleUrls: ['./vat.component.scss']
})

export class VatComponent implements OnInit {

  vat: any;

  constructor(private service: VatService, public dialogRef: MatDialogRef<VatDeletionComponent>, private router: Router, public dialog: MatDialog) { }

  async ngOnInit() {
    await this.service.GetVATPercentages().subscribe((x) => {
      this.vat = x;
      console.log(this.vat);
    })    
  }

  addvat(){
    this.router.navigate(["create-vat"]);
  }

  updatevat(vatID, VATPercentage){
    localStorage["UpdateVATID"] = vatID;
    localStorage["UpdateVATValue"] = VATPercentage;
    this.router.navigate(["update-vat"]);
  }

  
  openDialog(vatID): void {
    localStorage["DeleteVATID"] = vatID;
    const dialogRef = this.dialog.open(VatDeletionComponent, {
       height: '250px',
       width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);      

      if(result.data === true){
        this.service.GetVATPercentages().subscribe((x) => {
          this.vat = x;
        });
      }
    });
  }
}
