import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main.service';
import { GenstatementMdl } from 'src/app/Models/GenStatementMdl';

@Component({
  selector: 'app-genstatement',
  templateUrl: './genstatement.component.html',
  styleUrls: ['./genstatement.component.scss']
})
export class GenstatementComponent implements OnInit {
  allBuildings: any = [];
  building: any;
  // unitsList: {
  ////   UnitID: number,
  //   UnitNumber: string
  // };
  unitsList: any[] = [];
  selectUnit: any;

  selectedStartDate;
  selectedEndDate;

  tenantID: any;

  minDate1: Date;
  maxDate1: Date;
  minDate2: Date;
  maxDate2: Date;
  datesIn: any;
  // rag1: Date;
  // rag2: Date;

  @Output()
  dateChange: EventEmitter<MatDatepickerInputEvent<any>> = new EventEmitter();

  // selectedBuilding = new FormControl(Validators.required);
  // selectedUnit = new FormControl(Validators.required);
  // startDate = new FormControl(Validators.required);
  // endDate = new FormControl(Validators.required);

  form: FormGroup;

  constructor(private router: Router, private service: MainService, private formBuilder: FormBuilder) {
    const currentYear = new Date().getFullYear();
    this.minDate1 = new Date(2015, 0, 1);
    this.maxDate1 = new Date(currentYear + 1, 11, 31);
    this.minDate2 = new Date(2015, 0, 1);
    this.maxDate2 = new Date(currentYear + 1, 11, 31);
  }

  ngOnInit(): void {
    this.tenantID = sessionStorage["TenantID"];
    // if(this.tenantID == 0 || this.tenantID == null){
    //   this.tenantID = 1;
    // }
    //this.tenantID = 1;
    this.service.GetListBuildingUnits(this.tenantID).subscribe((data) => {
      this.allBuildings = data;
      // console.log(this.allBuildings);      
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
        return 'Please select a building';
      }
    }
    if (data == "unit") {
      if (this.form.controls.selectedUnit.hasError('required')) {
        return 'Please select a unit';
      }
    }
    if (data == "start") {
      if (this.form.controls.startDate.hasError('required')) {
        return 'Please provide a start date';
      }
    }
    if (data == "end") {
      if (this.form.controls.endDate.hasError('required')) {
        return 'Please provide an end date';
      }
    }

    //return this.form.controls.selectedUnit.hasError('email') ? 'Not a valid email' : '';
  }

  onClick(form) {
    let statement = new GenstatementMdl();

    // statement.BuildingID = this.building;
    // statement.UnitID = this.selectedUnit;

    statement.BuildingID = form.selectedBuilding;
    statement.UnitID = form.selectedUnit;
    statement.StartDate = form.startDate;
    statement.EndDate = form.endDate;

    // console.log(statement);

    this.service.updateStatementData(statement);

    // this.router.navigateByUrl('tenant/successfullygeneratedstatement');
  }

  onClickCancel() {
    this.router.navigate(["tenant/home"]);
  }

  onBuildingChange(event) {
    this.building = event.value;
    // console.log(this.building);
    // console.log(event);
    this.unitsList = [];

    // for (var build in this.allBuildings) {
    //   if (this.building) {
    //     console.log(build);
    //   }
    // }

    if (this.building != undefined) {
      this.allBuildings.forEach(element => {
        // console.log(element);
        if (element.Building.BuildingID == this.building) {
          // console.log(element.Building.BuildingID);
          // this.unitsList == element.Units;
          element.Units.forEach(element2 => {
            // console.log(element2);
            // console.log(element2.value);
            this.unitsList.push(element2);
          });
        }
      });
    }
    else {
      this.form.controls["selectedUnit"].setValue(undefined);
      // console.log(this.form.controls.selectedUnit.value);

      const currentYear = new Date().getFullYear();
      this.minDate1 = new Date(2015, 0, 1);
      this.maxDate1 = new Date(currentYear + 1, 11, 31);
      this.minDate2 = new Date(2015, 0, 1);
      this.maxDate2 = new Date(currentYear + 1, 11, 31);


      if(this.selectedStartDate != null && this.selectedStartDate != undefined && this.selectedStartDate != ''){
        this.minDate2 = this.selectedStartDate;
      }
      if(this.selectedEndDate != null && this.selectedEndDate != undefined && this.selectedEndDate != ''){
        this.maxDate1 = this.selectedEndDate;
      }
      
      console.log(this.maxDate1);
      console.log(this.maxDate2);
    }

    // console.log(this.unitsList);
  }

