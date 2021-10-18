import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main.service';
import { ConfeditservpComponent } from './confeditservp/confeditservp.component';
import { SucseditservpComponent } from './sucseditservp/sucseditservp.component';

@Component({
  selector: 'app-editservprov',
  templateUrl: './editservprov.component.html',
  styleUrls: ['./editservprov.component.scss']
})
export class EditservprovComponent implements OnInit {

  form: FormGroup;

  spCategory: any[] = [];
  spStatus: any[] = [];
  spUserTypes: any[] = [];
  servprov: any;

  editSP: boolean = false;

  minDate;
  maxDate;

  constructor(private router: Router, private service: MainService, private formBuilder: FormBuilder, private dialog: MatDialog, private matSnackBar: MatSnackBar) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear, 0, 1);
    this.maxDate = new Date(currentYear, 11, 31);
  }

  ngOnInit(): void {
    this.service.getServiceProviderCategories().subscribe(res => {
      this.spCategory = res as string[];
    });
    this.service.getServiceProviderStatuses().subscribe(res => {
      this.spStatus = res as string[];
    });
    // this.service.getServiceProviderUserTypes().subscribe(res => {
    //   this.spUserTypes = res as string[];
    // });

    this.form = this.formBuilder.group({
      ServiceProviderID: ['', Validators.required],
      ServiceProviderStatusID: ['', Validators.required],
      ServiceProviderCategoryID: ['', Validators.required],
      Name: [, [Validators.required, Validators.pattern('[A-Za-z]+'), Validators.maxLength(49)]],
      Surname: ['', [Validators.required, Validators.pattern('[A-Za-z]+'), Validators.maxLength(49)]],
      CellphoneNumber: ['', [Validators.required, Validators.pattern("^(\\d{10})$"), Validators.maxLength(10)]],
      EmailAddress: [{ value: null, disabled: true }],
      IDNumber: [{ value: null, disabled: true }],
      DateOfEmployment: ['', Validators.required],
      UserTypeID: ['', Validators.required],
      Password: ['', Validators.required]
    });

    var id = localStorage.getItem('ServiceProviderID');

    this.service.getServiceProvider(id).subscribe((res: any) => {
      if (res.Success) {
        this.servprov = res.Result;

        // console.log("res", res);
        // console.log("servprov", this.servprov);


        this.form.controls['ServiceProviderID'].patchValue(this.servprov[0].ServiceProviderID);
        this.form.controls['ServiceProviderStatusID'].patchValue(this.servprov[0].ServiceProviderStatusID);
        this.form.controls['ServiceProviderCategoryID'].patchValue(this.servprov[0].ServiceProviderCategoryID);
        this.form.controls['Name'].patchValue(this.servprov[0].Name);
        this.form.controls['Surname'].patchValue(this.servprov[0].Surname);
        this.form.controls['CellphoneNumber'].patchValue(this.servprov[0].CellphoneNumber);
        this.form.controls['EmailAddress'].patchValue(this.servprov[0].EmailAddress);
        this.form.controls['IDNumber'].patchValue(this.servprov[0].IDNumber);
        this.form.controls['DateOfEmployment'].patchValue(this.servprov[0].DateOfEmployment);
        this.form.controls['UserTypeID'].patchValue(this.servprov[0].UserTypeID);
        this.form.controls['Password'].patchValue(this.servprov[0].Password);

        const currentYear = new Date().getFullYear();
        var dateIn = this.servprov[0].DateOfEmployment;
        var yearIn = dateIn.substring(0, 4);
        this.minDate = new Date(yearIn, 0, 1);
        this.maxDate = new Date(currentYear, 11, 31);
      } else {
        this.matSnackBar.open(res.Message, 'x', {
          duration: 2500,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['red-snackbar']
        });
      }
    });
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

  onEdit(form) {
    // console.log(form.EmailAddress);
    // console.log(form);

    const dialogRef = this.dialog.open(ConfeditservpComponent, {
      restoreFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      this.editSP = result.data;
      // console.log(result);
      // console.log(result.data);

      if (this.editSP == true) {
        //doEdit
        form.Name = form.Name.charAt(0).toUpperCase() + form.Name.slice(1);
        form.Surname = form.Surname.charAt(0).toUpperCase() + form.Surname.slice(1);
        form.EmailAddress = this.form.controls.EmailAddress.value;
        form.IDNumber = this.form.controls.IDNumber.value;

        this.service.editServiceProvider(form).subscribe((res: any) => {
          // console.log(res);
          if(res.Success){
            this.matSnackBar.open(res.Message, 'x', {
              duration: 2500,
              verticalPosition: 'top',
              horizontalPosition: 'right',
              panelClass: ['green-snackbar']
            });

            this.router.navigateByUrl("landlord/serviceproviders");
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
        //doEdit

        // const dialogRef = this.dialog.open(SucseditservpComponent, {
        //   restoreFocus: false
        // });

        // dialogRef.afterClosed().subscribe(result => {
        //   this.router.navigateByUrl("landlord/serviceproviders");
        // });
      }
    });
  }

  onCancel() {
    this.router.navigateByUrl("landlord/serviceproviders");
  }
}
