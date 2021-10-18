import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';  
import { UnitService } from '../unit.service';

@Component({
  selector: 'app-capture-water-and-electrcity',
  templateUrl: './capture-water-and-electrcity.component.html',
  styleUrls: ['./capture-water-and-electrcity.component.scss']
})
export class CaptureWaterAndElectrcityComponent implements OnInit {

  buildings : any;
  types : any;
  form: FormGroup;

  APL1: any;
  APL4: any;
  APL5: any;
  APLFive: any;
  APL6: any;
  APL7: any;
  APL8: any;
  APL9: any;

  constructor(private service: UnitService,  private router: Router,  private formbulider: FormBuilder) { }

  ngOnInit(): void {
    this.APL1 = localStorage["APL1"];
    this.APL4 = localStorage["APL4"];
    this.APL5 = localStorage["APL5"];
    this.APLFive = localStorage["APLFive"];
    this.APL6 = localStorage["APL6"];    
    this.APL7 = localStorage["APL7"];
    this.APL8 = localStorage["APL8"];
    this.APL9 = localStorage["APL9"];
  }

  Capture(){
    console.log("capture");

    let saveData = {
      "UnitID": localStorage["UnitID"],

      //Rate Unit
      "RateUnitAmount": localStorage["UnitRate"],

      //Sewage Unit
      "SewageUnitAmount": localStorage["APL7"],

      //WaterandSanitation Unit
      "WaterAndSantiationUnitAmount": localStorage["APL5"],

      //Electricity Unit
      "PreviousUnitUsage": localStorage["PreviousElectricty"],
      "CurrentUnitUsage": localStorage["CurrentElectricty"],
      "ElectricityUnitAmount": localStorage["APL1"],
    };
    console.log(saveData);

    this.service.CaptureUnitMunicipalityBill(saveData).subscribe((x) => {
      this.buildings = x;
    })  }

}
