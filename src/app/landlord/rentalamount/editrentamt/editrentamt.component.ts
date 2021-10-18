import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfeditrentamtComponent } from './confeditrentamt/confeditrentamt.component';

@Component({
  selector: 'app-editrentamt',
  templateUrl: './editrentamt.component.html',
  styleUrls: ['./editrentamt.component.scss']
})
export class EditrentamtComponent implements OnInit {

  constructor(private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(ConfeditrentamtComponent, {restoreFocus: false});

    dialogRef.afterClosed().subscribe(result => {     
    });
  }

  clickCancel(){
    this.router.navigateByUrl('landlord/financialmatters/rentalamount');
  }
}
