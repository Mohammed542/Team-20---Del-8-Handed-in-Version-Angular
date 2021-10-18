import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewfaulttenant',
  templateUrl: './viewfaulttenant.component.html',
  styleUrls: ['./viewfaulttenant.component.scss']
})
export class ViewfaulttenantComponent implements OnInit {

  isShown: boolean = false ; // hidden by default

  constructor() { }

  ngOnInit(): void {
  }


  toggleShow() {
  
  this.isShown = ! this.isShown;
  
  }

}
