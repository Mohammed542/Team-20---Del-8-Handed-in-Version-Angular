import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfaddrentamtComponent } from './confaddrentamt/confaddrentamt.component';

@Component({
  selector: 'app-addrentamt',
  templateUrl: './addrentamt.component.html',
  styleUrls: ['./addrentamt.component.scss']
})
export class AddrentamtComponent implements OnInit {

  constructor(private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(ConfaddrentamtComponent, {restoreFocus: false});

    dialogRef.afterClosed().subscribe(result => {     
    });
  }

  clickCancel(){
    this.router.navigateByUrl('landlord/financialmatters/rentalamount');
  }
}
