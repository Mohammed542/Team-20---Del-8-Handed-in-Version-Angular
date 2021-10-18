import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UpRentalAgreement } from 'src/app/UpRentalAgreement';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';

@Component({
  templateUrl: './upload-rental-agreement.component.html',
  styleUrls: ['./upload-rental-agreement.component.scss']
})
export class UploadRentalAgreementComponent implements OnInit {

  allBuildings: any = [];
  building: any;
  unitsList: any[] = [];
  landlordID: any;
  selectUnit: any;
  base64File;
  bloobURL;
  url;
  fileName: string = "";
  fileToUpload: File;

  @ViewChild("fileUpload", { static: false }) fileUpload: ElementRef; files = [];

  @ViewChild('fileInput') myInputVariable: ElementRef;

  form: FormGroup;
  
  constructor(public dialog: MatDialog, private service: MainService, private router: Router, private formBuilder: FormBuilder, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.landlordID = sessionStorage["LandlordID"];

    this.service.GetListBuildingUnitsL().subscribe((data) => {
      this.allBuildings = data;
    });

    this.form = this.formBuilder.group({
      selectedBuilding: ['', Validators.required],
      selectedUnit: ['', Validators.required],
    });

    
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

  getErrorMessage(data) {    
    if (data == "month") {
      if (this.form.controls.selectedMonth.hasError('required')) {
        return 'You must provide a month';
      }
    }
    if (data == "year") {
      if (this.form.controls.selectedYear.hasError('required')) {        
        return 'You must provide a year';
      }
    }
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

    //return this.form.controls.selectedUnit.hasError('email') ? 'Not a valid email' : '';
  }

  onUnitChange(event) {
    this.selectUnit = event.value;
    console.log(this.selectUnit);
  }

  onClick(form) {
    console.log(form);
  }

  onClickRA(){
    this.router.navigate(["landlord/uploadRentalAgreement/uploadRAdoc"]);
  }
  onClickTenantID(){
    this.router.navigate(["landlord/uploadRentalAgreement/uploadTenantID"]);
  }
  onClickCompanyID(){
    this.router.navigate(["landlord/uploadRentalAgreement/uploadCompanyID"]);
  }
  onClickCompanyCIPC(){
    this.router.navigate(["landlord/uploadRentalAgreement/uploadCIPCdoc"]);
  }
  onCancel(){
    this.router.navigate(["landlord/home"]);
  }
  

  MAX_SIZE: number = 1048576;

  theFile: any = null;
  messages: string[] = [];


  onFileChange(event) {
    console.log(event);
    this.url = null;
    this.base64File = null;

    this.theFile = null;
    if (event.target.files && event.target.files.length > 0) {
      // Don't allow file sizes over 1MB
      if (event.target.files[0].size < this.MAX_SIZE) {
        // Set theFile property
        this.theFile = event.target.files[0];
        console.log(this.theFile);
      }
      else {
        // Display error message
        this.messages.push("File: " + event.target.files[0].name + " is too large to upload.");
      }
    }

    if (this.theFile.type == "application/pdf") {
      this.base64File = "1";
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log("readerresult", reader.result);
        this.base64File = reader.result;

        var b64WOD = (this.base64File).slice(28);
        console.log("b64WOD", b64WOD);

        const byteCharacters = atob(b64WOD);

        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);

        const blob = new Blob([byteArray], { type: 'application/pdf' });

        const blobUrl = URL.createObjectURL(blob);

        console.log("blobUrl", blobUrl);

        this.bloobURL = blobUrl;
        document.querySelector("iframe").src = blobUrl;
      };
    }
    else {
      this.matSnackBar.open('Please only upload .pdf file types!', 'x', {
        duration: 2500,
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: ['red-snackbar']
      });
      
    }
  }

  removeFile() {
    this.theFile = null;
    this.base64File = null;
    this.url = null;
    this.myInputVariable.nativeElement.value = '';
  }

  private readAndUploadFile(theFile: any) {
    let file = new UpRentalAgreement();

    // Set File Information
    file.UnitID = this.selectUnit;

    // Use FileReader() object to get file to upload
    // NOTE: FileReader only works with newer browsers
    let reader = new FileReader();

    // Setup onload event for reader
    reader.onload = () => {
      // Store base64 encoded representation of file
      file.fileAsBase64 = reader.result.toString();

      console.log(file);
      console.log(file.fileAsBase64);


      // POST to server
      this.service.UploadRADoc(file).subscribe(resp => {
        this.messages.push("Upload complete");
        //this.openSuccessDialog();
        console.log(resp);
      });
    }

    // Read the file
    reader.readAsDataURL(theFile);
  }

  uploadFile(): void {
    this.readAndUploadFile(this.theFile);
  }

  openConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: 'Confirm',
        message:
          'Are you sure you want to upload this Rental Agreement?',
      },
    })
    .afterClosed()
    .subscribe((response) => {
      if (response) {
        this.uploadFile();
      }
    });

    
  }

}
