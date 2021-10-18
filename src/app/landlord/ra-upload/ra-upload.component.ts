import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { Buildings } from './buildings.model';
import { UploadAgreementService } from './upload-agreement.service';
import { Units } from './units.model';
import { Tenant } from './tenant.model';

import { Createagreement } from './createagreement.model';

@Component({
  templateUrl: './ra-upload.component.html',
  styleUrls: ['./ra-upload.component.scss']
})
export class RaUploadComponent implements OnInit {
  buildingList: Buildings[];
  unitList: Units[];
  selectedUnit: string = '';
  bdata: any;
  formData: Createagreement;
  fp: string;

  constructor(private router: Router, private dialog: MatDialog, public service: UploadAgreementService) { }
  openFile(){
    document.querySelector('input').click()
  // document.getElementById("input").click();
  }
  ngOnInit(): void {
    this.service.getBuildingList().then(res => this.buildingList = res as Buildings[]);
    this.resetRental();
    this.resetTenant();
  }
  
  handle(e){
    this.fp = e.target.value;
  }

  getUnits(BuildingID){
    this.service.getUnitList(BuildingID).then(res => this.unitList = res as Units[]);      
    this.service.getBuildingDetails(BuildingID).subscribe(res => {this.bdata = res; }); 
  }

  getDetails(event: any) {
    this.selectedUnit = event.target.value;
   
  }
  
  resetRental(form?:NgForm){    
    this.formData ={
      RentalAgreementID: null,
      UnitID : 0,
      CompanyID :14,
      TenantID : null,
      RentalAgreementstatusID : 1,
      RentalAgreementTypeID : 1,
      StartDate : new Date(),
      EndDate : new Date(),
      DepositAmount : 90
    }
    // this.service.agreementList = [];
  }

  resetTenant(form?:NgForm){   
    if(form=null) 
    form.resetForm();
    this.service.formData ={
      TenantID : null,
      FirstName : 't',
      LastName : '',
      CellPhoneNumber : 'tt',
      EmailAddress : 'ttt',
      IDNumber : 'tttt',
      UserTypeID : 3,
      Password : '123'
    };
    this.service.rentals = [];
  
  }

  addRental(forms: NgForm, rentalIndex, TenantID){
    console.log(forms.value)
    if(rentalIndex == null)
    this.service.rentals.push(forms.value);
    else
    this.service.rentals[rentalIndex] = forms.value;
  
    this.resetRental();
  }

  // submit(){
  //   this.service.saveAgreement(this.service.agreementData).subscribe(res => { console.log(res)
  //   })
  //   this.service.saveTenant(this.service.tenantData).subscribe(resp => console.log(resp))
  // }

  // save(){
  //   this.service.save().subscribe(res => {console.log(res)})
  // }

  setID(id){
    localStorage["UnitID"] = id;
  }

  onSubmit(){
    this.service.saveTenant().subscribe(res => {
      console.log(res)
     this.router.navigate(["/agreements"])
      this.resetTenant();
    })
    
   
  }
}
