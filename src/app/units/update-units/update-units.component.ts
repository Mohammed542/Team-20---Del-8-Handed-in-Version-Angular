import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnitService } from '../unit.service';
import { FormBuilder, Validators } from '@angular/forms';  

@Component({
  selector: 'app-update-units',
  templateUrl: './update-units.component.html',
  styleUrls: ['./update-units.component.scss']
})
export class UpdateUnitsComponent implements OnInit {

  constructor(private service: UnitService,  private router: Router,  private formbulider: FormBuilder,) { }
  
  unit : any;
  units : any;
  types : any;
  updateForm : any;
  buildingsList: any;

  oldRAmount: any;

  // BuildingName: any = ""; 
  // UnitType: any; 
  // UnitNumber: any; 
  // NumberOfBedrooms: any; 
  // NumberOfBathrooms: any; 
  // Size: any; 
  // RentalAmount: any; 
  // Date: any; 
  // createFormBuilding : any;

  ngOnInit(): void {
    this.updateForm = this.formbulider.group({ 
      BuildingName: [, Validators.required],
      UnitType: [, Validators.required],   
      UnitNumber: [, Validators.required],  
      NumberOfBedrooms: [, Validators.required],  
      NumberOfBathrooms: [, Validators.required],  
      Size: [, Validators.required],  
      RentalAmount: [, Validators.required],  
      Date: [, Validators.required],  
    });

    this.service.GetUnit(localStorage["UnitToUpdate"]).subscribe((x) => {
      this.unit = x[0];
      this.createForm(x);
    })

    this.service.GetUnits().subscribe((x) => {
      this.units = x;
      localStorage["Units"] = x; 
    })

    this.service.GetUnitType().subscribe((x) => {
      this.types = x;      
    })

    this.service.GetBuildings().subscribe(result => {
      this.buildingsList = result;
    });
  }

  createForm(object: any){
    // this.BuildingName = object[0].BuildingName;
    // this.updateForm = this.formbulider.group({ 
    //   BuildingName: [object[0].BuildingName, Validators.required],
    //   UnitType: [object[0].UnitType, Validators.required],   
    //   UnitNumber: [object[0].UnitNumber, Validators.required],  
    //   NumberOfBedrooms: [object[0].NumberOfBedrooms, Validators.required],  
    //   NumberOfBathrooms: [object[0].NumberOfBathrooms, Validators.required],  
    //   Size: [object[0].BuildingSize, Validators.required],  
    //   RentalAmount: [object[0].RentalAmount, Validators.required],  
    //   Date: [object[0].Date, Validators.required],  
    // });

    // console.log(object[0]);    
    
    this.updateForm.controls['BuildingName'].patchValue(object[0].BuildingID);
    this.updateForm.controls['UnitType'].patchValue(object[0].UnitTypeID);
    this.updateForm.controls['UnitNumber'].patchValue(object[0].UnitNumber);
    this.updateForm.controls['NumberOfBedrooms'].patchValue(object[0].NumberOfBedrooms);
    this.updateForm.controls['NumberOfBathrooms'].patchValue(object[0].NumberOfBathrooms);
    this.updateForm.controls['Size'].patchValue(object[0].BuildingSize);
    this.updateForm.controls['RentalAmount'].patchValue(object[0].RentalAmount);
    this.oldRAmount = object[0].RentalAmount;
    var date = object[0].Date;
    date = date.substring(0, date.indexOf("T"));
    this.updateForm.controls['Date'].patchValue(date);
  }

  UpdateUnit(e){
    console.log(e);
    
    // let unit = {
    //   "UnitID": localStorage["UnitToUpdate"],
    //   "BuildingName": e.target.BuildingName.value,
    //   "UnitTypeID": localStorage["UnitTypeID"],
    //   "UnitNumber": e.target.UnitNumber.value,
    //   "NumberOfBedrooms": e.target.NumberOfBedrooms.value,
    //   "NumberOfBathrooms": e.target.NumberOfBathrooms.value,
    //   "Size": e.target.Size.value,
    //   "RentalAmount": e.target.RentalAmount.value,
    //   "Date": e.target.Date.value
    // };

    var RAmount: any;

    if(e.RentalAmount != this.oldRAmount){
      RAmount = e.RentalAmount;
    }
    else{
      RAmount = 0;
    }

    let unit = {
      "UnitID": localStorage["UnitToUpdate"],
      "BuildingID": e.BuildingName,
      "UnitTypeID": e.UnitType,
      "UnitNumber": e.UnitNumber,
      "NumberOfBedrooms": e.NumberOfBedrooms,
      "NumberOfBathrooms": e.NumberOfBathrooms,
      "Size": e.Size,
      "RentalAmount": RAmount,
      "Date": e.Date
    };

    console.log(unit);
    
    this.service.UpdateUnit(unit).subscribe((x) => {
      this.units = x;
      console.log(x);      
      this.router.navigate(["units"]);
    });
  }

  storeType(id){
    localStorage["UnitTypeID"] = id;
  }

  cancel(){
    this.router.navigate(["units"])
  }

}
