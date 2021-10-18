import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BuildingDeletionComponent } from './building-deletion/building-deletion.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BuildingService } from './building.service';
import { AddbuildingmodalComponent } from './addbuildingmodal/addbuildingmodal.component';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss'],
})
export class BuildingsComponent implements OnInit {
  buildings: any;
  SearchForm: any;

  constructor(
    private service: BuildingService,
    public dialogRef: MatDialogRef<BuildingDeletionComponent>,
    private router: Router,
    public dialog: MatDialog,
    private formbulider: FormBuilder
  ) {}

  ngOnInit() {
    this.service.GetBuildings().subscribe((x) => {
      this.buildings = x;
      // console.log(this.buildings);
    });

    this.SearchForm = this.formbulider.group({
      SearchBuilding: [''],
    });
  }

  delaySearchInput(event) {
    const searchTerm = this.SearchForm.value.SearchBuilding;
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      this.SearhcBuildings(searchTerm);
    }, 3500);
  }

  SearhcBuildings(searchTerm) {
    if (searchTerm == '') {
      this.service.GetBuildings().subscribe((x) => {
        this.buildings = x;
      });
    } else {
      console.log(searchTerm);
      this.service.SearchBuildings(searchTerm).subscribe((x) => {
        this.buildings = x;
        console.log(x)
      });
    }
    this.router.navigate(['buildings']);
  }

  add() {
    this.router.navigate(['add-building']);
  }

  edit(id) {
    localStorage['BuildingToUpdate'] = id;
    this.router.navigate(['update-building']);
  }

  capture() {
    this.router.navigate(['municipal-bill']);
  }

  openDialog(id): void {
    localStorage['BuildingToDelete'] = id;

    const dialogRef = this.dialog.open(BuildingDeletionComponent, {
      // height: '250px',
      // width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if(result.data){
        this.service.GetBuildings().subscribe((x) => {
          this.buildings = x;
        });
      }
    });
  }

  viewBuildingInfo(building){
    // console.log('The dialog was closed', building);
    // console.log('The dialog was closed', building.BuildingID);
    localStorage.setItem('VBuildingID', building.BuildingID);
    localStorage.setItem('VBuildingIDName', building.BuildingName);
    
    this.router.navigate(['landlord/viewbuildinginfo']);
  }

  addUnit(id){
    localStorage.setItem('VBuildingID', id.BuildingID);
    localStorage.setItem('VBuildingIDName', id.BuildingName);

    const dialogRef = this.dialog.open(AddbuildingmodalComponent, {
      restoreFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      // var id = localStorage.getItem('VBuildingID');

      // if (result.data) {
      //   this.unitsList = [];
      //   this.UnitSvc.GetUnits().subscribe((x) => {
      //     this.units = x;
      //     // console.log(this.units);
    
      //     this.units.forEach(element => {
      //       if (element.BuildingID == id) {
      //         this.unitsList.push(element);
      //       }
      //     });
      //   });
      // }
    });
  }

  // viewBuildingUnit(id){
  //   this.router.navigate([`building/units/${id}`]);
  // }
}
