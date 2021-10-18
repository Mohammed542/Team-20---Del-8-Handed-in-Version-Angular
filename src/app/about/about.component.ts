import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  isShown: boolean = false ; // hidden by default

  constructor() { }

  ngOnInit(): void {
  }


  toggleShow() {
  
  this.isShown = ! this.isShown;
  
  }

}
