import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main.service';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {

  form: FormGroup;

  constructor(fb: FormBuilder, private service: MainService, private matSnackBar: MatSnackBar, private router: Router) {
    this.form = fb.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    },
    {
      validator: PasswordValidators.passwordsShouldMatch
    });
  }

  ngOnInit(): void {
  }

  get oldPassword() { return this.form.get('oldPassword'); }
  get newPassword() { return this.form.get('newPassword'); }
  get confirmPassword() { return this.form.get('confirmPassword'); }

  onClickChange(form){
    console.log(this.oldPassword);
    console.log(this.oldPassword.value);
    
    this.service.ChangePassword(this.oldPassword.value, this.confirmPassword.value).subscribe((res: any) => {
      if(res.Success){
        this.matSnackBar.open(res.Message, 'x', {
          duration: 2500,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['green-snackbar']
        });
        this.router.navigateByUrl("landlord/home");
      }
      else{
        this.matSnackBar.open(res.Message, 'x', {
          duration: 2500,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['red-snackbar']
        });
      }
    });
  }
}
