import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UnitDeletionComponent } from 'src/app/units/unit-deletion/unit-deletion.component';
import { UnitService } from 'src/app/units/unit.service';
import { UpdateunitmodalComponent } from 'src/app/units/updateunitmodal/updateunitmodal.component';
import { ViewunitinfoComponent } from 'src/app/units/viewunitinfo/viewunitinfo.component';
import { AddBuiidingComponent } from '../add-buiiding/add-buiiding.component';
import { AddbuildingmodalComponent } from '../addbuildingmodal/addbuildingmodal.component';
import { BuildingService } from '../building.service';

@Component({
  selector: 'app-viewbuildinginfo',
  templateUrl: './viewbuildinginfo.component.html',
  styleUrls: ['./viewbuildinginfo.component.scss']
})
export class ViewbuildinginfoComponent implements OnInit {

  form: FormGroup;
  buildingInfo: any;
  unitsList: any[] = [];
  units: any;

  constructor(private service: BuildingService, private router: Router, private formbulider: FormBuilder, private matSnackBar: MatSnackBar, private UnitSvc: UnitService, private dialog: MatDialog) { }

  ngOnInit(): void {
    var id = localStorage.getItem('VBuildingID');

    this.form = this.formbulider.group({
      BuildingName: ['', [Validators.required]],
      Unitsowned: ['', [Validators.required]],
      City: ['', [Validators.required]],
      Address: ['', [Validators.required]],
      Suburb: ['', [Validators.required]],
      PostalCode: ['', [Validators.required]],
      // Size: ['', [Validators.required]],
    });

    this.service.GetBuilding(id).subscribe((result: any) => {
      this.buildingInfo = result;
      // console.log(result);
      // console.log(this.buildingInfo);
      // console.log(this.buildingInfo[0]);
      this.form.controls['BuildingName'].patchValue(this.buildingInfo[0].BuildingName);
      // this.form.controls['Size'].patchValue(result.BuildingName);
      this.form.controls['City'].patchValue(this.buildingInfo[0].City);
      this.form.controls['Address'].patchValue(this.buildingInfo[0].StreetAddress);
      this.form.controls['Suburb'].patchValue(this.buildingInfo[0].Suburb);
      this.form.controls['PostalCode'].patchValue(this.buildingInfo[0].PostalCode);
    });

    // this.service.GetListUnitsInBuildings(id).subscribe((result: any) => {
    //   if (result.Success) {
    //     this.unitsList = result.Result;
    //     console.log(this.unitsList);        
    //   }
    //   else {
    //     this.matSnackBar.open(result.Message, 'x', {
    //       duration: 2500,
    //       verticalPosition: 'top',
    //       horizontalPosition: 'right',
    //       panelClass: ['red-snackbar']
    //     });
    //   }
    // });

    this.UnitSvc.GetUnits().subscribe((x) => {
      this.units = x;
      // console.log(this.units);

      this.units.forEach(element => {
        if (element.BuildingID == id) {
          this.unitsList.push(element);
        }
      });
    });
  }

  AddUnitBuilding(event) {
    const dialogRef = this.dialog.open(AddbuildingmodalComponent, {
      restoreFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      var id = localStorage.getItem('VBuildingID');

      if (result.data) {
        this.unitsList = [];
        this.UnitSvc.GetUnits().subscribe((x) => {
          this.units = x;
          // console.log(this.units);

          this.units.forEach(element => {
            if (element.BuildingID == id) {
              this.unitsList.push(element);
            }
          });
        });
      }
    });
  }

  edit(id) {
    localStorage["UnitToUpdate"] = id;
    var idB = localStorage.getItem('VBuildingID');
    // this.router.navigate(["update-unit"]);

    const dialogRef = this.dialog.open(UpdateunitmodalComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.data){
        this.unitsList = [];
        this.UnitSvc.GetUnits().subscribe((x) => {
          this.units = x;
          // console.log(this.units);

          this.units.forEach(element => {
            if (element.BuildingID == idB) {
              this.unitsList.push(element);
            }
          });
        });
      }
    });
  }

  openDelete(id): void {
    localStorage["UnitToDelete"] = id;
    var idB = localStorage.getItem('VBuildingID');

    const dialogRef = this.dialog.open(UnitDeletionComponent, {
      height: '250px',
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result.data){
        this.unitsList = [];
        this.UnitSvc.GetUnits().subscribe((x) => {
          this.units = x;
          // console.log(this.units);
    
          this.units.forEach(element => {
            if (element.BuildingID == idB) {
              this.unitsList.push(element);
            }
          });
        });
      }
    });
  }

  viewUnitInfo(unit) {
    // console.log('The dialog was closed', building);
    // console.log('The dialog was closed', building.BuildingID);
    localStorage.setItem('VUnitID', unit.UnitID);
    localStorage.setItem('VUnitIDName', unit.UnitNumber);
    console.log(unit);
    // this.router.navigate(['landlord/viewunitinfo']);

    const dialogRef = this.dialog.open(ViewunitinfoComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  cancel() {
    this.router.navigate(['buildings']);
  }
}
