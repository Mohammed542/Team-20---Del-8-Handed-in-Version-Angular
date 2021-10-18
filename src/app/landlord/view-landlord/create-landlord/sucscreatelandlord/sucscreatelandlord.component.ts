import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './sucscreatelandlord.component.html',
  styleUrls: ['./sucscreatelandlord.component.scss']
})
export class SucscreatelandlordComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routeBack(){
    this.router.navigateByUrl("landlord/viewLandlords");
  }

}
