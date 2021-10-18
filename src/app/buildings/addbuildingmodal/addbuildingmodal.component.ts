import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UnitService } from 'src/app/units/unit.service';
import { BuildingService } from '../building.service';

@Component({
  selector: 'app-addbuildingmodal',
  templateUrl: './addbuildingmodal.component.html',
  styleUrls: ['./addbuildingmodal.component.scss']
})
export class AddbuildingmodalComponent implements OnInit {

  constructor(private service: UnitService,  private router: Router,  private formbulider: FormBuilder, private dialogRef: MatDialogRef<AddbuildingmodalComponent>, private matSnackBar: MatSnackBar) { }

  buildings : any;
  types : any;
  createForm : any;
  globalBID = localStorage.getItem('VBuildingIDName');

  ngOnInit(): void {
    var id = localStorage.getItem('VBuildingID');

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

  storeType(id){
    localStorage["UnitTypeID"] = id;
  }

  AddUnits(e){
    let unit = {
      "BuildingID": localStorage.getItem('VBuildingID'),
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
        this.dialogRef.close({data: true});
        // this.router.navigate(["buildings"]);
      }
      else{
        this.matSnackBar.open(x.Message, 'x', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['red-snackbar']
        });
        // this.dialogRef.close({data: false});
      }
    })
    // this.router.navigate(["units"])
    // this.dialogRef.close({data: true});
  }

  cancel(){
    this.dialogRef.close({data: false});
  }

}
