import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TenantComponent } from './tenant/tenant.component';
import { TenantHomeComponent } from './tenant/tenant-home/tenant-home.component';
import { LandlordComponent } from './landlord/landlord.component';
import { LandlordHomeComponent } from './landlord/landlord-home/landlord-home.component';
import { PaymentsComponent } from './landlord/payments/payments.component';
import { ProofofpaymentComponent } from './tenant/proofofpayment/proofofpayment.component';
import { ConfirmuploadproofComponent } from './tenant/proofofpayment/confirmuploadproof/confirmuploadproof.component';
import { SuccessfuluploadproofComponent } from './tenant/proofofpayment/successfuluploadproof/successfuluploadproof.component';
import { ViewstatementComponent } from './tenant/viewstatement/viewstatement.component';
import { ReportfaultComponent } from './tenant/reportfault/reportfault.component';
import { ViewfaultComponent } from './landlord/viewfault/viewfault.component';
import { ViewrentalagreementComponent } from './tenant/viewrentalagreement/viewrentalagreement.component';
import { UploadrentalagreementComponent } from './tenant/uploadrentalagreement/uploadrentalagreement.component';
import { BookinspectionComponent } from './tenant/bookinspection/bookinspection.component';
import { ViewinspectionComponent } from './tenant/viewinspection/viewinspection.component';
import { BuildingComponent } from './landlord/building/building.component';
import { ServiceprovidersComponent } from './landlord/serviceproviders/serviceproviders.component';
import { AssignfaultComponent } from './landlord/assignfault/assignfault.component';
import { ViewmaintenanceComponent } from './landlord/viewmaintenance/viewmaintenance.component';
import { AssignmaintenanceComponent } from './landlord/assignmaintenance/assignmaintenance.component';
import { InspectioncalendarComponent } from './landlord/inspectioncalendar/inspectioncalendar.component';
import { StatementsComponent } from './landlord/statements/statements.component';
import { InvoiceComponent } from './landlord/invoice/invoice.component';
import { PaymentnotificationComponent } from './landlord/paymentnotification/paymentnotification.component';
import { RentalamountComponent } from './landlord/rentalamount/rentalamount.component';
import { ReportIncomeComponent } from './landlord/report-income/report-income.component';
import { ReportInspectionComponent } from './landlord/report-inspection/report-inspection.component';
import { ReportOverdueComponent } from './landlord/report-overdue/report-overdue.component';
import { ReportWaterComponent } from './landlord/report-water/report-water.component';
import { ReportElectricityComponent } from './landlord/report-electricity/report-electricity.component';
import { RaCreateComponent } from './landlord/ra-create/ra-create.component';
import { RaViewComponent } from './landlord/ra-view/ra-view.component';
import { DatabaseBackupComponent } from './landlord/database-backup/database-backup.component';
import { DatabaseRestoreComponent } from './landlord/database-restore/database-restore.component';
import { AccessComponent } from './access/access.component';
import { LoginComponent } from './access/login/login.component';
import { ResetPasswordComponent } from './access/reset-password/reset-password.component';

import { MatTableModule } from '@angular/material/table';

