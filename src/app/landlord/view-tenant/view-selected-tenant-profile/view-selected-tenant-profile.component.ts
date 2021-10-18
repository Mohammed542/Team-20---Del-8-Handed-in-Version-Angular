import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainService } from 'src/app/main.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  templateUrl: './view-selected-tenant-profile.component.html',
  styleUrls: ['./view-selected-tenant-profile.component.scss']
})
export class ViewSelectedTenantProfileComponent implements OnInit {
  
  form: FormGroup;
  TenantProfile : any;
  constructor(private router: Router, private service: MainService, private formBuilder: FormBuilder, private dialog: MatDialog) { }

  

  ngOnInit(): void  {
    this.form = this.formBuilder.group({
      TenantID: ['', Validators.required],
      FirstName: [, Validators.required],
      LastName: ['', Validators.required],
      CellPhoneNumber: ['', Validators.required],
      EmailAddress: [, Validators.required],
      IDNumber: ['', Validators.required],
      Password: ['', Validators.required]
    });

    var id = localStorage.getItem('TenantID');

    this.service.getSelectedTenantL(id).subscribe(res => {
      this.TenantProfile = res;

      console.log("res", res);
      console.log("TenantProfile", this.TenantProfile);
      

      this.form.controls['TenantID'].patchValue(this.TenantProfile[0].TenantID);
      this.form.controls['FirstName'].patchValue(this.TenantProfile[0].FirstName);
      this.form.controls['LastName'].patchValue(this.TenantProfile[0].LastName);
      this.form.controls['CellPhoneNumber'].patchValue(this.TenantProfile[0].CellPhoneNumber);
      this.form.controls['EmailAddress'].patchValue(this.TenantProfile[0].EmailAddress);
      this.form.controls['IDNumber'].patchValue(this.TenantProfile[0].IDNumber);     
      this.form.controls['Password'].patchValue(this.TenantProfile[0].Password);
    });
  }

  onCancel(){
    this.router.navigateByUrl("landlord/viewTenant");
  }

 // getSomething(data){
 //   this.service.getTenants(data).subscribe(res => {
 //     this.TenantProfile = res;
 //   }); 
 // }

}
