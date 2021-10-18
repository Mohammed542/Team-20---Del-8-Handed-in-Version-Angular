import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuccessfuluploadproofComponent } from '../successfuluploadproof/successfuluploadproof.component';

@Component({
  selector: 'app-confirmuploadproof',
  templateUrl: './confirmuploadproof.component.html',
  styleUrls: ['./confirmuploadproof.component.scss']
})
export class ConfirmuploadproofComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(SuccessfuluploadproofComponent, {restoreFocus: false});

    dialogRef.afterClosed().subscribe(result => {     
    });
  }
}
