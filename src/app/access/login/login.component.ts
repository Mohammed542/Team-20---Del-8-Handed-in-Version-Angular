import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessService } from '../access.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: any;
  audio = new Audio();
  hide = true;

  createForm = new FormGroup({
    Email: new FormControl(),
    Password: new FormControl(),
  });

  form: FormGroup;

  response: any;
  loading: boolean = false;

  constructor(
    private service: AccessService,
    private router: Router,
    private formbulider: FormBuilder,
    private matSnackBar: MatSnackBar,
    private appComponent: AppComponent
  ) { }

  ngOnInit(): void {
    const item = sessionStorage.getItem('UserTypeID');
    if (item !== null) {
      this.router.navigate(['landlord/home']);
    }
    this.createForm = this.formbulider.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required]],
    });
    this.form = this.formbulider.group({
      OTP: ['', [Validators.required]],
    });
  }

  playsound() {
    this.audio = new Audio();
    this.audio.src = '../../../../assets/sounds/login-sound.mp3';
    this.audio.load();
    this.audio.play();
  }

  login() {
    this.loading = true;
    
    this.service.Login(this.createForm.controls.Email.value, this.createForm.controls.Password.value)
      .subscribe((response: any) => {
        if (response.Success) {
          this.response = {
            OTP: response.Message,
            Result: response.Result
          }
          this.matSnackBar.open('Please provide the OTP then has been emailed to you.', 'x', {
            duration: 2500,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: ['green-snackbar']
          });
        } else {
          this.matSnackBar.open(response.Message, 'x', {
            duration: 2500,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: ['red-snackbar']
          });
        }

        this.loading = false;
      });
  }

  validateOTP(e) {
    if (this.response && e.target.OTP.value === this.response.OTP) {
      if (this.response.Result.ServiceProviderID) {
        this.matSnackBar.open('The provided user is not valid!', 'x', {
          duration: 2500,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['red-snackbar']
        });
        return;
      }
      const response = this.response;
      if (response.Result.LandlordID) {
        sessionStorage['LandlordID'] = response.Result.LandlordID;
        sessionStorage['FirstName'] = response.Result.FirstName;
        sessionStorage['LastName'] = response.Result.LastName;
        sessionStorage['EmailAddress'] = response.Result.EmailAddress;
        sessionStorage['CellphoneNumber'] = response.Result.CellphoneNumber;
        sessionStorage['IDNumber'] = response.Result.IDNumber;
        sessionStorage['UserTypeID'] = response.Result.UserTypeID;
      }
      if (response.Result.TenantID) {
        sessionStorage['TenantID'] = response.Result.TenantID;
        sessionStorage['Name'] = response.Result.Name;
        sessionStorage['LastName'] = response.Result.LastName;
        sessionStorage['EmailAddress'] = response.Result.EmailAddress;
        sessionStorage['CellphoneNumber'] = response.Result.CellphoneNumber;
        sessionStorage['IDNumber'] = response.Result.IDNumber;
        sessionStorage['UserTypeID'] = response.Result.UserTypeID;
      }
      if (response.Result.AdminID) {
        sessionStorage['AdminID'] = response.Result.AdminID;
        sessionStorage['FirstName'] = response.Result.Name;
        sessionStorage['Surname'] = response.Result.LastName;
        sessionStorage['EmailAddress'] = response.Result.EmailAddress;
        sessionStorage['CellphoneNumber'] = response.Result.CellphoneNumber;
        sessionStorage['IDNumber'] = response.Result.IDNumber;
        sessionStorage['UserTypeID'] = response.Result.UserTypeID;
      }
      this.appComponent.userin = sessionStorage['UserTypeID'];
      this.appComponent.checkTimeOut();
      this.appComponent.checkTimeOut1();
      this.playsound();
      this.router.navigate(['landlord/home']);
    } else {
      this.matSnackBar.open('The OTP is incorrect', 'x', {
        duration: 2500,
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: ['red-snackbar']
      });
    }
  }

  getErrorMessage(property) {
    switch (property) {
      case 'Email':
        if (this.createForm.controls.Email.hasError('required')) {
          return 'Email can not be empty, it is a required field';
        }
        return this.createForm.controls.Email.hasError('email')
          ? 'This is not a valid email'
          : '';
      case 'Password':
        if (this.createForm.controls.Password.hasError('required')) {
          return 'Password can not be empty, it is a required field';
        }
    }
  }

  reset() {
    this.router.navigate(['reset-password']);
  }
}