import { ResetComponent } from './access/reset/reset.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { AddBuiidingComponent } from './buildings/add-buiiding/add-buiiding.component';
import { UpdateBuiidingComponent } from './buildings/update-buiiding/update-buiiding.component';
import { UnitsComponent } from './units/units.component';
import { AddUnitsComponent } from './units/add-units/add-units.component';
import { UpdateUnitsComponent } from './units/update-units/update-units.component';
import { MunicipalBillComponent } from './buildings/municipal-bill/municipal-bill.component';
import { WaterAndElectricityComponent } from './units/water-and-electricity/water-and-electricity.component';
import { VatComponent } from './vat/vat.component';
import { CreateVatComponent } from './vat/create-vat/create-vat.component';
import { UpdateVatComponent } from './vat/update-vat/update-vat.component';
import { BuildingDeletionComponent } from './buildings/building-deletion/building-deletion.component';
import { UnitDeletionComponent } from './units/unit-deletion/unit-deletion.component';
import { VatDeletionComponent } from './vat/vat-deletion/vat-deletion.component';
import { MatDialogRef } from '@angular/material/dialog';
import { MunicipallBill2Component } from './buildings/municipall-bill2/municipall-bill2.component';
import { CaptureWaterAndElectrcityComponent } from './units/capture-water-and-electrcity/capture-water-and-electrcity.component';
import { CreateservprovComponent } from './landlord/serviceproviders/createservprov/createservprov.component';
import { EditservprovComponent } from './landlord/serviceproviders/editservprov/editservprov.component';
import { ConfcreatespComponent } from './landlord/serviceproviders/createservprov/confcreatesp/confcreatesp.component';
import { SucscreatespComponent } from './landlord/serviceproviders/createservprov/sucscreatesp/sucscreatesp.component';
import { ConfeditservpComponent } from './landlord/serviceproviders/editservprov/confeditservp/confeditservp.component';
import { SucseditservpComponent } from './landlord/serviceproviders/editservprov/sucseditservp/sucseditservp.component';
import { SucsdltservpComponent } from './landlord/serviceproviders/sucsdltservp/sucsdltservp.component';
import { ConfdltservpComponent } from './landlord/serviceproviders/confdltservp/confdltservp.component';
import { GeninvoiceComponent } from './landlord/invoice/geninvoice/geninvoice.component';
import { ViewLandlordComponent } from './landlord/view-landlord/view-landlord.component';
import { ViewTenantComponent } from './landlord/view-tenant/view-tenant.component';
import { ViewProfileComponent } from './landlord/view-profile/view-profile.component';
import { RaUploadComponent } from './landlord/ra-upload/ra-upload.component';
import { UploadRentalAgreementComponent } from './landlord/upload-rental-agreement/upload-rental-agreement.component';
import { ViewAccountComponent } from './tenant/view-account/view-account.component';
import { EditAccountComponent } from './tenant/edit-account/edit-account.component';
import { EditProfileComponent } from './landlord/edit-profile/edit-profile.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { ConfirmstatementsendComponent } from './landlord/statements/confirmstatementsend/confirmstatementsend.component';
import { SuccesfullygenstatemntComponent } from './landlord/statements/succesfullygenstatemnt/succesfullygenstatemnt.component';
import { SuccesfullysentstatemntComponent } from './landlord/statements/succesfullysentstatemnt/succesfullysentstatemnt.component';
import { RaisepaymentComponent } from './landlord/payments/raisepayment/raisepayment.component';
import { AutochargeComponent } from './landlord/payments/raisepayment/autocharge/autocharge.component';
import { SuccessautochargeComponent } from './landlord/payments/raisepayment/successautocharge/successautocharge.component';
import { ManualchargeComponent } from './landlord/payments/raisepayment/manualcharge/manualcharge.component';
import { ConfmanualchargeComponent } from './landlord/payments/raisepayment/confmanualcharge/confmanualcharge.component';
import { SucsfulmanualchargeComponent } from './landlord/payments/raisepayment/sucsfulmanualcharge/sucsfulmanualcharge.component';
import { CapturepaymentComponent } from './landlord/payments/capturepayment/capturepayment.component';
import { ConfcapturepaymentComponent } from './landlord/payments/capturepayment/confcapturepayment/confcapturepayment.component';
import { SucsfulcapturepaymentComponent } from './landlord/payments/capturepayment/sucsfulcapturepayment/sucsfulcapturepayment.component';
import { GenpayreceiptComponent } from './landlord/payments/genpayreceipt/genpayreceipt.component';
import { ConfgenreceiptComponent } from './landlord/payments/genpayreceipt/confgenreceipt/confgenreceipt.component';
import { SuccgenreceiptComponent } from './landlord/payments/genpayreceipt/succgenreceipt/succgenreceipt.component';
import { ConfdeletepaymentComponent } from './landlord/payments/confdeletepayment/confdeletepayment.component';
import { SucsdeletepaymentComponent } from './landlord/payments/sucsdeletepayment/sucsdeletepayment.component';
import { AddrentamtComponent } from './landlord/rentalamount/addrentamt/addrentamt.component';
import { ConfaddrentamtComponent } from './landlord/rentalamount/addrentamt/confaddrentamt/confaddrentamt.component';
import { SuccaddrentamtComponent } from './landlord/rentalamount/addrentamt/succaddrentamt/succaddrentamt.component';
import { EditrentamtComponent } from './landlord/rentalamount/editrentamt/editrentamt.component';
import { ConfdltrentamtComponent } from './landlord/rentalamount/confdltrentamt/confdltrentamt.component';
import { SuccdltrentamtComponent } from './landlord/rentalamount/succdltrentamt/succdltrentamt.component';
import { ConfeditrentamtComponent } from './landlord/rentalamount/editrentamt/confeditrentamt/confeditrentamt.component';
import { SucceditrentamtComponent } from './landlord/rentalamount/editrentamt/succeditrentamt/succeditrentamt.component';
import { GenstatementComponent } from './tenant/genstatement/genstatement.component';
import { SuccgenstatementComponent } from './tenant/genstatement/succgenstatement/succgenstatement.component';
import { PaymentreceiptComponent } from './landlord/payments/genpayreceipt/paymentreceipt/paymentreceipt.component';
import { ReadsavedpopComponent } from './tenant/proofofpayment/readsavedpop/readsavedpop.component';
import { ViewpopComponent } from './tenant/proofofpayment/readsavedpop/viewpop/viewpop.component';
import { DeletepopComponent } from './tenant/proofofpayment/readsavedpop/deletepop/deletepop.component';
import { SsfuldeletepopComponent } from './tenant/proofofpayment/readsavedpop/ssfuldeletepop/ssfuldeletepop.component';
import { EditpopComponent } from './tenant/proofofpayment/readsavedpop/editpop/editpop.component';
import { ConfeditpopComponent } from './tenant/proofofpayment/readsavedpop/editpop/confeditpop/confeditpop.component';
import { SsfleditpopComponent } from './tenant/proofofpayment/readsavedpop/editpop/ssfleditpop/ssfleditpop.component';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { AddInspectionComponent } from './landlord/inspectioncalendar/add-inspection/add-inspection.component';
import { UpdateInspectionComponent } from './landlord/inspectioncalendar/update-inspection/update-inspection.component';
import { DatePipe } from '@angular/common';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { CompleteInspectionComponent } from './landlord/inspectioncalendar/complete-inspection/complete-inspection.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LandlordAuthGuard } from './guards/landlord-auth-guard';
import { ReportInspectionsComponent } from './landlord/inspectioncalendar/report-inspections/report-inspections.component';
import { MatSortModule } from '@angular/material/sort';
import { ViewInspectionsComponent } from './landlord/inspectioncalendar/view-inspections/view-inspections.component';
import { ViewInspectionItemsComponent } from './landlord/inspectioncalendar/view-inspection-items/view-inspection-items.component';
import { EditfaultComponent } from './landlord/editfault/editfault.component';
import { EscalatefaultComponent } from './landlord/escalatefault/escalatefault.component';
import { CreateagreementComponent } from './landlord/createagreement/createagreement.component';
import { SearchmaintenanceComponent } from './landlord/searchmaintenance/searchmaintenance.component';
import { EditmaintenanceComponent } from './landlord/editmaintenance/editmaintenance.component';
import { ViewfaulttenantComponent } from './tenant/viewfaulttenant/viewfaulttenant.component';
import { SearchfaultComponent } from './landlord/searchfault/searchfault.component';
import { HtmldocComponent } from './landlord/createagreement/htmldoc/htmldoc.component';
import { AgreementsComponent } from './landlord/createagreement/agreements/agreements.component';
import { CreatetypeComponent } from './tenant/reportfault/createtype/createtype.component';

import { NgbModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { CommercialagreementComponent } from './landlord/createagreement/commercialagreement/commercialagreement.component';
import { ReportMaintenanceComponent } from './landlord/report-maintenance/report-maintenance.component';
import { HelpPageComponent } from './landlord/help-page/help-page.component';
import { CreateLandlordComponent } from './landlord/view-landlord/create-landlord/create-landlord.component';
import { ConfcreatelandlordComponent } from './landlord/view-landlord/create-landlord/confcreatelandlord/confcreatelandlord.component';
import { SucscreatelandlordComponent } from './landlord/view-landlord/create-landlord/sucscreatelandlord/sucscreatelandlord.component';
import { ViewSelectedLandlordProfileComponent } from './landlord/view-landlord/view-selected-landlord-profile/view-selected-landlord-profile.component';
import { ViewSelectedTenantProfileComponent } from './landlord/view-tenant/view-selected-tenant-profile/view-selected-tenant-profile.component';
import { ConfdlttenantComponent } from './landlord/view-tenant/confdlttenant/confdlttenant.component';
import { SucsdlttenantComponent } from './landlord/view-tenant/sucsdlttenant/sucsdlttenant.component';
import { EditLandlordComponent } from './landlord/view-profile/edit-landlord/edit-landlord.component';
import { ConfEditLandlordComponent } from './landlord/view-profile/edit-landlord/conf-edit-landlord/conf-edit-landlord.component';
import { SucsEditLandlordComponent } from './landlord/view-profile/edit-landlord/sucs-edit-landlord/sucs-edit-landlord.component';
import { EditTenantComponent } from './tenant/view-account/edit-tenant/edit-tenant.component';
import { ConfEditTenantComponent } from './tenant/view-account/edit-tenant/conf-edit-tenant/conf-edit-tenant.component';
import { SucsEditTenantComponent } from './tenant/view-account/edit-tenant/sucs-edit-tenant/sucs-edit-tenant.component';
import { TenantAuthGuard } from './guards/tenant-auth-guard';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ConfdltlandlordComponent } from './landlord/view-profile/confdltlandlord/confdltlandlord.component';
import { SucsdltlandlordComponent } from './landlord/view-profile/sucsdltlandlord/sucsdltlandlord.component';
import { InspectionTypeComponent } from './admin/inspection-type/inspection-type.component';
import { InspectionStatusComponent } from './admin/inspection-status/inspection-status.component';
import { StatusComponent } from './admin/status/status.component';
import { MaintenanceTypeComponent } from './admin/maintenance-type/maintenance-type.component';
import { MaintenanceStatusComponent } from './admin/maintenance-status/maintenance-status.component';
import { ServiceProviderStatusComponent } from './admin/service-provider-status/service-provider-status.component';
import { UnitTypeComponent } from './admin/unit-type/unit-type.component';
import { UserTypeComponent } from './admin/user-type/user-type.component';
import { ServiceProviderCetegoryComponent } from './admin/service-provider-cetegory/service-provider-cetegory.component';
import { RentalAgreementStatusComponent } from './admin/rental-agreement-status/rental-agreement-status.component';
import { UnitStatusComponent } from './admin/unit-status/unit-status.component';
import { AdminAuthGuard } from './guards/admin-auth-guard';
import { SaveInspectionStatusComponent } from './admin/inspection-status/save-inspection-status/save-inspection-status.component';
import { SaveInspectionTypeComponent } from './admin/inspection-type/save-inspection-type/save-inspection-type.component';
import { SaveMaintenanceStatusComponent } from './admin/maintenance-status/save-maintenance-status/save-maintenance-status.component';
import { SaveMaintenanceTypeComponent } from './admin/maintenance-type/save-maintenance-type/save-maintenance-type.component';
import { SaveRentalAgreementStatusComponent } from './admin/rental-agreement-status/save-rental-agreement-status/save-rental-agreement-status.component';
import { SaveServiceProviderCetegoryComponent } from './admin/service-provider-cetegory/save-service-provider-cetegory/save-service-provider-cetegory.component';
import { SaveServiceProviderStatusComponent } from './admin/service-provider-status/save-service-provider-status/save-service-provider-status.component';
import { SaveStatusComponent } from './admin/status/save-status/save-status.component';
import { SaveUnitStatusComponent } from './admin/unit-status/save-unit-status/save-unit-status.component';
import { SaveUnitTypeComponent } from './admin/unit-type/save-unit-type/save-unit-type.component';
import { SaveUserTypeComponent } from './admin/user-type/save-user-type/save-user-type.component';
import { RentalAgreementTypeComponent } from './admin/rental-agreement-type/rental-agreement-type.component';
import { SaveRentalAgreementTypeComponent } from './admin/rental-agreement-type/save-rental-agreement-type/save-rental-agreement-type.component';
import { RADocumentViewerComponent } from './landlord/ra-view/radocument-viewer/radocument-viewer.component';
import { TenantAgreementViewerComponent } from './tenant/viewrentalagreement/tenant-agreement-viewer/tenant-agreement-viewer.component';
import { UploadRAComponent } from './landlord/upload-rental-agreement/upload-ra/upload-ra.component';
import { UploadTenantIDComponent } from './landlord/upload-rental-agreement/upload-tenant-id/upload-tenant-id.component';
import { UploadCIPCComponent } from './landlord/upload-rental-agreement/upload-cipc/upload-cipc.component';
import { UploadCompanyIDComponent } from './landlord/upload-rental-agreement/upload-company-id/upload-company-id.component';
import { CompanyCIPCComponent } from './landlord/ra-view/company-cipc/company-cipc.component';
import { CompanyIDComponent } from './landlord/ra-view/company-id/company-id.component';
import { TenantIDComponent } from './landlord/ra-view/tenant-id/tenant-id.component';
import { RADocumentsComponent } from './landlord/ra-view/radocuments/radocuments.component';
import { RADocumentViewerComponentTID } from './landlord/ra-view/radocument-viewerTID/radocument-viewer.component';
import { RADocumentViewerComponentCID } from './landlord/ra-view/radocument-viewerCID/radocument-viewer.component';
import { RADocumentViewerComponentCIPC } from './landlord/ra-view/radocument-viewerCIPC/radocument-viewer.component';
import { BuildingUnitsComponent } from './buildings/building-units/building-units.component';
import { HelpTenantComponent } from './tenant/help-tenant/help-tenant.component';
import { AuditTrailComponent } from './admin/audit-trail/audit-trail.component';
import { DashboardAuthGuard } from './guards/dashboard-auth-guard';
import { ViewmunicipalbComponent } from './buildings/viewmunicipalb/viewmunicipalb.component';
import { ViewmbilldetailsComponent } from './buildings/viewmunicipalb/viewmbilldetails/viewmbilldetails.component';
import { ViewbuildinginfoComponent } from './buildings/viewbuildinginfo/viewbuildinginfo.component';
import { AddbuildingmodalComponent } from './buildings/addbuildingmodal/addbuildingmodal.component';
import { UpdateunitmodalComponent } from './units/updateunitmodal/updateunitmodal.component';
import { HelpAdminComponent } from './admin/help-admin/help-admin.component';
import { ViewunitinfoComponent } from './units/viewunitinfo/viewunitinfo.component';
import { ChangepasswordComponent } from './access/changepassword/changepassword.component';
import { ChartsModule } from 'ng2-charts';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ViewtpaymentsComponent } from './tenant/viewtpayments/viewtpayments.component';
import { AboutComponent } from './about/about.component';

