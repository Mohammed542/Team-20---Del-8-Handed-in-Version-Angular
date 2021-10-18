import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuccesfullysentstatemntComponent } from '../succesfullysentstatemnt/succesfullysentstatemnt.component';

@Component({
  selector: 'app-confirmstatementsend',
  templateUrl: './confirmstatementsend.component.html',
  styleUrls: ['./confirmstatementsend.component.scss']
})
export class ConfirmstatementsendComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(SuccesfullysentstatemntComponent, {restoreFocus: false});

    dialogRef.afterClosed().subscribe(result => {     
    });
  }
}
