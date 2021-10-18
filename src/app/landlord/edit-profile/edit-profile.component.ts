import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  checked = false;
  toggle = "Show ID Number";

  constructor(private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  onClick(){
    this.router.navigateByUrl('landlord/home')
  }
  onProfileReturn(){
    this.router.navigateByUrl('landlord/viewProfile')
  }
  handleChange(event: MatSlideToggleChange) {
    if (event.checked) {
      this.toggle = "Hide ID Number"
      this.checked = true;
    }
    else {
      this.toggle = "Show ID Number"
      this.checked = false;
    }
  }

}
