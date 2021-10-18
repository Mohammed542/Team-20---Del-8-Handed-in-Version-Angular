import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';  
import { AccessService } from '../access.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  form : any;
  Email : any;

  constructor(private service: AccessService, private formbulider: FormBuilder, private router: Router, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.form = this.formbulider.group({  
      Email: ['', [Validators.required]],  
    });  
  }

  reset(){
    this.router.navigate(["reset"])
  }

  async ResetPassword(e){
    let email = {
      "Email": e.target.Email.value,
    }
    await this.service.ResetPassword(email).subscribe((x: any)=>{
      if(x.Success){
        this.matSnackBar.open(x.Message, 'x', {
          duration: 2500,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['green-snackbar']
        });
        this.router.navigate(["login"]);
      }
      else{
        this.matSnackBar.open(x.Message, 'x', {
          duration: 2500,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['red-snackbar']
        });
      }
    });


  }

}
