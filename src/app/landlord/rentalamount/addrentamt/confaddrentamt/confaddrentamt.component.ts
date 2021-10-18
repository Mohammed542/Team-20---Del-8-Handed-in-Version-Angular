import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuccaddrentamtComponent } from '../succaddrentamt/succaddrentamt.component';

@Component({
  selector: 'app-confaddrentamt',
  templateUrl: './confaddrentamt.component.html',
  styleUrls: ['./confaddrentamt.component.scss']
})
export class ConfaddrentamtComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(SuccaddrentamtComponent, {restoreFocus: false});

    dialogRef.afterClosed().subscribe(result => {     
    });
  }
}
