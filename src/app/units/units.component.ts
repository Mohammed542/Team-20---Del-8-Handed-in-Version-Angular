import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UnitDeletionComponent } from './unit-deletion/unit-deletion.component';
import { UnitService } from './unit.service';
import { ViewunitinfoComponent } from './viewunitinfo/viewunitinfo.component';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {

  units: any;
  createForm: any;
  SearchForm: any;

  constructor(private service: UnitService, public dialogRef: MatDialogRef<UnitDeletionComponent>, private router: Router, public dialog: MatDialog, private formbulider: FormBuilder) { }

  async ngOnInit() {
    this.SearchForm = this.formbulider.group({
      SearchUnit: ['', [Validators.required]],
      SearhcBuilding: ['', [Validators.required]],
    });

    await this.service.GetUnits().subscribe((x) => {
      this.units = x;
      console.log(this.units);
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

  SearhcUnits(e) {
    this.service.SearchUnits(e.target.SearchUnit.value).subscribe((x) => {
      this.units = x;
    })
    this.router.navigate(["units"])
  }

  SearhcBuildings(e) {
    this.service.SearchUnits(e.target.SearhcBuilding.value).subscribe((x) => {
      this.units = x;
    })
    this.router.navigate(["units"])
  }

  add() {
    this.router.navigate(["add-unit"])
  }

  edit(id) {
    localStorage["UnitToUpdate"] = id;
    this.router.navigate(["update-unit"])
  }
  capture() {
    this.router.navigate(["water-and-electricity"])
  }

  openDialog(id): void {
    localStorage["UnitToDelete"] = id;

    const dialogRef = this.dialog.open(UnitDeletionComponent, {
      height: '250px',
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result.data) {
        this.service.GetUnits().subscribe((x) => {
          this.units = x;
        });
      }
    });
  }
}