  onUnitChange(event) {
    // console.log(this.selectedStartDate);
    // console.log(this.selectedEndDate);
    
    this.selectUnit = event.value;
    // console.log(this.selectUnit);

    if (this.selectUnit != undefined) {
      this.service.getUnitDateParameters(this.selectUnit).subscribe(result => {
        // console.log(result);
        this.datesIn = result;
        var sDate = this.datesIn.StartDate.split('/');
        var eDate = this.datesIn.EndDate.split('/');

        this.minDate1 = new Date(sDate[0], sDate[1] - 1, sDate[2]);
        // if(){
        // this.maxDate1 = new Date(eDate[0], eDate[1] - 1, eDate[2]);
        // }
        // this.maxDate1.setDate(eDate.getDate() - 1);
        // if(){
        // this.minDate2 = new Date(sDate[0], sDate[1] - 1, sDate[2]);
        // }
        // this.minDate2.setDate(sDate.getDate() + 1);
        this.maxDate2 = new Date(eDate[0], eDate[1] - 1, eDate[2]);

        if(this.selectedStartDate != null && this.selectedStartDate != undefined && this.selectedStartDate != ''){
          // this.minDate2 = this.selectedStartDate;
          var comparesdate = new Date(sDate[0], sDate[1] - 1, sDate[2]);
          if (this.selectedStartDate < comparesdate) {
            this.minDate2 = comparesdate;
            // console.log("mindatetwoo");
            
          } else {
            this.minDate2 = this.selectedStartDate;
            // console.log("mindatetwifbsifbuoo");
          }
        }
        else{
          this.minDate2 = new Date(sDate[0], sDate[1] - 1, sDate[2]);
        }

        if(this.selectedEndDate != null && this.selectedEndDate != undefined && this.selectedEndDate != ''){
          var compareedate = new Date(eDate[0], eDate[1] - 1, eDate[2]);
          if(this.selectedEndDate < compareedate){
            this.maxDate1 = this.selectedEndDate;
          }
          else{
            this.maxDate1 = compareedate;
          }
        }
        else{
          this.maxDate1 = new Date(eDate[0], eDate[1] - 1, eDate[2]);
        }
      });
    }
    else {
      const currentYear = new Date().getFullYear();
      this.minDate1 = new Date(2015, 0, 1);
      // this.maxDate1 = new Date(currentYear + 1, 11, 31);
      // this.minDate2 = new Date(2015, 0, 1);
      this.maxDate2 = new Date(currentYear + 1, 11, 31);

      if(this.selectedStartDate != null && this.selectedStartDate != undefined && this.selectedStartDate != ''){
        this.minDate2 = this.selectedStartDate;
      }
      else{
        this.minDate2 = new Date(2015, 0, 1);
      }
      if(this.selectedEndDate != null && this.selectedEndDate != undefined && this.selectedEndDate != ''){
        this.maxDate1 = this.selectedEndDate;
      }
      else{
        this.maxDate1 = new Date(currentYear + 1, 11, 31);
      }
    }

    // console.log(this.minDate1);
    // console.log(this.minDate2);
    // console.log(this.maxDate1);
    // console.log(this.maxDate2);
    // console.log(this.selectedStartDate);
    // console.log(this.selectedEndDate);
    
  }

  onStartDateChange() {
    // console.log(this.form.controls.startDate.value);
    var dattee = this.form.controls.startDate.value;
    // console.log(dattee);

    // console.log(dattee.getFullYear());
    // console.log(dattee.getMonth());
    // console.log(dattee.getDate());

    // var datstri = dattee.toString();
    // datstri = datstri.split(' ');
    // console.log(datstri);    

    // dattee = dattee.toISOString()
    // console.log(dattee);

    // var dateTimeSplit = dattee.split('T');
    // var dateSplit = dateTimeSplit[0].split('-');

    this.minDate2 = new Date(dattee.getFullYear(), dattee.getMonth(), dattee.getDate());
    this.selectedStartDate = new Date(dattee.getFullYear(), dattee.getMonth(), dattee.getDate());
    // console.log(this.minDate2);
  }

  onEndDateChange() {
    var dattee = this.form.controls.endDate.value;
    // dattee = new Date().toISOString()
    // var dateTimeSplit = dattee.split('T');
    // var dateSplit = dateTimeSplit[0].split('-');

    // this.maxDate1 = new Date(dateSplit[0], dateSplit[1]-1, dateSplit[2]);
    this.maxDate1 = new Date(dattee.getFullYear(), dattee.getMonth(), dattee.getDate());
    this.selectedEndDate = new Date(dattee.getFullYear(), dattee.getMonth(), dattee.getDate());
    // console.log(this.maxDate1);    
  }
}
