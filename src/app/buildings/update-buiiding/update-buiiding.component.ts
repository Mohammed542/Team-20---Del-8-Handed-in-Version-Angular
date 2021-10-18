import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  
import { BuildingService } from '../building.service';

@Component({
  selector: 'app-update-buiiding',
  templateUrl: './update-buiiding.component.html',
  styleUrls: ['./update-buiiding.component.scss']
})
export class UpdateBuiidingComponent implements OnInit {

  constructor(private service: BuildingService,  private router: Router,  private formbulider: FormBuilder,) { }

  buildings : any;
  building : any;
  updateForm: FormGroup;

  BuildingName: any; 
  NumberofUnitsOwned: any; 
  City: any; 
  StreetAddress: any; 
  Suburb: any; 
  PostalCode: any; 

  locationURL:any

  ngOnInit(): void {
    this.updateForm = this.formbulider.group({ 
      BuildingName: [, Validators.required],
      NumberofUnitsOwned: [, Validators.required],   
      City: [, Validators.required],  
      StreetAddress: [, Validators.required],  
      Suburb: [, Validators.required],  
      PostalCode: [, Validators.required],
    })

    this.service.GetBuilding(localStorage["BuildingToUpdate"]).subscribe((x) => {
      this.building = x[0];
      console.log(this.building);      
      this.locationURL = "https://maps.google.com/maps?q=44%20Neon%20Street,%20Johannesburg&t=&z=13&ie=UTF8&iwloc=&output=embed";
      this.createForm(this.building);
    });
  }

  createForm(object: any){
    // this.updateForm = this.formbulider.group({ 
    //   BuildingName: [this.building.BuildingName, Validators.required],
    //   NumberofUnitsOwned: [this.building.NumberofUnitsOwned, Validators.required],   
    //   City: [this.building.City, Validators.required],  
    //   StreetAddress: [this.building.StreetAddress, Validators.required],  
    //   Suburb: [this.building.Suburb, Validators.required],  
    //   PostalCode: [this.building.PostalCode, Validators.required], 
    // });
    this.updateForm.controls['BuildingName'].patchValue(this.building.BuildingName);
    this.updateForm.controls['NumberofUnitsOwned'].patchValue(this.building.NumberofUnitsOwned);
    this.updateForm.controls['City'].patchValue(this.building.City);
    this.updateForm.controls['StreetAddress'].patchValue(this.building.StreetAddress);
    this.updateForm.controls['Suburb'].patchValue(this.building.Suburb);
    this.updateForm.controls['PostalCode'].patchValue(this.building.PostalCode);
  }

  UpdateBuilding(e){
    let unit = {
      "BuildingID": localStorage["BuildingToUpdate"],
      "BuildingName": e.target.BuildingName.value,
      "NumberofUnitsOwned": e.target.NumberofUnitsOwned.value,
      "City": e.target.City.value,
      "StreetAddress": e.target.StreetAddress.value,
      "Suburb": e.target.Suburb.value,
      "PostalCode": e.target.PostalCode.value,
    };

    this.service.UpdateBuilding(unit).subscribe((x) => {
      this.buildings = x;
      this.router.navigate(["buildings"]);
    });
  }

  cancel(){
    this.router.navigate(["buildings"]);
  }

}
