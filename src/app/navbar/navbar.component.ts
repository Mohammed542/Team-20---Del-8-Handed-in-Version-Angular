import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { MainService } from '../main.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private appcComponent: AppComponent, private service: MainService) { }

  ngOnInit(): void {
    this.windowAlterClasses();
  }

  alterClass(){
    var ww = document.body.clientWidth;

    if(ww < 600){
      // var element = document.getElementsByClassName('nav-item');
      // element
      return{
        'nav-item-stylesmall': true,
        'nav-item-stylemedium': false,
        'nav-item-stylebig': false
      };
    }
    else if(ww>=601 && ww<1200){
      return{
        'nav-item-stylesmall': false,
        'nav-item-stylemedium': true,
        'nav-item-stylebig': false
      };
    }
    else if(ww>=1200){
      return{
        'nav-item-stylesmall': false,
        'nav-item-stylemedium': false,
        'nav-item-stylebig': true
      };
    }
  }

  alterClass2(){
    var ww = document.body.clientWidth;

    if(ww < 800){
      return{
        'dropdown-menu-small': true
      };
    }
    else if(ww>=1200){
      return{
        'dropdown-menu-small': false
      };
    }
  }

  windowAlterClasses(){
    this.alterClass();
    this.alterClass2();
  }

  returnUserTypeId() {
    return +sessionStorage.getItem('UserTypeID');
  }
  
  returnName() {
    if (this.returnUserTypeId() === 1) {
      return sessionStorage.getItem('FirstName') + ' ' + sessionStorage.getItem('LastName');
    }
    else if(this.returnUserTypeId() === 2) {
      return sessionStorage.getItem('Name') + ' ' + sessionStorage.getItem('LastName');
    }
    else if(this.returnUserTypeId() === 4){
      return sessionStorage.getItem('FirstName') + ' ' + sessionStorage.getItem('Surname');
    }
  }

  logout(){
    var utid = sessionStorage['UserTypeID'];
    console.log(utid);
    
    if(!(utid == 2 || utid == 3)){
      this.service.logout().subscribe(result => {
        sessionStorage.clear();
        localStorage.clear();
        this.appcComponent.userin = null;
        this.appcComponent.cancelTimeouts();
        this.router.navigate(['login']);
      });
    }
    else{
      sessionStorage.clear();
      localStorage.clear();
      this.appcComponent.userin = null;
      this.appcComponent.cancelTimeouts();
      this.router.navigate(['login']);
    }
  }
}
