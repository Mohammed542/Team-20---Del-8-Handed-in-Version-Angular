import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './view-selected-landlord-profile.component.html',
  styleUrls: ['./view-selected-landlord-profile.component.scss']
})
export class ViewSelectedLandlordProfileComponent implements OnInit {

  form: FormGroup;
  LandlordProfile : any;
  constructor(private router: Router, private service: MainService, private formBuilder: FormBuilder, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      LandlordID: ['', Validators.required],
      FirstName: [, Validators.required],
      LastName: ['', Validators.required],
      CellPhoneNumber: ['', Validators.required],
      EmailAddress: [, Validators.required],
      IDNumber: ['', Validators.required],
      Password: ['', Validators.required]
    });

    var id = localStorage.getItem('LandlordID');

    this.service.getSelectedLandlord(id).subscribe(res => {
      this.LandlordProfile = res;

      console.log("res", res);
      console.log("LandlordProfile", this.LandlordProfile);
      

      this.form.controls['LandlordID'].patchValue(this.LandlordProfile[0].LandlordID);
      this.form.controls['FirstName'].patchValue(this.LandlordProfile[0].FirstName);
      this.form.controls['LastName'].patchValue(this.LandlordProfile[0].LastName);
      this.form.controls['CellPhoneNumber'].patchValue(this.LandlordProfile[0].CellPhoneNumber);
      this.form.controls['EmailAddress'].patchValue(this.LandlordProfile[0].EmailAddress);
      this.form.controls['IDNumber'].patchValue(this.LandlordProfile[0].IDNumber);     
      this.form.controls['Password'].patchValue(this.LandlordProfile[0].Password);
    });
  }

  onCancel(){
    this.router.navigateByUrl("landlord/viewLandlords");
  }

}
