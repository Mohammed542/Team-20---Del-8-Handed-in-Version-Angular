import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuccdltrentamtComponent } from '../succdltrentamt/succdltrentamt.component';

@Component({
  selector: 'app-confdltrentamt',
  templateUrl: './confdltrentamt.component.html',
  styleUrls: ['./confdltrentamt.component.scss']
})
export class ConfdltrentamtComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(SuccdltrentamtComponent, {restoreFocus: false});

    dialogRef.afterClosed().subscribe(result => {     
    });
  }
}
