import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuildingService } from '../building.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-municipal-bill',
  templateUrl: './municipal-bill.component.html',
  styleUrls: ['./municipal-bill.component.scss'],
})
export class MunicipalBillComponent implements OnInit {
  form = new FormGroup({
    Month: new FormControl(),
    Building: new FormControl(),
    Rate: new FormControl(),
    PreviousDate: new FormControl(),
    PreviousReading: new FormControl(),
    CurrentDate: new FormControl(),
    CurrentReading: new FormControl(),
    ConsumptionChargeRate: new FormControl(),
    FixedChargeRate: new FormControl(),
    DisposalChargePercentage: new FormControl(),
    DisposalChargeRate: new FormControl(),
    SewageFixedChargeRate: new FormControl(),
  });

  buildings: any;
  types: any;
  maxDate = new Date();
  amountOfDays: number;
  consumptionAmount: number;
  consumptionChargeAmount: number;
  fixedChargeAmount: number;
  total: number;
  clickedSave: boolean = false;

  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  constructor(
    private service: BuildingService,
    private router: Router,
    private formbulider: FormBuilder
  ) {}

  ngOnInit(): void {
    this.service.GetListOfBuildings().subscribe((x) => {
      this.buildings = x;
    });

    this.form = this.formbulider.group({
      Month: ['', [Validators.required]],
      Building: ['', [Validators.required]],
      PreviousDate: ['', [Validators.required]],
      CurrentDate: ['', [Validators.required]],

      PreviousReading: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]\d*$/),
          Validators.min(1),
        ],
      ],
      Rate: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]\d*$/),
          Validators.min(1),
        ],
      ],
      CurrentReading: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]\d*$/),
          Validators.min(1),
        ],
      ],
      ConsumptionChargeRate: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]\d*$/),
          Validators.min(1),
        ],
      ],
      FixedChargeRate: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]\d*$/),
          Validators.min(1),
        ],
      ],

      DisposalChargePercentage: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]\d*$/),
          Validators.min(1),
        ],
      ],
      DisposalChargeRate: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]\d*$/),
          Validators.min(1),
        ],
      ],
      SewageFixedChargeRate: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]\d*$/),
          Validators.min(1),
        ],
      ],
    });
  }

  mb2() {
    this.router.navigate(['capture-municipal-bill']);
  }

  calculateDayDifference() {
    const data = this.form.value;
    var diff = Math.abs(
      data.CurrentDate.getTime() - data.PreviousDate.getTime()
    );
    var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    this.amountOfDays = diffDays;
  }

  calculateConsumptionDifference() {
    const data = this.form.value;
    this.consumptionAmount = data.CurrentReading - data.PreviousReading;
  }

  calculateConsumptionCharge() {
    const data = this.form.value;
    const isNegativeConumptionAmount = this.consumptionAmount < 0;
    if (this.consumptionAmount || !isNegativeConumptionAmount) {
      this.consumptionChargeAmount =
        this.consumptionAmount * data.ConsumptionChargeRate;
    } else {
      this.consumptionChargeAmount = 0;
    }
  }

  calculateFixedChargeDifference() {
    const data = this.form.value;
    this.fixedChargeAmount = this.amountOfDays * data.FixedChargeRate;
    this.calculateTotal();
  }

  calculateTotal() {
    const isTotalCalculatable =
      !isNaN(this.consumptionChargeAmount) && !isNaN(this.fixedChargeAmount);
    if (isTotalCalculatable) {
      this.total = this.consumptionChargeAmount + this.fixedChargeAmount;
    }
  }

  Save(e) {
    const data = this.form.value;

    const municipalbill1 = {
      MunicipallBillBuildingID: data.Building,
      Month: data.Month,
      Rate: data.Rate,
      PreviousDate: data.PreviousDate,
      PreviousReading: data.PreviousReading,
      CurrentDate: data.CurrentDate,
      CurrentReading: data.CurrentReading,
      ConsumptionChargeRate: data.ConsumptionChargeRate,
      FixedChargeRate: data.FixedChargeRate,
      DisposalChargePercentage: data.DisposalChargePercentage,
      DisposalChargeRate: data.DisposalChargeRate,
      SewageFixedChargeRate: data.SewageFixedChargeRate,
    };

    const APLs = {
      AmountOfDays: this.amountOfDays,
      ConsumptionAmount: this.consumptionAmount,
      ConsumptionChargeAmount: this.consumptionChargeAmount,
      FixedChargeAmount: this.fixedChargeAmount,
      Total: this.total,
    };

    localStorage.setItem('municipalbillpage1Data', JSON.stringify(municipalbill1));
    localStorage.setItem('municipalbillpage1APLs', JSON.stringify(APLs));

    this.mb2();
  }

  getErrorMessage(property) {
    switch (property) {
      case 'Month':
        return this.form.controls.Month.hasError('required')
          ? 'Month can not be empty, it is a required field'
          : '';

      case 'Building':
        return this.form.controls.Building.hasError('required')
          ? 'Building can not be empty, it is a required field'
          : '';

      case 'PreviousDate':
        return this.form.controls.PreviousDate.hasError('required')
          ? 'PreviousDate can not be empty, it is a required field'
          : '';

      case 'Rate':
        if (this.form.controls.Rate.hasError('required')) {
          return 'Rate amount can not be empty, it is a required field';
        }
        return this.form.controls.Rate.hasError('pattern')
          ? 'Invalid Rate amount value: Rate amount must be a number'
          : '';

      case 'PreviousReading':
        if (this.form.controls.PreviousReading.hasError('required')) {
          return 'Previous Reading can not be empty, it is a required field';
        }
        return this.form.controls.PreviousReading.hasError('pattern')
          ? 'Invalid Previous Reading value: Previous Reading must be a number'
          : '';

      case 'CurrentDate':
        if (this.form.controls.CurrentDate.hasError('required')) {
          return 'Current Date can not be empty, it is a required field';
        }
        return this.form.controls.CurrentDate.hasError('pattern')
          ? 'Invalid Current Date value: Current Date must be a number'
          : '';

      case 'CurrentReading':
        if (this.form.controls.CurrentReading.hasError('required')) {
          return 'Current Reading can not be empty, it is a required field';
        }
        return this.form.controls.CurrentReading.hasError('pattern')
          ? 'Invalid Current Reading value: Current Reading must be a number'
          : '';

      case 'ConsumptionChargeRate':
        if (this.form.controls.ConsumptionChargeRate.hasError('required')) {
          return 'Consumption Charge Rate can not be empty, it is a required field';
        }
        return this.form.controls.ConsumptionChargeRate.hasError('pattern')
          ? 'Invalid Consumption Charge Rate value: Consumption Charge Rate must be a number'
          : '';

      case 'FixedChargeRate':
        if (this.form.controls.FixedChargeRate.hasError('required')) {
          return 'Fixed Charge Rate can not be empty, it is a required field';
        }
        return this.form.controls.FixedChargeRate.hasError('pattern')
          ? 'Invalid Fixed Charge Rate value: Fixed Charge Rate must be a number'
          : '';

      case 'DisposalChargePercentage':
        if (this.form.controls.DisposalChargePercentage.hasError('required')) {
          return 'Disposal Charge Percentage can not be empty, it is a required field';
        }
        return this.form.controls.DisposalChargePercentage.hasError('pattern')
          ? 'Invalid Disposal Charge Percentage value: Disposal Charge Percentage must be a number'
          : '';

      case 'DisposalChargeRate':
        if (this.form.controls.DisposalChargeRate.hasError('required')) {
          return 'Disposal Charge Rate can not be empty, it is a required field';
        }
        return this.form.controls.DisposalChargeRate.hasError('pattern')
          ? 'Invalid Disposal Charge Rate value: Disposal Charge Rate must be a number'
          : '';

      case 'SewageFixedChargeRate':
        if (this.form.controls.SewageFixedChargeRate.hasError('required')) {
          return 'Sewage Fixed Charge Rate can not be empty, it is a required field';
        }
        return this.form.controls.SewageFixedChargeRate.hasError('pattern')
          ? 'Invalid Sewage Fixed Charge Rate value: Sewage Fixed Charge Rate must be a number'
          : '';
    }
  }
}
