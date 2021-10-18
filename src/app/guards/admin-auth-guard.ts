import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AdminAuthGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.isLoggedIn();
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.isLoggedIn();
  }

  isLoggedIn(): boolean {
    if (sessionStorage.getItem('EmailAddress') !== null && +sessionStorage.getItem('UserTypeID') === 4) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
