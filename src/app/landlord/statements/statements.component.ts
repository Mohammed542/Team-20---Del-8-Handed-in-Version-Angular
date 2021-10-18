import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main.service';
import { GenstatementMdl } from 'src/app/Models/GenStatementMdl';

@Component({
  selector: 'app-statements',
  templateUrl: './statements.component.html',
  styleUrls: ['./statements.component.scss']
})
export class StatementsComponent implements OnInit {
  allBuildings: any;
  building: any;
  unitsList: any[] =[];
  selectUnit: any;

  form: FormGroup;

  constructor(private router: Router, private service: MainService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.service.GetListBuildingUnitsLandlord().subscribe((data) => {
      this.allBuildings = data;
    });

    this.form = this.formBuilder.group({
      selectedBuilding: ['', Validators.required],
      selectedUnit: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  getErrorMessage(data) {
    if (data == "building") {
      if (this.form.controls.selectedBuilding.hasError('required')) {
        return 'You must select a building';
      }
    }
    if (data == "unit") {
      if (this.form.controls.selectedUnit.hasError('required')) {
        return 'You must select a unit';
      }
    }
    if (data == "start") {
      if (this.form.controls.startDate.hasError('required')) {
        return 'You must provide a start date';
      }
    }
    if (data == "end") {
      if (this.form.controls.endDate.hasError('required')) {        
        return 'You must provide an end date';
      }
    }
  }

  // onClick(){
  //   this.router.navigateByUrl('landlord/succesfullygenstatemnt');
  // }

  onClick(form) {
    let statement = new GenstatementMdl();

    statement.BuildingID = form.selectedBuilding;
    statement.UnitID = form.selectedUnit;
    statement.StartDate = form.startDate;
    statement.EndDate = form.endDate;

    this.service.updateStatementDataLandlord(statement);
  }

  onBuildingChange(event) {
    this.building = event.value;
    console.log(this.building);
    console.log(event);
    this.unitsList = [];

    this.allBuildings.forEach(element => {
      console.log(element);
      if (element.Building.BuildingID == this.building) {
        console.log(element.Building.BuildingID);
        element.Units.forEach(element2 => {
          console.log(element2);
          this.unitsList.push(element2);
        });
      }
    });
    console.log(this.unitsList);
  }

  onUnitChange(event){
    this.selectUnit = event.value;
    console.log(this.selectUnit);
  }
}
