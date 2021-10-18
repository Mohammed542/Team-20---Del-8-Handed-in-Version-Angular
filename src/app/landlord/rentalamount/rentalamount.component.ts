import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfdltrentamtComponent } from './confdltrentamt/confdltrentamt.component';

@Component({
  selector: 'app-rentalamount',
  templateUrl: './rentalamount.component.html',
  styleUrls: ['./rentalamount.component.scss']
})
export class RentalamountComponent implements OnInit {

  constructor(private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onAddClick(){
    this.router.navigateByUrl('landlord/financialmatters/addrentalamount');
  }

  onEditClick(){
    this.router.navigateByUrl('landlord/financialmatters/editrentalamount');
  }

  onDeleteClick(){
    const dialogRef = this.dialog.open(ConfdltrentamtComponent, {restoreFocus: false});

    dialogRef.afterClosed().subscribe(result => {     
    });
  }
}
