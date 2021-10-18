import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchfault',
  templateUrl: './searchfault.component.html',
  styleUrls: ['./searchfault.component.scss']
})
export class SearchfaultComponent implements OnInit {

  isShown: boolean = false ; // hidden by default

  constructor() { }

  ngOnInit(): void {
  }


  toggleShow() {
  
  this.isShown = ! this.isShown;
  
  }

}

