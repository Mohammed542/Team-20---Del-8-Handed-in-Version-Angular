import { MainService } from './../../main.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';  
import { UnitService } from '../unit.service';

@Component({
  selector: 'app-water-and-electricity',
  templateUrl: './water-and-electricity.component.html',
  styleUrls: ['./water-and-electricity.component.scss']
})
export class WaterAndElectricityComponent implements OnInit {

  buildings : any;
  types : any;
  form: FormGroup;
  SaveForm: FormGroup;

  Days: any;
  ConsumptionAmount: any;
  ConsumptionChargeAmount: any;
  FixedChargeAmount: any;
  Total: any;
  UnitID: any;
  UnitSize : any;
  TotalSize : any;
  UnitRate : any;
  UnitElectricityAmount : any;
  WaterandSanitationUnitUsage: any;
  SewageDisposalChargeRate : any;
  APL8: any;
  APL9: any;

  cConsumptionAmount: any;
  cDisposalChargeRate: any;
  cFixedChargeRate : any;

  allBuildings: any;
  building: any;
  unitsList: any[] =[];
  selectUnit: any;
  
  year = new Date().getFullYear();
  range = [];
  month: string = null;
  yeaR: string = null;

  constructor(private service: UnitService, private serviceMain: MainService,  private router: Router,  private formbulider: FormBuilder) { }

  ngOnInit(): void {
    this.serviceMain.GetListBuildingUnitsLandlord().subscribe((data) => {
      this.allBuildings = data;
    });

    // this.service.GetListOfBuildings().subscribe((x) => {
    //   this.buildings = x;
    // })

    this.SaveForm = this.formbulider.group({  
      UnitNumber: ['', [Validators.required]],
      selectedBuilding: ['', Validators.required],
      selectedMonth: ['', Validators.required],
      selectedYear: ['', Validators.required]
    }); 

    this.form = this.formbulider.group({  
      PreviousElectricty: ['', [Validators.required]],  
      CurrentElectricty: ['', [Validators.required]],  
      WaterandSanitationUnitUsage: ['', [Validators.required]],  
    });

    var intervl = this.year - 2015;
    for (let i = 0; i <= intervl; i++) {
      this.range.push({
        label: 2015 + i,
        value: parseInt(String(2015 + i))
      })
    }

    this.range = this.range.reverse();
  }

  getErrorMessage(data) {
    if (data == "building") {
      if (this.SaveForm.controls.selectedBuilding.hasError('required')) {
        return 'You must select a building';
      }
    }
    if (data == "unit") {
      if (this.SaveForm.controls.UnitNumber.hasError('required')) {
        return 'You must select a unit';
      }
    }
    if (data == "month") {
      if (this.SaveForm.controls.selectedMonth.hasError('required')) {
        return 'Please provide a month';
      }
    }
    if (data == "year") {
      if (this.SaveForm.controls.selectedYear.hasError('required')) {
        return 'Please provide a year';
      }
    }
  }

  onMonthChange(event) {
    this.month = event.value;
  }

  onYearChange(event) {
    console.log(event.value);
    this.yeaR = event.value;
  }

  GetData(form){
    this.service.GetUnitData(this.building,form.UnitNumber, this.month, this.year).subscribe((x) => {
      if(x != null && x != undefined){
        this.UnitID = x[0].UnitID;
        this.UnitSize = x[0].UnitSize;
        this.TotalSize = x[0].TotalSize;
        this.UnitRate = x[0].UnitRate;
  
        localStorage["UnitID"] = x[0].UnitID;
        localStorage["UnitSize"] = x[0].UnitSize;
        localStorage["TotalSize"] =  x[0].TotalSize;
        localStorage["UnitRate"] = x[0].UnitRate;
      }
      else if(x != null && x != undefined){
        this.UnitSize = "Unit Not Found";
        this.TotalSize = "Unit Not Found";
        this.UnitRate = "Unit Not Found";
      }
    })
  }    

  Next(e){
    let saveData = {
      "PreviousElectricty": e.target.PreviousElectricty.value,
      "CurrentElectricty": e.target.CurrentElectricty.value,
      "WaterandSanitationUnitUsage": e.target.WaterandSanitationUnitUsage.value,
    };

    localStorage["PreviousElectricty"] = e.target.PreviousElectricty.value;
    localStorage["CurrentElectricty"] = e.target.CurrentElectricty.value;
    localStorage["WaterandSanitationUnitUsage"] = e.target.WaterandSanitationUnitUsage.value;

    let pElectricity: number;
    let cElectricity: number;
    let WaterandSanitationUnitUsage: number;
    
    pElectricity = localStorage["PreviousElectricty"];
    cElectricity = localStorage["CurrentElectricty"];
    WaterandSanitationUnitUsage = localStorage["WaterandSanitationUnitUsage"];

    this.UnitElectricityAmount = (cElectricity - pElectricity);
    this.ConsumptionAmount = this.cConsumptionAmount;
    this.WaterandSanitationUnitUsage = WaterandSanitationUnitUsage * this.cConsumptionAmount;
    this.UnitSize;
    this.TotalSize;
    this.SewageDisposalChargeRate = this.cDisposalChargeRate;
    this.APL8 = this.cFixedChargeRate * this.APL9;
    this.APL9 = this.UnitSize / this.TotalSize;


    localStorage["APL1"] = this.UnitElectricityAmount;
    localStorage["APL4"] = this.ConsumptionAmount;
    localStorage["APL5"] = this.WaterandSanitationUnitUsage;
    localStorage["APLFive"] = this.UnitSize;
    localStorage["APL6"] = this.TotalSize;
    localStorage["APL7"] = this.SewageDisposalChargeRate;
    localStorage["APL9"] = this.APL9;
    //localStorage["APL8"] = this.APL8;
    localStorage["APL8"] = 1;

    this.router.navigate(['capture-water-and-electricity'])

  }

  storeBuilding(event){
    var id = event.value;
    localStorage["CheckBillBuildingID"] = id;
    this.service.GetBuildingDetails(id).subscribe((x) => {
      this.cConsumptionAmount = x[0].ConsumptionChargeRate;
      this.cDisposalChargeRate = x[0].DisposalChargeRate;
      this.cFixedChargeRate = x[0].FixedChargeRate;
    })
  }

  onBuildingChange(event) {
    this.building = event.value;
    console.log(this.building);
    console.log(event);
    this.unitsList = [];

    this.service.GetBuildingDetails(this.building).subscribe((x) => {
      this.cConsumptionAmount = x[0].ConsumptionChargeRate;
      this.cDisposalChargeRate = x[0].DisposalChargeRate;
      this.cFixedChargeRate = x[0].FixedChargeRate;
    })

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
