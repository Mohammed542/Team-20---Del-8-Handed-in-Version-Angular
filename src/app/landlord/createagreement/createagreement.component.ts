import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  TemplateRef
} from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
  AbstractControl
} from '@angular/forms';
import { Buildings } from './buildings.model';
import { CreateagreementService } from './createagreement.service';
import { Units } from './units.model';
import html2pdf from 'html2pdf.js';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createagreement',
  templateUrl: './createagreement.component.html',
  styleUrls: ['./createagreement.component.scss']
})
export class CreateagreementComponent implements OnInit {
  @ViewChild('saveSuccessModal') saveSuccessModal: TemplateRef<any>;
  CellPhoneNumberPattern = '^(\\d{10})$';
  EmailAddressPattern = '^(\\S+@\\S+\\.\\S+)$';
  IDNumberPattern =
    '^([0-9][0-9])(([0][1-9])|([1][0-2]))(([0-2][0-9])|([3][0-1]))([0-9])([0-9]{3})([0-9])([0-9])([0-9])$';
  DepositAmountPattern = '^(\\d+)$';

  residentialTentantInfo = new FormGroup({
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
  });
  buildingList: Buildings[];
  unitList: Units[];
  selectedUnit: string = '';
  selectedUnitID: number;
  selectedBuilding: Buildings;
  bdata: any;
  rentalAmount;

  showCommercial: boolean = false;
  showResidential: boolean = false;

  clicked: boolean = false;

  constructor(
    public service: CreateagreementService,
    private httpService: HttpClient,
    private modalService: NgbModal,
    private matSnackBar: MatSnackBar,
    private router: Router
  ) {}

  get BuildingID(): AbstractControl {
    return this.residentialTentantInfo.get('BuildingID');
  }

  get UnitID(): AbstractControl {
    return this.residentialTentantInfo.get('UnitID');
  }

  get FirstName(): AbstractControl {
    return this.residentialTentantInfo.get('FirstName');
  }

  get Surname(): AbstractControl {
    return this.residentialTentantInfo.get('Surname');
  }

  get CellPhoneNumber(): AbstractControl {
    return this.residentialTentantInfo.get('CellPhoneNumber');
  }

  get EmailAddress(): AbstractControl {
    return this.residentialTentantInfo.get('EmailAddress');
  }

  get IDNumber(): AbstractControl {
    return this.residentialTentantInfo.get('IDNumber');
  }

  get StartDate(): AbstractControl {
    return this.residentialTentantInfo.get('StartDate');
  }

  get EndDate(): AbstractControl {
    return this.residentialTentantInfo.get('EndDate');
  }

  get DepositAmount(): AbstractControl {
    return this.residentialTentantInfo.get('DepositAmount');
  }

  getMinStartDate() {
    let todaysDate = new Date();
    return {
      year: todaysDate.getFullYear(),
      month: todaysDate.getMonth() + 1,
      day: todaysDate.getDate()
    };
  }

  ngOnInit(): void {
    this.service
      .getBuildingList()
      .then(res => (this.buildingList = res as Buildings[]));
  }

  saveRentalAgreement() {
    this.clicked = true;
    this.service
      .saveResidentialMaintenanceAgreement(this.residentialTentantInfo.value)
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

  setType(event) {
    if (event == 'Residential') {
      this.showResidential = true;
      this.showCommercial = false;
    } else if (event == 'Commercial') {
      this.showCommercial = true;
      this.showResidential = false;
    }
  }

  getRentalAmount() {
    this.httpService
      .get(
        environment.apiURL + '/Tenants/getRentalAmount/' +
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
      console.log(result);
      
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

  public viewAgreement() {
    var element = document.getElementById('pdfRentalAgreementResidential')
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
