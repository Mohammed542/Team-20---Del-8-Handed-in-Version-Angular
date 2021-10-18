import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AddbuildingmodalComponent } from 'src/app/buildings/addbuildingmodal/addbuildingmodal.component';
import { BuildingService } from 'src/app/buildings/building.service';
import { UnitDeletionComponent } from '../unit-deletion/unit-deletion.component';
import { UnitService } from '../unit.service';
import { UpdateunitmodalComponent } from '../updateunitmodal/updateunitmodal.component';

@Component({
  selector: 'app-viewunitinfo',
  templateUrl: './viewunitinfo.component.html',
  styleUrls: ['./viewunitinfo.component.scss']
})
export class ViewunitinfoComponent implements OnInit {

  form: FormGroup;
  buildingInfo: any;
  unitsList: any[] = [];
  units: any;
  unit: any;

  constructor(private service: UnitService, private router: Router, private formbulider: FormBuilder, private matSnackBar: MatSnackBar, private UnitSvc: UnitService, private dialogRef: MatDialogRef<ViewunitinfoComponent>) { }

  ngOnInit(): void {
    var id = localStorage.getItem('VUnitID');

    this.form = this.formbulider.group({
      BuildingName: [, Validators.required],
      UnitType: [, Validators.required],   
      UnitNumber: [, Validators.required],  
      NumberOfBedrooms: [, Validators.required],  
      NumberOfBathrooms: [, Validators.required],  
      Size: [, Validators.required],  
      RentalAmount: [, Validators.required],  
      Date: [, Validators.required],  
    });

    this.service.GetUnit(id).subscribe((x) => {
      this.unit = x[0];
      this.createForm(x);
    });
  }

  createForm(object: any){    
    this.form.controls['BuildingName'].patchValue(object[0].BuildingName);
    this.form.controls['UnitType'].patchValue(object[0].UnitType);
    this.form.controls['UnitNumber'].patchValue(object[0].UnitNumber);
    this.form.controls['NumberOfBedrooms'].patchValue(object[0].NumberOfBedrooms);
    this.form.controls['NumberOfBathrooms'].patchValue(object[0].NumberOfBathrooms);
    this.form.controls['Size'].patchValue(object[0].BuildingSize);
    this.form.controls['RentalAmount'].patchValue(object[0].RentalAmount);
    
    var date = object[0].Date;
    date = date.substring(0, date.indexOf("T"));

    this.form.controls['Date'].patchValue(date);
  }

  cancel() {
    // this.router.navigate(['units']);
    this.dialogRef.close();
  }
}
