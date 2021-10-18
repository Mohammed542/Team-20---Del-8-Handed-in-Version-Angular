import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sucscreatesp',
  templateUrl: './sucscreatesp.component.html',
  styleUrls: ['./sucscreatesp.component.scss']
})
export class SucscreatespComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routeBack(){
    this.router.navigateByUrl("landlord/serviceproviders");
  }
}