FullCalendarModule.registerPlugins([dayGridPlugin, interactionPlugin]);
@NgModule({
  declarations: [
    AppComponent,
    AccessComponent,
    LoginComponent,
    ResetPasswordComponent,
    ResetComponent,
    BuildingsComponent,
    AddBuiidingComponent,
    UpdateBuiidingComponent,
    UnitsComponent,
    AddUnitsComponent,
    UpdateUnitsComponent,
    MunicipalBillComponent,
    WaterAndElectricityComponent,
    VatComponent,
    CreateVatComponent,
    UpdateVatComponent,
    UnitDeletionComponent,
    VatDeletionComponent,
    NavbarComponent,
    TenantComponent,
    TenantHomeComponent,
    LandlordComponent,
    LandlordHomeComponent,
    PaymentsComponent,
    ProofofpaymentComponent,
    ConfirmuploadproofComponent,
    SuccessfuluploadproofComponent,
    ViewstatementComponent,
    ReportfaultComponent,
    ViewfaultComponent,
    ViewrentalagreementComponent,
    UploadrentalagreementComponent,
    BookinspectionComponent,
    ViewinspectionComponent,
    BuildingComponent,
    UnitsComponent,
    ServiceprovidersComponent,
    AssignfaultComponent,
    ViewmaintenanceComponent,
    AssignmaintenanceComponent,
    InspectioncalendarComponent,
    StatementsComponent,
    InvoiceComponent,
    PaymentnotificationComponent,
    RentalamountComponent,
    ReportIncomeComponent,
    ReportInspectionComponent,
    ReportOverdueComponent,
    ReportWaterComponent,
    ReportElectricityComponent,
    RaCreateComponent,
    RaViewComponent,
    VatComponent,
    DatabaseBackupComponent,
    DatabaseRestoreComponent,
    EditfaultComponent,
    EscalatefaultComponent,
    CreateagreementComponent,
    CommercialagreementComponent,
    SearchmaintenanceComponent,
    EditmaintenanceComponent,
    ViewfaulttenantComponent,
    SearchfaultComponent,
    HtmldocComponent,
    AgreementsComponent,
    CreatetypeComponent,
    ReportMaintenanceComponent,
    MunicipallBill2Component,
    CaptureWaterAndElectrcityComponent,
    CreateservprovComponent,
    EditservprovComponent,
    ConfcreatespComponent,
    SucscreatespComponent,
    ConfeditservpComponent,
    SucseditservpComponent,
    SucsdltservpComponent,
    ConfdltservpComponent,
    GeninvoiceComponent,
    ConfirmstatementsendComponent,
    SuccesfullygenstatemntComponent,
    SuccesfullysentstatemntComponent,
    RaisepaymentComponent,
    AutochargeComponent,
    SuccessautochargeComponent,
    ManualchargeComponent,
    ConfmanualchargeComponent,
    SucsfulmanualchargeComponent,
    CapturepaymentComponent,
    ConfcapturepaymentComponent,
    SucsfulcapturepaymentComponent,
    GenpayreceiptComponent,
    ConfgenreceiptComponent,
    SuccgenreceiptComponent,
    ConfdeletepaymentComponent,
    SucsdeletepaymentComponent,
    AddrentamtComponent,
    ConfaddrentamtComponent,
    SuccaddrentamtComponent,
    EditrentamtComponent,
    ConfdltrentamtComponent,
    SuccdltrentamtComponent,
    ConfeditrentamtComponent,
    SucceditrentamtComponent,
    GenstatementComponent,
    SuccgenstatementComponent,
    PaymentreceiptComponent,
    ReadsavedpopComponent,
    ViewLandlordComponent,
    ViewTenantComponent,
    ViewProfileComponent,
    RaUploadComponent,
    UploadRentalAgreementComponent,
    ViewAccountComponent,
    EditAccountComponent,
    EditProfileComponent,
    ViewpopComponent,
    DeletepopComponent,
    SsfuldeletepopComponent,
    EditpopComponent,
    ConfeditpopComponent,
    SsfleditpopComponent,
    AddInspectionComponent,
    UpdateInspectionComponent,
    ConfirmationDialogComponent,
    CompleteInspectionComponent,
    ReportInspectionsComponent,
    ViewInspectionsComponent,
    ViewInspectionItemsComponent,
    HelpPageComponent,
    CreateLandlordComponent,
    ConfcreatelandlordComponent,
    SucscreatelandlordComponent,
    ViewSelectedLandlordProfileComponent,
    ViewSelectedTenantProfileComponent,
    ConfdlttenantComponent,
    SucsdlttenantComponent,
    EditLandlordComponent,
    ConfEditLandlordComponent,
    SucsEditLandlordComponent,
    EditTenantComponent,
    ConfEditTenantComponent,
    SucsEditTenantComponent,
    ConfdltlandlordComponent,
    SucsdltlandlordComponent,
    InspectionTypeComponent,
    InspectionStatusComponent,
    StatusComponent,
    MaintenanceTypeComponent,
    MaintenanceStatusComponent,
    ServiceProviderStatusComponent,
    UnitTypeComponent,
    UserTypeComponent,
    ServiceProviderCetegoryComponent,
    RentalAgreementStatusComponent,
    UnitStatusComponent,
    SaveInspectionStatusComponent,
    SaveInspectionTypeComponent,
    SaveMaintenanceStatusComponent,
    SaveMaintenanceTypeComponent,
    SaveRentalAgreementStatusComponent,
    SaveServiceProviderCetegoryComponent,
    SaveServiceProviderStatusComponent,
    SaveStatusComponent,
    SaveUnitStatusComponent,
    SaveUnitTypeComponent,
    SaveUserTypeComponent,
    RentalAgreementTypeComponent,
    SaveRentalAgreementTypeComponent,
    RADocumentViewerComponent,
    RADocumentViewerComponentTID,
    RADocumentViewerComponentCID,
    RADocumentViewerComponentCIPC,
    TenantAgreementViewerComponent,
    UploadRAComponent,
    UploadTenantIDComponent,
    UploadCIPCComponent,
    UploadCompanyIDComponent,
    CompanyCIPCComponent,
    CompanyIDComponent,
    TenantIDComponent,
    RADocumentsComponent,
    BuildingUnitsComponent,
    HelpTenantComponent,
    AuditTrailComponent,
    ViewmunicipalbComponent,
    ViewmbilldetailsComponent,
    ViewbuildinginfoComponent,
    AddbuildingmodalComponent,
    UpdateunitmodalComponent,
    HelpAdminComponent,
    ViewunitinfoComponent,
    ChangepasswordComponent,
    ViewtpaymentsComponent,
    AboutComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatSortModule,
    FullCalendarModule,
    MatPaginatorModule,
    NgbModule,
    NgbDatepickerModule,
    ChartsModule,
    MatTooltipModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {},
    },
    BuildingDeletionComponent,
    UnitDeletionComponent,
    VatDeletionComponent,
    DatePipe,
    LandlordAuthGuard,
    TenantAuthGuard,
    AdminAuthGuard,
    DashboardAuthGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
