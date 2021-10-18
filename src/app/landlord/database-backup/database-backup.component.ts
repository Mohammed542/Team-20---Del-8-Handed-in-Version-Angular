import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-database-backup',
  templateUrl: './database-backup.component.html',
  styleUrls: ['./database-backup.component.scss']
})
export class DatabaseBackupComponent implements OnInit {

  constructor(private router: Router, private dialog: MatDialog) { }
  fp:string;

  ngOnInit(): void {  
  }
  onClick(){
    this.router.navigateByUrl('landlord/home')
  }
  openFile(){
    document.querySelector('input').click()
  // document.getElementById("input").click();
  }
  handle(e){
    this.fp = e.target.value;
  }

}
