import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MainService } from 'src/app/main.service';
import { ConfEditLandlordComponent } from './conf-edit-landlord/conf-edit-landlord.component';
import { SucsEditLandlordComponent } from './sucs-edit-landlord/sucs-edit-landlord.component';

@Component({
  templateUrl: './edit-landlord.component.html',
  styleUrls: ['./edit-landlord.component.scss']
})
export class EditLandlordComponent implements OnInit {

  form: FormGroup;
  landlord: any;

  editLndlrd: boolean = false;

  constructor(private router: Router, private service: MainService, private formBuilder: FormBuilder, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      LandlordID: ['', Validators.required],
      FirstName: ['', [Validators.required, Validators.pattern('[A-Za-z]+'), Validators.maxLength(49)]],
      LastName: ['', [Validators.required, Validators.pattern('[A-Za-z]+'), Validators.maxLength(49)]],
      CellphoneNumber: ['', [Validators.required, Validators.pattern("^(\\d{10})$"), Validators.maxLength(10)]],
      IDNumber: ['', Validators.required], 
      EmailAddress: ['', Validators.required],
      Password: ['', Validators.required]
    });

    var id = localStorage.getItem('LandlordID');

    this.service.getSelectedLandlord(id).subscribe(res => {
      this.landlord = res;

      console.log("res", res);
      console.log("landlord", this.landlord);
      

      this.form.controls['LandlordID'].patchValue(this.landlord[0].LandlordID);
      this.form.controls['FirstName'].patchValue(this.landlord[0].FirstName);
      this.form.controls['LastName'].patchValue(this.landlord[0].LastName);
      this.form.controls['CellphoneNumber'].patchValue(this.landlord[0].CellPhoneNumber);
      this.form.controls['EmailAddress'].patchValue(this.landlord[0].EmailAddress);
      this.form.controls['IDNumber'].patchValue(this.landlord[0].IDNumber);     
      this.form.controls['Password'].patchValue(this.landlord[0].Password);
    });
  }

  onEdit(form){
    console.log(form);

    const dialogRef = this.dialog.open(ConfEditLandlordComponent, {
      restoreFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      this.editLndlrd = result.data;
      console.log(result);
      console.log(result.data);

      if(this.editLndlrd == true){
        //doEdit
        this.service.EditLandlord(form).subscribe(res => {
          console.log(res);          
        });
        //doEdit
  
        const dialogRef = this.dialog.open(SucsEditLandlordComponent, {
          restoreFocus: false
        });
    
        dialogRef.afterClosed().subscribe(result => {
          this.router.navigateByUrl("landlord/viewProfile");
        });
      }
    });
  }

  onCancel(){
    this.router.navigateByUrl("landlord/viewProfile");
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
}
