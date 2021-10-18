import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SuccgenreceiptComponent } from '../succgenreceipt/succgenreceipt.component';

@Component({
  selector: 'app-confgenreceipt',
  templateUrl: './confgenreceipt.component.html',
  styleUrls: ['./confgenreceipt.component.scss']
})
export class ConfgenreceiptComponent implements OnInit {

  constructor(private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(SuccgenreceiptComponent, {restoreFocus: false});

    dialogRef.afterClosed().subscribe(result => {     
    });
  }

  onClick(){
    this.router.navigateByUrl('landlord/payments/generatedreceipt');
  }
}
