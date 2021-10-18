import { Component, HostListener } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PrimeProperties';

  timeoutId;
  timeoutId1;
  userInactive: Subject<any> = new Subject();
  userInactive1: Subject<any> = new Subject();
  public userin;

  constructor(private _snackBar: MatSnackBar, private router: Router) {
    var userIn = sessionStorage['UserTypeID'];
    this.userin = userIn;

    this.userInactive.subscribe((message) => {
      this._snackBar.open(message, 'x', {
        duration: 8000,
        verticalPosition: 'top',
        panelClass: ['yellow-snackbar']
      });
    });
    this.userInactive1.subscribe((message) => {
      this.logout();
      this._snackBar.open(message, 'x', {
        verticalPosition: 'top',
        panelClass: ['red-snackbar']
      });
    });

    // this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
    //   if (event.urlAfterRedirects === '/login') {
    //     this.logout();
    //   }
    // });
  }

  checkTimeOut() {
    this.timeoutId = setTimeout(
      () => this.userInactive.next("You have 2 minutes remaining before you are logged out!"), 480000
    );
  }

  checkTimeOut1() {
    this.timeoutId1 = setTimeout(
      () => this.userInactive1.next("You have been logged out due to inactivity!"), 600000
    );
  }

  @HostListener('window:keydown')
  @HostListener('window:mousedown')
  @HostListener('window:mousemove')
  @HostListener('window:scroll')
  checkUserActivity() {
    if (this.userin) {
      clearTimeout(this.timeoutId);
      clearTimeout(this.timeoutId1);

      this.checkTimeOut();
      this.checkTimeOut1();
    }
  }

  cancelTimeouts() {
    clearTimeout(this.timeoutId);
    clearTimeout(this.timeoutId1);
  }

  logout() {
    this.userin = null;
    this.cancelTimeouts();
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
