import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MainService } from 'src/app/main.service';
import { ConfEditTenantComponent } from './conf-edit-tenant/conf-edit-tenant.component';
import { SucsEditTenantComponent } from './sucs-edit-tenant/sucs-edit-tenant.component';

@Component({
  templateUrl: './edit-tenant.component.html',
  styleUrls: ['./edit-tenant.component.scss']
})
export class EditTenantComponent implements OnInit {

  form: FormGroup;
  tenant: any;

  editTnt: boolean = false;

  constructor(private router: Router, private service: MainService, private formBuilder: FormBuilder, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      TenantID: ['', Validators.required],
      FirstName: ['', [Validators.required, Validators.pattern('[A-Za-z]+'), Validators.maxLength(49)]],
      LastName: ['', [Validators.required, Validators.pattern('[A-Za-z]+'), Validators.maxLength(49)]],
      CellPhoneNumber: ['', [Validators.required, Validators.pattern("^(\\d{10})$"), Validators.maxLength(10)]],
      EmailAddress: [, Validators.required],
      IDNumber: ['', Validators.required],
      Password: ['', Validators.required]
    });

    var id = localStorage.getItem('TenantID');

    this.service.getSelectedTenantT(id).subscribe(res => {
      this.tenant = res;

      console.log("res", res);
      console.log("tenant", this.tenant);
      

      this.form.controls['TenantID'].patchValue(this.tenant[0].TenantID);
      this.form.controls['FirstName'].patchValue(this.tenant[0].FirstName);
      this.form.controls['LastName'].patchValue(this.tenant[0].LastName);
      this.form.controls['CellPhoneNumber'].patchValue(this.tenant[0].CellPhoneNumber);
      this.form.controls['EmailAddress'].patchValue(this.tenant[0].EmailAddress);
      this.form.controls['IDNumber'].patchValue(this.tenant[0].IDNumber);     
      this.form.controls['Password'].patchValue(this.tenant[0].Password);
    });
  }

  onEdit(form){
    console.log(form);

    const dialogRef = this.dialog.open(ConfEditTenantComponent, {
      restoreFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      this.editTnt = result.data;
      console.log(result);
      console.log(result.data);

      if(this.editTnt == true){
        //doEdit
        this.service.EditTenant(form).subscribe(res => {
          console.log(res);          
        });
        //doEdit
  
        const dialogRef = this.dialog.open(SucsEditTenantComponent, {
          restoreFocus: false
        });
    
        dialogRef.afterClosed().subscribe(result => {
          this.router.navigateByUrl("tenant/viewprofile");
        });
      }
    });
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
      if (this.form.controls.CellPhoneNumber.hasError('required')) {
        return 'Please provide a cellphone number';
      }
      if (this.form.controls.CellPhoneNumber.hasError('pattern')) {
        return 'Invalid format';
      }
      if (this.form.controls.CellPhoneNumber.hasError('maxlength')) {
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

  onCancel(){
    this.router.navigateByUrl("tenant/viewprofile");
  }

}
