import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UnitService } from '../unit.service';

@Component({
  selector: 'app-updateunitmodal',
  templateUrl: './updateunitmodal.component.html',
  styleUrls: ['./updateunitmodal.component.scss']
})
export class UpdateunitmodalComponent implements OnInit {

  constructor(private service: UnitService,  private router: Router,  private formbulider: FormBuilder, private dialogRef: MatDialogRef<UpdateunitmodalComponent>) { }
  
  unit : any;
  units : any;
  types : any;
  updateForm : any;

  BuildingName: any; 
  UnitType: any; 
  UnitNumber: any; 
  NumberOfBedrooms: any; 
  NumberOfBathrooms: any; 
  Size: any; 
  RentalAmount: any; 
  Date: any; 
  createFormBuilding : any;

  ngOnInit(): void {
    this.service.GetUnit(localStorage["UnitToUpdate"]).subscribe((x) => {
      this.unit = x[0];
      this.unit.Date = this.unit.Date.substring(0, this.unit.Date.indexOf('T'));
      this.createForm(x);
    })

    this.service.GetUnits().subscribe((x) => {
      this.units = x;
      localStorage["Units"] = x; 
    })

    this.service.GetUnitType().subscribe((x) => {
      this.types = x;
    })
  }

  createForm(object: any){
    this.BuildingName = object[0].BuildingName;
    this.updateForm = this.formbulider.group({ 
      BuildingName: [object[0].BuildingName, Validators.required],
      UnitType: [object[0].UnitType, Validators.required],   
      UnitNumber: [object[0].UnitNumber, Validators.required],  
      NumberOfBedrooms: [object[0].NumberOfBedrooms, Validators.required],  
      NumberOfBathrooms: [object[0].NumberOfBathrooms, Validators.required],  
      Size: [object[0].BuildingSize, Validators.required],  
      RentalAmount: [object[0].RentalAmount, Validators.required],  
      Date: [object[0].Date, Validators.required],  
    }); 
  }

  UpdateUnit(e){
    let unit = {
      "UnitID": localStorage["UnitToUpdate"],
      "BuildingName": e.target.BuildingName.value,
      "UnitTypeID": localStorage["UnitTypeID"],
      "UnitNumber": e.target.UnitNumber.value,
      "NumberOfBedrooms": e.target.NumberOfBedrooms.value,
      "NumberOfBathrooms": e.target.NumberOfBathrooms.value,
      "Size": e.target.Size.value,
      "RentalAmount": e.target.RentalAmount.value,
      "Date": e.target.Date.value
    };

    this.service.UpdateUnit(unit).subscribe((x) => {
      this.units = x;
      this.dialogRef.close({data: true});
    })
    // this.router.navigate(["units"])
  }

  storeType(id){
    localStorage["UnitTypeID"] = id;
  }

  cancel(){
    // this.router.navigate(["units"])
    this.dialogRef.close({data: false});
  }
}
