import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Buildings } from '../buildings.model';
import { Units } from '../units.model';
import { CreateagreementService } from '../createagreement.service';
import { HttpClient } from '@angular/common/http';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl
} from '@angular/forms';
import html2pdf from 'html2pdf.js';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commercialagreement',
  templateUrl: './commercialagreement.component.html',
  styleUrls: ['./commercialagreement.component.scss']
})
export class CommercialagreementComponent implements OnInit {
  @ViewChild('saveSuccessModal') saveSuccessModal: TemplateRef<any>;

  CellPhoneNumberPattern = '^(\\d{10})$';
  EmailAddressPattern = '^(\\S+@\\S+\\.\\S+)$';
  IDNumberPattern =
    '^([0-9][0-9])(([0][1-9])|([1][0-2]))(([0-2][0-9])|([3][0-1]))([0-9])([0-9]{3})([0-9])([0-9])([0-9])$';
  DepositAmountPattern = '^(\\d+)$';

  commercialAgreementForm = new FormGroup({
    BuildingID: new FormControl('', [Validators.required]),
    UnitID: new FormControl('', [Validators.required]),
    FirstName: new FormControl('', [Validators.required]),
    Surname: new FormControl('', [Validators.required]),
    CellPhoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(this.CellPhoneNumberPattern)
    ]),
    EmailAddress: new FormControl('', [
      Validators.required,
      Validators.pattern(this.EmailAddressPattern)
    ]),
    IDNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(this.IDNumberPattern)
    ]),
    StartDate: new FormControl('', [Validators.required]),
    EndDate: new FormControl('', [Validators.required]),
    DepositAmount: new FormControl('', [
      Validators.required,
      Validators.pattern(this.DepositAmountPattern)
    ]),
    CompanyName: new FormControl('', [Validators.required]),
    RegistrationNumber: new FormControl('', [Validators.required]),
    VatNumber: new FormControl('', [Validators.required]),
    TradeActivitiesDescription: new FormControl('', [Validators.required]),
    CompanyTelephoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(this.CellPhoneNumberPattern)
    ])
  });

  buildingList: Buildings[];
  unitList: Units[];
  selectedUnit: string = '';
  selectedUnitID: number;
  selectedBuilding: Buildings;
  bdata: any;
  rentalAmount;

  clicked: boolean = false;

  constructor(
    public service: CreateagreementService,
    private httpService: HttpClient,
    private modalService: NgbModal,
    private matSnackBar: MatSnackBar,
    private router: Router
  ) {}

  get BuildingID(): AbstractControl {
    return this.commercialAgreementForm.get('BuildingID');
  }

  get UnitID(): AbstractControl {
    return this.commercialAgreementForm.get('UnitID');
  }

  get FirstName(): AbstractControl {
    return this.commercialAgreementForm.get('FirstName');
  }

  get Surname(): AbstractControl {
    return this.commercialAgreementForm.get('Surname');
  }

  get CellPhoneNumber(): AbstractControl {
    return this.commercialAgreementForm.get('CellPhoneNumber');
  }

  get EmailAddress(): AbstractControl {
    return this.commercialAgreementForm.get('EmailAddress');
  }

  get IDNumber(): AbstractControl {
    return this.commercialAgreementForm.get('IDNumber');
  }

  get StartDate(): AbstractControl {
    return this.commercialAgreementForm.get('StartDate');
  }

  get EndDate(): AbstractControl {
    return this.commercialAgreementForm.get('EndDate');
  }

  get DepositAmount(): AbstractControl {
    return this.commercialAgreementForm.get('DepositAmount');
  }

  get CompanyName(): AbstractControl {
    return this.commercialAgreementForm.get('CompanyName');
  }

  get RegistrationNumber(): AbstractControl {
    return this.commercialAgreementForm.get('RegistrationNumber');
  }

  get VatNumber(): AbstractControl {
    return this.commercialAgreementForm.get('VatNumber');
  }

  get TradeActivitiesDescription(): AbstractControl {
    return this.commercialAgreementForm.get('TradeActivitiesDescription');
  }

  get CompanyTelephoneNumber(): AbstractControl {
    return this.commercialAgreementForm.get('CompanyTelephoneNumber');
  }

  ngOnInit(): void {
    this.service
      .getBuildingList()
      .then(res => (this.buildingList = res as Buildings[]));
  }

  getMinStartDate() {
    let todaysDate = new Date();
    return {
      year: todaysDate.getFullYear(),
      month: todaysDate.getMonth() + 1,
      day: todaysDate.getDate()
    };
  }

  getRentalAmount() {
    this.httpService
      .get(
        environment.apiURL + '/Units/getRentalAmountWithVAT?UnitId=' +
          this.selectedUnitID
      )
      .subscribe(res => {
        this.rentalAmount = res;
      });
  }

  getUnits(BuildingID) {
    this.buildingList.forEach(building => {
      if (building.BuildingID == BuildingID) {
        this.selectedBuilding = building;
      }
    });
    this.service.getListOfUnits(BuildingID).subscribe((result: any) => {
      // this.unitList = result;
      if(result.Success){
        this.unitList = result.Result;
      }
      else{
        this.matSnackBar.open(result.Message, 'x', {
          duration: 2500,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['red-snackbar']
        });
      }
    });
    this.service.getBuildingDetails(BuildingID).subscribe(res => {
      this.bdata = res;
    });
  }

  getDetails(event: any) {
    console.log(event);
    this.unitList.forEach(element => {
      if (element.UnitID == event) {
        this.selectedUnit = element.UnitNumber;
        this.selectedUnitID = element.UnitID;
        this.getRentalAmount();
      }
    });
  }

  saveRentalAgreement() {
    this.clicked = true;
    this.service
      .saveCommercialMaintenanceAgreement(this.commercialAgreementForm.value)
      .subscribe((x: any) => {
        // this.modalService.open(this.saveSuccessModal);
        if(x.Success){
          this.matSnackBar.open(x.Message, 'x', {
            duration: 2500,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: ['green-snackbar']
          });
          
          this.router.navigateByUrl("landlord/viewRentalAgreement/viewRAdocs");
        }
        else{
          this.matSnackBar.open(x.Message, 'x', {
            duration: 2500,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: ['red-snackbar']
          });
          this.clicked = false;
        }
      });
  }

  public viewAgreement() {
    var element = document.getElementById('pdfRentalCommercialAgreement')
      .innerHTML;
    var opt = {
      margin: 1,
      filename: 'ResidentialAgreement.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf(element, opt);
  }
}
