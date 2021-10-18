import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main.service';
import { ConfcreatespComponent } from './confcreatesp/confcreatesp.component';
import { SucscreatespComponent } from './sucscreatesp/sucscreatesp.component';

@Component({
  selector: 'app-createservprov',
  templateUrl: './createservprov.component.html',
  styleUrls: ['./createservprov.component.scss']
})
export class CreateservprovComponent implements OnInit {

  form:FormGroup;

  // spCategory:any = {
  //   ServiceProviderCategoryID: 0,
  //   Description: ""
  // }

  spCategory:any;
  spStatus:any;

  createSP: boolean = false;

  minDate;
  maxDate;

  constructor(private service: MainService, private formBuilder: FormBuilder, private dialog: MatDialog, private router: Router, private matSnackBar: MatSnackBar) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear, 0, 1);
    this.maxDate = new Date(currentYear, 11, 31);
  }

  ngOnInit(): void {
    this.service.getServiceProviderCategories().subscribe(res => {
      this.spCategory = res;
    });
    this.service.getServiceProviderStatuses().subscribe(res => {
      this.spStatus = res;
    });

    this.form = this.formBuilder.group({
      Name: ['', [Validators.required, Validators.pattern('[A-Za-z]+'), Validators.maxLength(49)]],
      Surname: ['', [Validators.required, Validators.pattern('[A-Za-z]+'), Validators.maxLength(49)]],
      CellphoneNumber: ['', [Validators.required, Validators.pattern("^(\\d{10})$"), Validators.maxLength(10)]],
      IDNumber: ['', [Validators.required, Validators.pattern('^([0-9][0-9])(([0][1-9])|([1][0-2]))(([0-2][0-9])|([3][0-1]))([0-9])([0-9]{3})([0-9])([0-9])([0-9])$'), Validators.maxLength(13)]],
      ServiceProviderCategoryID: ['', Validators.required],
      ServiceProviderStatusID: ['', Validators.required],
      EmailAddress: ['', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
      DateOfEmployment: ['', Validators.required]
    });

    var date = new Date();
    this.form.controls['DateOfEmployment'].patchValue(date);
  }

  getErrorMessage(data) {
    if (data == "name") {
      if (this.form.controls.Name.hasError('required')) {
        return 'Please provide a name';
      }
      if (this.form.controls.Name.hasError('pattern')) {
        return 'Name can only contain letters';
      }
      if (this.form.controls.Name.hasError('maxlength')) {
        return 'Name is too long';
      }
    }
    if (data == "surname") {
      if (this.form.controls.Surname.hasError('required')) {
        return 'Please provide a surname';
      }
      if (this.form.controls.Surname.hasError('pattern')) {
        return 'Surname can only contain letters';
      }
      if (this.form.controls.Surname.hasError('maxlength')) {
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
    if (data == "spcat") {
      if (this.form.controls.ServiceProviderCategoryID.hasError('required')) {
        return 'Please select a category';
      }
    }
    if (data == "spstatus") {
      if (this.form.controls.ServiceProviderStatusID.hasError('required')) {
        return 'Please select a status';
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
    if (data == "dateofemployment") {
      if (this.form.controls.DateOfEmployment.hasError('required')) {
        return 'Please specify a date of employment';
      }
    }
  }

  // onClickCategory(event){
  //   var val = event.value;
  //   // this.form.patchValue({Category: val});
  //   console.log(this.form.get('Category'));
  // }

  // onClickStatus(event){
  //   // this.form.patchValue({Category: event.value});
  //   console.log(event.value);
  // }

  onCancel(){
    this.router.navigateByUrl("landlord/serviceproviders");
  }

  onCreate(form){
    // console.log(form);

    const dialogRef = this.dialog.open(ConfcreatespComponent, {
      restoreFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      this.createSP = result.data;
      // console.log(result);
      // console.log(result.data);
        // form.Name = form.Name.charAt(0).toUpperCase() + form.Name.slice(1);
        // console.log(form.Name);

      if(this.createSP == true){
        //doCreate
        form.Name = form.Name.charAt(0).toUpperCase() + form.Name.slice(1);
        form.Surname = form.Surname.charAt(0).toUpperCase() + form.Surname.slice(1);

        this.service.createServiceProvider(form).subscribe((res: any) => {
          if (res.Success) {
            this.matSnackBar.open(res.Message, 'x', {
              duration: 2500,
              verticalPosition: 'top',
              horizontalPosition: 'right',
              panelClass: ['green-snackbar']
            });
            this.router.navigateByUrl("landlord/serviceproviders");
          }
          else {
            this.matSnackBar.open(res.Message, 'x', {
              duration: 2500,
              verticalPosition: 'top',
              horizontalPosition: 'right',
              panelClass: ['red-snackbar']
            });
          }
        });
        //doCreate
  
        // const dialogRef = this.dialog.open(SucscreatespComponent, {
        //   restoreFocus: false
        // });
    
        // dialogRef.afterClosed().subscribe(result => {
        // });
      }
    });
  }
}
