import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main.service';
import { ConfcreatelandlordComponent } from './confcreatelandlord/confcreatelandlord.component';
import { SucscreatelandlordComponent } from './sucscreatelandlord/sucscreatelandlord.component';

@Component({
  selector: 'app-create-landlord',
  templateUrl: './create-landlord.component.html',
  styleUrls: ['./create-landlord.component.scss']
})
export class CreateLandlordComponent implements OnInit {
  form:FormGroup;
  createLandlord: boolean = false;

  constructor(private service: MainService, private formBuilder: FormBuilder, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      FirstName: ['', [Validators.required, Validators.pattern('[A-Za-z]+'), Validators.maxLength(49)]],
      LastName: ['', [Validators.required, Validators.pattern('[A-Za-z]+'), Validators.maxLength(49)]],
      CellphoneNumber: ['', [Validators.required, Validators.pattern("^(\\d{10})$"), Validators.maxLength(10)]],
      IDNumber: ['', [Validators.required, Validators.pattern('^([0-9][0-9])(([0][1-9])|([1][0-2]))(([0-2][0-9])|([3][0-1]))([0-9])([0-9]{3})([0-9])([0-9])([0-9])$'), Validators.maxLength(13)]], 
      EmailAddress: ['', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
    });
  }

  onCancel(){
    this.router.navigateByUrl("landlord/viewLandlords");
  }

  getErrorMessage(data) {
    if (data == "name") {
      if (this.form.controls.FirstName.hasError('required')) {
        return 'Please provide a name';
      }
      if (this.form.controls.FirstName.hasError('pattern')) {
        return 'Name can only contain letters';
      }
      if (this.form.controls.FirstName.hasError('maxlength')) {
        return 'Name is too long';
      }
    }
    if (data == "surname") {
      if (this.form.controls.LastName.hasError('required')) {
        return 'Please provide a surname';
      }
      if (this.form.controls.LastName.hasError('pattern')) {
        return 'Surname can only contain letters';
      }
      if (this.form.controls.LastName.hasError('maxlength')) {
        return 'Surname is too long';
      }
    }
    if (data == "cellphonenumber") {
      if (this.form.controls.CellphoneNumber.hasError('required')) {
        return 'Please provide a cellphone number';
      }
      if (this.form.controls.CellphoneNumber.hasError('pattern')) {
        return 'Invalid format';
      }
      if (this.form.controls.CellphoneNumber.hasError('maxlength')) {
        return 'Cellphone number too long';
      }
    }
    if (data == "idnumber") {
      if (this.form.controls.IDNumber.hasError('required')) {
        return 'Please provide an ID number';
      }
      if (this.form.controls.IDNumber.hasError('pattern')) {
        return 'Invalid format';
      }
      if (this.form.controls.IDNumber.hasError('maxlength')) {
        return 'IDNumber number too long';
      }
    }
    if (data == "emailaddress") {
      if (this.form.controls.EmailAddress.hasError('required')) {
        return 'Please provide an email address';
      }
      if (this.form.controls.EmailAddress.hasError('email')) {
        return 'Invalid email format';
      }
      if (this.form.controls.EmailAddress.hasError('pattern')) {
        return 'Invalid email format';
      }
    }
  }

  onCreate(form){
    console.log(form);

    const dialogRef = this.dialog.open(ConfcreatelandlordComponent, {
      restoreFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      this.createLandlord = result.data;
      console.log(result);
      console.log(result.data);

      if(this.createLandlord == true){
        //doCreate
        this.service.createLandlord(form).subscribe(res => {
          
        });
        //doCreate
  
        const dialogRef = this.dialog.open(SucscreatelandlordComponent, {
          restoreFocus: false
        });
    
        dialogRef.afterClosed().subscribe(result => {
        });
      }
    });
  }
}
