import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SucceditrentamtComponent } from '../succeditrentamt/succeditrentamt.component';

@Component({
  selector: 'app-confeditrentamt',
  templateUrl: './confeditrentamt.component.html',
  styleUrls: ['./confeditrentamt.component.scss']
})
export class ConfeditrentamtComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(SucceditrentamtComponent, {restoreFocus: false});

    dialogRef.afterClosed().subscribe(result => {     
    });
  }
}
