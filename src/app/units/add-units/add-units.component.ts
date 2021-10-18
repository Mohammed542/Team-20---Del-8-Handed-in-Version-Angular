import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnitService } from '../unit.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';  
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-units',
  templateUrl: './add-units.component.html',
  styleUrls: ['./add-units.component.scss']
})
export class AddUnitsComponent implements OnInit {

  constructor(private service: UnitService,  private router: Router,  private formbulider: FormBuilder, private matSnackBar: MatSnackBar) { }

  buildings : any;
  types : any;
  createForm : any;

  ngOnInit(): void {
    this.service.GetListOfBuildings().subscribe((x) => {
      this.buildings = x;
    })

    this.service.GetUnitType().subscribe((x) => {
      this.types = x;
    })

    this.createForm = this.formbulider.group({  
      BuildingName: ['', [Validators.required]],  
      UnitType: ['', [Validators.required]],   
      UnitNumber: ['', [Validators.required]],  
      NumberOfBedrooms: ['', [Validators.required]],  
      NumberOfBathrooms: ['', [Validators.required]],  
      Size: ['', [Validators.required]],  
      RentalAmount: ['', [Validators.required]],  
    }); 

  }

  storeBuilding(id){
    localStorage["BuildingID"] = id;
  }

  storeType(id){
    localStorage["UnitTypeID"] = id;
  }

  AddUnits(e){
    let unit = {
      "BuildingID": localStorage["BuildingID"],
      "UnitTypeID": localStorage["UnitTypeID"],
      "UnitNumber": e.target.UnitNumber.value,
      "NumberOfBedrooms": e.target.NumberOfBedrooms.value,
      "NumberOfBathrooms": e.target.NumberOfBathrooms.value,
      "Size": e.target.Size.value,
      "RentalAmount": e.target.RentalAmount.value,
    };

    this.service.AddUnit(unit).subscribe((x: any) => {
      if(x.Success){
        this.matSnackBar.open(x.Message, 'x', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['green-snackbar']
        });
        this.buildings = x;
        this.router.navigate(["units"]);
        // this.router.navigate(["buildings"]);
      }
      else{
        this.matSnackBar.open(x.Message, 'x', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['red-snackbar']
        });
      }
    });
  }

  cancel(){
    this.router.navigate(["units"])
  }
}
