import { UpTenantID } from './UpTenantID';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GenstatementMdl } from './Models/GenStatementMdl';
import { UpProofPayment } from './UpProofPayment';
import { UpRentalAgreement } from './UpRentalAgreement';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  // private profiles: Profile[] = [];
  // private profiles$ = new Subject<Profile[]>();
  // readonly apiURL = "https://localhost:44399/api/Tenant/UploadProofOfPayment";

  constructor(private http: HttpClient, private router: Router) {  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////Tenant//////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // UploadProofOfPayment(data) {
  //   const optiions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  //   return this.http.post(environment.apiURL + 'Tenant/UploadProofOfPayment', data, optiions)
  // }

  // UploadProofOfPayment(data, data1, data2) {
  //   var upop = new UpProofPayment();
  //   upop.File = data;
  //   upop.RentalAgreementID = data1;
  //   // upop.PaymentMonth = data2;

  //   const optiions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  //   return this.http.post(environment.apiURL + 'Tenant/UploadProofOfPayment', upop, optiions)
  // }

  //Get Tenants Info
  getTenantI(id){
    const API_URL = environment.apiURL + '/Tenant/GetTenantInfo/' + id;
    return this.http.get(API_URL);
  }

  //Tenant Upload ProofOfPayment
  uploadFile(theFile: UpProofPayment): Observable<any> {
    const API_URL = environment.apiURL + '/Tenant/UploadProofOfPayment';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<UpProofPayment>(API_URL, theFile, httpOptions);
  }

  getFile(id){
    const API_URL = environment.apiURL + '/Tenant/GetFile/' + id;
    return this.http.get(API_URL);
  }

  getRentalAgreementsT(id){
    const API_URL = environment.apiURL + '/Tenant/GetRentalAgreementsT/' + id;
    return this.http.get(API_URL);
  }

  //Tenant Edit Proof of Payment
  editProofOfPayment(theFile, id){
    const API_URL = environment.apiURL + '/Tenant/EditProofOfPayment/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<UpProofPayment>(API_URL, theFile, httpOptions);
  }

  /////JAWIII//////////
  getTenantProfile(id){
    const API_URL = environment.apiURL + '/Tenant/GetTenantProfile/' + id;
    return this.http.get(API_URL);
  }

  
  getSelectedTenantT(data){
    const API_URL = environment.apiURL + '/Tenant/GetSelectedTenantT/' + data;
    return this.http.get(API_URL);
  }
  deleteTenant(data){
    const API_URL = environment.apiURL + '/Tenant/DeleteSelectedTenant/' + data;
    return this.http.get(API_URL);
  }

  EditTenant(data){
    const API_URL = environment.apiURL + '/Tenant/EditTenant';
    const httOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.http.post<any>(API_URL,data, httOptions);
  }

  ////////////////////


  // getStatement(data: GenstatementMdl): Observable<any>{
  //   const API_URL = "https://localhost:44399/api/Tenant/GetStatement";
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   };
  //   // return this.http.post<any>(API_URL, data, httpOptions);
  //   var response = this.http.post<any>(API_URL, data, httpOptions);
  //   console.log(response);
  //   return response;
  // }

  // public upload(formData) {
  //   // console.log(formData);

  //   var serverURL = "https://localhost:44399/api/Tenant/UploadProofOfPayment";
  //   return this.http.post<any>(serverURL, formData, {
  //     reportProgress: true,
  //     observe: 'events'
  //   });
  // }

  // uploadF(formData) {
  //   const endpoint = "https://localhost:44399/api/Tenant/UploadProofOfPayment";
  //   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  //   return this.http.post(endpoint, formData, httpOptions);
  // }

  // addProfile(name: string, image: File): void {
  //   const profileData = new FormData();
  //   profileData.append("name", name);
  //   profileData.append("image", image, name);
  //   this.http
  //     .post<{ profile: Profile }>(this.apiURL, profileData)
  //     .subscribe((profileData) => {
  //       const profile: Profile = {
  //         _id: profileData.profile._id,
  //         name: name,
  //         imagePath: profileData.profile.imagePath,
  //       };
  //       this.profiles.push(profile);
  //       this.profiles$.next(this.profiles);
  //     });
  // }

  //Tenant Populate Generate Statement Dropdowns
  GetListBuildingUnits(tenantID: number) {
    const API_URL =
      environment.apiURL + '/Tenant/GetListBuildingUnits/' + tenantID;
    return this.http.get(API_URL);
  }

  //Start Tenant send statement parameters to generated statement controller
  private sendStatementData = new BehaviorSubject(null);

  public getStatementData(): Observable<GenstatementMdl> {
    return this.sendStatementData.asObservable();
  }

  public updateStatementData(statData: GenstatementMdl): void {
    // console.log(statData);
    this.sendStatementData.next(statData);
    // console.log(this.sendStatementData);
    this.router.navigateByUrl('tenant/successfullygeneratedstatement');
  }
  //End Tenant send statement parameters to generated statement controller

  //Tenant Get data to populate statement
  getStatement(data: GenstatementMdl): Observable<any> {
    const API_URL = environment.apiURL + '/Tenant/GetStatement';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    // return this.http.post<any>(API_URL, data, httpOptions);
    var response = this.http.post<GenstatementMdl>(API_URL, data, httpOptions);
    // console.log(response);
    return response;
  }

  // getStatement(data: GenstatementMdl){
  //   const API_URL = "https://localhost:44399/api/Tenant/GetStatement";
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   };
  //   var re = this.http.post(API_URL, data, httpOptions);
  //   console.log("Response:", re);
  //   return re;
  // }

  getProofsOfPayments(id){
    const API_URL = environment.apiURL + '/Tenant/GetListProofOfPayments/' + id;
    return this.http.get(API_URL);
  }

  deleteProofOfPayment(id){
    const API_URL = environment.apiURL + '/Tenant/DeleteProofOfPayment/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(API_URL, httpOptions);
  }

  getProofOfPayment(id){
    const API_URL = environment.apiURL + '/Tenant/GetProofOfPayment/' + id;
    return this.http.get(API_URL);
  }

  getUnitDateParameters(id){
    const API_URL = environment.apiURL + '/Tenant/GetUnitDateParameters/' + id;
    return this.http.get(API_URL);
  }

  GetAllViewTPayments(){
    
    var utid = sessionStorage['UserTypeID'];    
    if(utid == 2){
      var tenid = sessionStorage['TenantID'];
      console.log(utid);
    }

    return this.http.get(environment.apiURL + '/Tenant/GetAllViewTPayments/' + tenid);
  }

  GetAllViewTCharges(){
    
    var utid = sessionStorage['UserTypeID'];    
    if(utid == 2){
      var tenid = sessionStorage['TenantID'];
      console.log(utid);
    }

    return this.http.get(environment.apiURL + '/Tenant/GetAllViewTCharges/' + tenid);
  }

  // GetTPaymentsList(){
  //   const API_URL = environment.apiURL + '/Tenant/GetTPaymentsList';
  //   return this.http.get(API_URL);
  // }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////Landlord////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //Landlord Populate Generate Statement Dropdowns
  GetListBuildingUnitsLandlord() {
    const API_URL = environment.apiURL + '/Landlord/GetListBuildingUnits';
    return this.http.get(API_URL);
  }

  //Start Landlord send statement parameters to generated statement controller
  private sendStatementDataLandlord = new BehaviorSubject(null);

  public getStatementDataLandlord(): Observable<GenstatementMdl> {
    return this.sendStatementData.asObservable();
  }

  public updateStatementDataLandlord(statData: GenstatementMdl): void {
    this.sendStatementData.next(statData);
    this.router.navigateByUrl('landlord/succesfullygenstatemnt');
  }
  //End Landlord send statement parameters to generated statement controller

  //Landlord Get data to populate statement
  getStatementLandlord(data: GenstatementMdl): Observable<any> {
    const API_URL = environment.apiURL + '/Landlord/GetStatement';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    var response = this.http.post<GenstatementMdl>(API_URL, data, httpOptions);
    console.log(response);
    return response;
  }

  //Landlord GET all payments
  getPayments() {
    const API_URL = environment.apiURL + '/Landlord/GetListPayments';
    return this.http.get(API_URL);
  }

  getPayment(id){
    const API_URL = environment.apiURL + '/Landlord/GetPaymentInfo/' + id;
    return this.http.get(API_URL);
  }

  //Landlord Automatically Raise Payment
  autoRaisePayment() {
    var id = sessionStorage.getItem('LandlordID');
    const API_URL = environment.apiURL + '/Landlord/AutoRaisePayment/'+id;
    return this.http.get(API_URL);
  }

  //Landlord Manually Raise Payment
  manualRaisePayment(data) {
    var id = sessionStorage.getItem('LandlordID');
    const API_URL = environment.apiURL + '/Landlord/ManualRaisePayment/'+id;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<any>(API_URL, data, httpOptions);
    // return this.http.get(API_URL);
  }

  //Landlord GET all payment methods
  getPaymentMethods() {
    const API_URL = environment.apiURL + '/Landlord/GetPaymentMethods';
    return this.http.get(API_URL);
  }

  //Landlord GET all proof of payments
  getProofOfPayments(data) {
    const API_URL =
      environment.apiURL + '/Landlord/GetProofOfPayments/' + data;
    return this.http.get(API_URL);
  }

  capturePayment(data) {
    var id = sessionStorage.getItem('LandlordID');
    const API_URL = environment.apiURL + '/Landlord/CapturePayment/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<any>(API_URL, data, httpOptions);
  }

  getBuildings() {
    const API_URL = environment.apiURL + '/Landlord/GetBuildingsList';
    return this.http.get(API_URL);
  }

  getWaterAndSanitationData(form) {
    const API_URL =
      environment.apiURL + '/Landlord/GetWaterAndSanitationData';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    console.log(form);
    return this.http.post<any>(API_URL, form, httpOptions);
  }

  getElectricityData(form){
    const API_URL = environment.apiURL + '/Landlord/GetElectricityData';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    console.log(form);
    return this.http.post<any>(API_URL, form, httpOptions);
  }

  //Send pdf in base64 format to the api
  sendPDFBase64(data){
    const API_URL = environment.apiURL + '/Landlord/ReceivePDFBase64';
    const httOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.http.post<any>(API_URL,data, httOptions);
  }

  //Search Payments
  getSearchedPayments(data){
    const API_URL = environment.apiURL + '/Landlord/GetSearchedPayments/' + data;
    return this.http.get(API_URL);
  }

  deletePayment(id){
    var idL = sessionStorage.getItem('LandlordID');
    const API_URL = environment.apiURL + '/Landlord/DeletePayment/' + id + "/" + idL;
    return this.http.get(API_URL);
  }

  getBalance(data){
    var API_URL = ""
    if (localStorage.getItem('FromReceipt') == "true") {
      var paymentID = localStorage.getItem('PaymentID');
      API_URL = environment.apiURL + '/Landlord/GetBalance/' + paymentID;
      localStorage.setItem('FromReceipt', "false");
    }
    else{
      API_URL = environment.apiURL + '/Landlord/GetBalance/' + 0;
    }
    
    const httOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.http.post<any>(API_URL,data, httOptions);
  }

  // getLatestVat(){
  //   const API_URL = environment.apiURL + '/VAT/GetLatestVAT';
  //   return this.http.get(API_URL);
  // }
  getLatestVatI(id){
    const API_URL = environment.apiURL + '/VAT/GetLatestVATI/' + id;
    return this.http.get(API_URL);
  }

  getAllMunicipalBills(){
    const API_URL = environment.apiURL + '/APL/GetAllMunicipalBills';
    return this.http.get(API_URL);
  }

  getMunicipalBillDetails(id){
    const API_URL = environment.apiURL + '/APL/GetMunicipalBillDetails/' + id;
    return this.http.get(API_URL);
  }

  /////////////JAWII////////////
  getLandlords(){
    const API_URL = environment.apiURL + '/Landlord/GetAllLandlords';
    return this.http.get(API_URL);
  }
  getSelectedTenantL(data){
    const API_URL = environment.apiURL + '/Landlord/GetSelectedTenantL/' + data;
    return this.http.get(API_URL);
  }

  deleteLandlord(data){
    const API_URL = environment.apiURL + '/Landlord/DeactivateLandlord/' + data;
    return this.http.get(API_URL);
  }

  getRentalAgreementsL(){
    const API_URL = environment.apiURL + '/Landlord/GetRentalAgreementsL';
    return this.http.get(API_URL);
  }
  getTenantIDDocs(){
    const API_URL = environment.apiURL + '/Landlord/GetTenantIDDocs';
    return this.http.get(API_URL);
  }
  getCompanyID(){
    const API_URL = environment.apiURL + '/Landlord/GetCompanyID';
    return this.http.get(API_URL);
  }
  getCIPCDocs(){
    const API_URL = environment.apiURL + '/Landlord/GetCIPCDocs';
    return this.http.get(API_URL);
  }

  getSelectedLandlord(data){
    const API_URL = environment.apiURL + '/Landlord/GetSelectedLandlord/' + data;
    return this.http.get(API_URL);
  }

  getLandlordProfile(id){
    const API_URL = environment.apiURL + '/Landlord/GetLandlordProfile/' + id;
    return this.http.get(API_URL);
  }

  getTenants(){
    const API_URL = environment.apiURL + '/Landlord/GetTenants';
    return this.http.get(API_URL);
  }

  createLandlord(data){
    const API_URL = environment.apiURL + '/Landlord/CreateLandlord';
    const httOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.http.post<any>(API_URL,data, httOptions);
  }


  EditLandlord(data){
    const API_URL = environment.apiURL + '/Landlord/EditLandlord';
    const httOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.http.post<any>(API_URL,data, httOptions);
  }

  GetFileRA(id){
    const API_URL = environment.apiURL + '/Landlord/GetFileRA/' + id;
    return this.http.get(API_URL);
  }

  GetFileTenantID(id){
    const API_URL = environment.apiURL + '/Landlord/GetFileTenantID/' + id;
    return this.http.get(API_URL);
  }

  GetFileCompanyID(id){
    const API_URL = environment.apiURL + '/Landlord/GetFileCompanyID/' + id;
    return this.http.get(API_URL);
  }
  GetFileCompanyCIPC(id){
    const API_URL = environment.apiURL + '/Landlord/GetFileCompanyCIPC/' + id;
    return this.http.get(API_URL);
  }

  

  cancelRentalAgreement(id){
    const API_URL = environment.apiURL + '/Landlord/cancelRentalAgreement/' + id;
    return this.http.get(API_URL);
  }

  getSearchedLandlords(data){
    const API_URL = environment.apiURL + '/Landlord/GetSearchedLandlords/' + data;
    return this.http.get(API_URL);
  }

  getSearchedTenants(data){
    const API_URL = environment.apiURL + '/Landlord/GetSearchedTenants/' + data;
    return this.http.get(API_URL);
  }

  getSearchedAgreements(data){
    const API_URL = environment.apiURL + '/Landlord/GetSearchedAgreements/' + data;
    return this.http.get(API_URL);
  }

  GetListBuildingUnitsL() {
    const API_URL =
      environment.apiURL + '/Landlord/GetListBuildingUnitsL';
    return this.http.get(API_URL);
  }

  GetListBuildingUnitsLCompany() {
    const API_URL =
      environment.apiURL + '/Landlord/GetListBuildingUnitsLCompany';
    return this.http.get(API_URL);
  }

  UploadRADoc(theFile: UpRentalAgreement): Observable<any> {
    const API_URL = environment.apiURL + '/Landlord/UploadRentalAgreementDoc';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<UpRentalAgreement>(API_URL, theFile, httpOptions);
  }

  UploadCompanyIDDoc(theFile: UpRentalAgreement): Observable<any> {
    const API_URL = environment.apiURL + '/Landlord/UploadCompanyIDDoc';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<UpRentalAgreement>(API_URL, theFile, httpOptions);
  }

  UploadCompanyCIPCDoc(theFile: UpRentalAgreement): Observable<any> {
    const API_URL = environment.apiURL + '/Landlord/UploadCompanyCIPCDoc';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<UpRentalAgreement>(API_URL, theFile, httpOptions);
  }

  UploadTenantIDDoc(theFile: UpTenantID): Observable<any> {
    const API_URL = environment.apiURL + '/Landlord/UploadTenantID';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<UpRentalAgreement>(API_URL, theFile, httpOptions);
  }

  GetInvoiceDeets(id){
    const API_URL =
      environment.apiURL + '/Landlord/GetInvoiceDeets/' + id;
    return this.http.get(API_URL);
  }
  
  //////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////Service Provider/////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  getServiceProviders() {
    const API_URL =
      environment.apiURL + '/ServiceProvider/GetAllServiceProviders';
    return this.http.get(API_URL);
  }

  getSearchedServiceProviders(data) {
    const API_URL =
      environment.apiURL + '/ServiceProvider/GetSearchedServiceProviders/' +
      data;
    return this.http.get(API_URL);
  }

  getServiceProvider(data) {
    const API_URL =
      environment.apiURL + '/ServiceProvider/GetSelectedServiceProvider/' +
      data;
    return this.http.get(API_URL);
  }

  getServiceProviderCategories() {
    const API_URL =
      environment.apiURL + '/ServiceProvider/GetAllServiceProviderCategories';
    return this.http.get(API_URL);
  }

  getServiceProviderStatuses() {
    const API_URL =
      environment.apiURL + '/ServiceProvider/GetAllServiceProviderStatuses';
    return this.http.get(API_URL);
  }

  getServiceProviderUserTypes() {
    const API_URL =
      environment.apiURL + '/ServiceProvider/GetAllServiceProviderUserTypes';
    return this.http.get(API_URL);
  }

  createServiceProvider(data) {
    const API_URL =
      environment.apiURL + '/ServiceProvider/CreateServiceProvider';
    const httOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
    };
    return this.http.post<any>(API_URL, data, httOptions);
  }

  editServiceProvider(data) {
    const API_URL =
      environment.apiURL + '/ServiceProvider/EditServiceProvider';
    const httOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
    };
    return this.http.post<any>(API_URL, data, httOptions);
  }

  deleteServiceProvider(data) {
    const API_URL =
      environment.apiURL + '/ServiceProvider/DeleteSelectedServiceProvider/' +
      data;
    return this.http.get(API_URL);
  }

  getAllCharges() {
    const API_URL = environment.apiURL + '/ServiceProvider/GetAllCharges';
    return this.http.get(API_URL);
  }

  getCharge(data) {
    const API_URL =
    environment.apiURL + '/Landlord/GetCharge/' + data;
    return this.http.get(API_URL);
  }

  /**
   * Inpection
   */
  getInspectionTypes(unitId) {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    });
    const API_URL = environment.apiURL + '/Inspection/GetInspectionTypes/' + unitId;
    return this.http.get(API_URL, { headers: headers });
  }

  validateBookingTime(data) {
    const API_URL = environment.apiURL + '/Inspection/ValidateBookingTime';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<any>(API_URL, data, httpOptions);
  }

  getTenant(unitId) {
    const API_URL =
      environment.apiURL + '/Inspection/GetTenant/' + unitId;
    return this.http.get(API_URL);
  } //Landlord Manually Raise Payment

  saveInspection(data) {
    const API_URL = environment.apiURL + '/Inspection/SaveInspection';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<any>(API_URL, data, httpOptions);
  }

  deleteInspection(id) {
    const API_URL = environment.apiURL + '/Inspection/DeleteInspection/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<any>(API_URL, null, httpOptions);
  }

  getInspections(landlordId) {
    const API_URL = environment.apiURL + '/Inspection/GetInspections/' + landlordId;
    return this.http.get(API_URL);
  }

  getInspection(id) {
    const API_URL = environment.apiURL + '/Inspection/GetInspection/' + id;
    return this.http.get(API_URL);
  }

  getInspectionDetail(id) {
    const API_URL = environment.apiURL + '/Inspection/GetInspectionDetail/' + id;
    return this.http.get(API_URL);
  }

  GetAllInspectionWithDetail(id) {
    const API_URL = environment.apiURL + '/Inspection/GetAllInspectionWithDetail/' + id;
    return this.http.get(API_URL);
  }

  completeInspection(data, inspectionID, comment) {
    const API_URL = `${environment.apiURL}/Inspection/CompleteInspection/${inspectionID}/${comment}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<any>(API_URL, data, httpOptions);
  }

  deleteInspectionItem(id) {
    const API_URL = environment.apiURL + '/Inspection/DeleteInspectionItem/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<any>(API_URL, null, httpOptions);
  }

  getInspectionItems(inspectionId, inspectionTypeId) {
    const API_URL = environment.apiURL + `/Inspection/GetInspectionItems/${inspectionId}/${inspectionTypeId}`;
    return this.http.get(API_URL);
  }

  getInspectionReportData(data) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.post(`${environment.apiURL}/Inspection/GetInspectionReportData`, data, httpOptions)
  }

  ////////////////////////////////////////////////////////////////////////Logout////////////////////////////////////////////////////////////////////////
  logout(){
    var utid = sessionStorage['UserTypeID'];
    console.log(utid);
    
    if(utid == 1){
      var id = sessionStorage['LandlordID'];
      console.log(utid);
    }
    else if(utid == 4){
      var id = sessionStorage['AdminID'];
      console.log(utid);
    }

    const API_URL = environment.apiURL + '/Access/Logout/' + utid + "/" + id;
    return this.http.get(API_URL);
  }
  
  ////////////////////////////////////////////////////////////////////////Change Password////////////////////////////////////////////////////////////////////////
  ChangePassword(oldPassword, newPassword){
    var utid = sessionStorage['UserTypeID'];
    var email = "";
    if(utid == 1){
      email = sessionStorage['EmailAddress']
    }
    else if(utid == 2){
      email = sessionStorage['EmailAddress']
    }
    else if(utid == 4){
      email = sessionStorage['EmailAddress']
    }

    let data = {
      "Email": email,
      "OldPassword": oldPassword,
      "NewPassword": newPassword
    }

    const API_URL = environment.apiURL + '/Access/ChangePassword/' + utid;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(API_URL, data, httpOptions);
  }
}

