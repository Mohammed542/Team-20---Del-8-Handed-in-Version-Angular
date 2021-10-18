import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignfaultComponent } from './landlord/assignfault/assignfault.component';
import { AssignmaintenanceComponent } from './landlord/assignmaintenance/assignmaintenance.component';
import { CreateagreementComponent } from './landlord/createagreement/createagreement.component';
import { EditmaintenanceComponent } from './landlord/editmaintenance/editmaintenance.component';
import { GeninvoiceComponent } from './landlord/invoice/geninvoice/geninvoice.component';
import { InvoiceComponent } from './landlord/invoice/invoice.component';
import { DatabaseBackupComponent } from './landlord/database-backup/database-backup.component';
import { DatabaseRestoreComponent } from './landlord/database-restore/database-restore.component';
import { EditProfileComponent } from './landlord/edit-profile/edit-profile.component';
import { LandlordHomeComponent } from './landlord/landlord-home/landlord-home.component';
import { LandlordComponent } from './landlord/landlord.component';
import { CapturepaymentComponent } from './landlord/payments/capturepayment/capturepayment.component';
import { GenpayreceiptComponent } from './landlord/payments/genpayreceipt/genpayreceipt.component';
import { PaymentreceiptComponent } from './landlord/payments/genpayreceipt/paymentreceipt/paymentreceipt.component';
import { PaymentsComponent } from './landlord/payments/payments.component';
import { SearchmaintenanceComponent } from './landlord/searchmaintenance/searchmaintenance.component';
import { ViewfaultComponent } from './landlord/viewfault/viewfault.component';
import { ViewmaintenanceComponent } from './landlord/viewmaintenance/viewmaintenance.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EditfaultComponent } from './landlord/editfault/editfault.component';
import { EscalatefaultComponent } from './landlord/escalatefault/escalatefault.component';
import { ProofofpaymentComponent } from './tenant/proofofpayment/proofofpayment.component';
import { ReportfaultComponent } from './tenant/reportfault/reportfault.component';
import { TenantHomeComponent } from './tenant/tenant-home/tenant-home.component';
import { TenantComponent } from './tenant/tenant.component';
import { ViewfaulttenantComponent } from './tenant/viewfaulttenant/viewfaulttenant.component';
import { SearchfaultComponent } from './landlord/searchfault/searchfault.component';
import { HtmldocComponent } from './landlord/createagreement/htmldoc/htmldoc.component';
import { AgreementsComponent } from './landlord/createagreement/agreements/agreements.component';
import { CommercialagreementComponent } from './landlord/createagreement/commercialagreement/commercialagreement.component';
import { ReportMaintenanceComponent } from './landlord/report-maintenance/report-maintenance.component';

import { CreateservprovComponent } from './landlord/serviceproviders/createservprov/createservprov.component';
import { EditservprovComponent } from './landlord/serviceproviders/editservprov/editservprov.component';
import { ServiceprovidersComponent } from './landlord/serviceproviders/serviceproviders.component';
import { ManualchargeComponent } from './landlord/payments/raisepayment/manualcharge/manualcharge.component';
import { RaisepaymentComponent } from './landlord/payments/raisepayment/raisepayment.component';
import { AddrentamtComponent } from './landlord/rentalamount/addrentamt/addrentamt.component';
import { EditrentamtComponent } from './landlord/rentalamount/editrentamt/editrentamt.component';
import { RentalamountComponent } from './landlord/rentalamount/rentalamount.component';
import { ReportElectricityComponent } from './landlord/report-electricity/report-electricity.component';
import { ReportWaterComponent } from './landlord/report-water/report-water.component';
import { StatementsComponent } from './landlord/statements/statements.component';
import { SuccesfullygenstatemntComponent } from './landlord/statements/succesfullygenstatemnt/succesfullygenstatemnt.component';
import { GenstatementComponent } from './tenant/genstatement/genstatement.component';
import { SuccgenstatementComponent } from './tenant/genstatement/succgenstatement/succgenstatement.component';
import { RaUploadComponent } from './landlord/ra-upload/ra-upload.component';
import { RaViewComponent } from './landlord/ra-view/ra-view.component';
import { ReportIncomeComponent } from './landlord/report-income/report-income.component';
import { ReportOverdueComponent } from './landlord/report-overdue/report-overdue.component';
import { UploadRentalAgreementComponent } from './landlord/upload-rental-agreement/upload-rental-agreement.component';
import { ViewLandlordComponent } from './landlord/view-landlord/view-landlord.component';
import { ViewProfileComponent } from './landlord/view-profile/view-profile.component';
import { ViewTenantComponent } from './landlord/view-tenant/view-tenant.component';
import { EditAccountComponent } from './tenant/edit-account/edit-account.component';
import { ReadsavedpopComponent } from './tenant/proofofpayment/readsavedpop/readsavedpop.component';
import { ViewAccountComponent } from './tenant/view-account/view-account.component';
import { ViewrentalagreementComponent } from './tenant/viewrentalagreement/viewrentalagreement.component';
import { InspectioncalendarComponent } from './landlord/inspectioncalendar/inspectioncalendar.component';

//Access
import { LoginComponent } from './access/login/login.component';
import { ResetPasswordComponent } from './access/reset-password/reset-password.component';
import { ResetComponent } from './access/reset/reset.component';

//VAT
import { VatComponent } from './vat/vat.component';
import { CreateVatComponent } from './vat/create-vat/create-vat.component';
import { UpdateVatComponent } from './vat/update-vat/update-vat.component';

//UNITS
import { WaterAndElectricityComponent } from './units/water-and-electricity/water-and-electricity.component';
import { UnitsComponent } from './units/units.component';
import { AddUnitsComponent } from './units/add-units/add-units.component';
import { UpdateUnitsComponent } from './units/update-units/update-units.component';
import { CaptureWaterAndElectrcityComponent } from './units/capture-water-and-electrcity/capture-water-and-electrcity.component';

//BUILDING
import { AddBuiidingComponent } from './buildings/add-buiiding/add-buiiding.component';
import { UpdateBuiidingComponent } from './buildings/update-buiiding/update-buiiding.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { MunicipalBillComponent } from './buildings/municipal-bill/municipal-bill.component';
import { MunicipallBill2Component } from './buildings/municipall-bill2/municipall-bill2.component';

import { ViewpopComponent } from './tenant/proofofpayment/readsavedpop/viewpop/viewpop.component';
import { EditpopComponent } from './tenant/proofofpayment/readsavedpop/editpop/editpop.component';
import { HelpTenantComponent } from './tenant/help-tenant/help-tenant.component';

import { CompleteInspectionComponent } from './landlord/inspectioncalendar/complete-inspection/complete-inspection.component';
import { LandlordAuthGuard } from './guards/landlord-auth-guard';
import { ReportInspectionsComponent } from './landlord/inspectioncalendar/report-inspections/report-inspections.component';
import { ViewInspectionsComponent } from './landlord/inspectioncalendar/view-inspections/view-inspections.component';
import { ViewInspectionItemsComponent } from './landlord/inspectioncalendar/view-inspection-items/view-inspection-items.component';
import { HelpPageComponent } from './landlord/help-page/help-page.component';
import { EditLandlordComponent } from './landlord/view-profile/edit-landlord/edit-landlord.component';
import { EditTenantComponent } from './tenant/view-account/edit-tenant/edit-tenant.component';
import { ViewSelectedTenantProfileComponent } from './landlord/view-tenant/view-selected-tenant-profile/view-selected-tenant-profile.component';
import { CreateLandlordComponent } from './landlord/view-landlord/create-landlord/create-landlord.component';
import { TenantAuthGuard } from './guards/tenant-auth-guard';
import { AdminAuthGuard } from './guards/admin-auth-guard';
import { InspectionStatusComponent } from './admin/inspection-status/inspection-status.component';
import { InspectionTypeComponent } from './admin/inspection-type/inspection-type.component';
import { MaintenanceStatusComponent } from './admin/maintenance-status/maintenance-status.component';
import { MaintenanceTypeComponent } from './admin/maintenance-type/maintenance-type.component';
import { RentalAgreementTypeComponent } from './admin/rental-agreement-type/rental-agreement-type.component';
import { RentalAgreementStatusComponent } from './admin/rental-agreement-status/rental-agreement-status.component';
import { ServiceProviderCetegoryComponent } from './admin/service-provider-cetegory/service-provider-cetegory.component';
import { ServiceProviderStatusComponent } from './admin/service-provider-status/service-provider-status.component';
import { UnitStatusComponent } from './admin/unit-status/unit-status.component';
import { UnitTypeComponent } from './admin/unit-type/unit-type.component';
import { UserTypeComponent } from './admin/user-type/user-type.component';
import { StatusComponent } from './admin/status/status.component';
import { ViewSelectedLandlordProfileComponent } from './landlord/view-landlord/view-selected-landlord-profile/view-selected-landlord-profile.component';
import { UploadRAComponent } from './landlord/upload-rental-agreement/upload-ra/upload-ra.component';
import { UploadTenantIDComponent } from './landlord/upload-rental-agreement/upload-tenant-id/upload-tenant-id.component';
import { UploadCompanyIDComponent } from './landlord/upload-rental-agreement/upload-company-id/upload-company-id.component';
import { UploadCIPCComponent } from './landlord/upload-rental-agreement/upload-cipc/upload-cipc.component';
import { RADocumentsComponent } from './landlord/ra-view/radocuments/radocuments.component';
import { TenantIDComponent } from './landlord/ra-view/tenant-id/tenant-id.component';
import { CompanyIDComponent } from './landlord/ra-view/company-id/company-id.component';
import { CompanyCIPCComponent } from './landlord/ra-view/company-cipc/company-cipc.component';
import { BuildingUnitsComponent } from './buildings/building-units/building-units.component';
import { AuditTrailComponent } from './admin/audit-trail/audit-trail.component';
import { DashboardAuthGuard } from './guards/dashboard-auth-guard';
import { ViewmunicipalbComponent } from './buildings/viewmunicipalb/viewmunicipalb.component';
import { ViewbuildinginfoComponent } from './buildings/viewbuildinginfo/viewbuildinginfo.component';
import { HelpAdminComponent } from './admin/help-admin/help-admin.component';
import { ViewunitinfoComponent } from './units/viewunitinfo/viewunitinfo.component';
import { ChangepasswordComponent } from './access/changepassword/changepassword.component';
import { ViewtpaymentsComponent } from './tenant/viewtpayments/viewtpayments.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},
  //Access
  {path: 'login', component: LoginComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: 'reset', component: ResetComponent},

  //VAT
  {path: 'admin/vat', component: VatComponent, canActivate: [AdminAuthGuard]},
  {path: 'create-vat', component: CreateVatComponent, canActivate: [AdminAuthGuard]},
  {path: 'update-vat', component: UpdateVatComponent, canActivate: [AdminAuthGuard]},

  //UNITS
  {path: 'units', component: UnitsComponent, canActivate: [LandlordAuthGuard]},
  {path: 'add-unit', component: AddUnitsComponent, canActivate: [LandlordAuthGuard]},
  {path: 'update-unit', component: UpdateUnitsComponent, canActivate: [LandlordAuthGuard]},
  {path: 'water-and-electricity', component: WaterAndElectricityComponent, canActivate: [LandlordAuthGuard]},
  {path: 'capture-water-and-electricity', component: CaptureWaterAndElectrcityComponent, canActivate: [LandlordAuthGuard]},
  {
    path: 'building/units/:id',
    component: BuildingUnitsComponent,
  },
  
  //BUILDING
  {path: 'add-building', component: AddBuiidingComponent, canActivate: [LandlordAuthGuard]},
  {path: 'update-building', component: UpdateBuiidingComponent, canActivate: [LandlordAuthGuard]},
  {path: 'buildings', component: BuildingsComponent, canActivate: [LandlordAuthGuard]},
  {path: 'municipal-bill', component: MunicipalBillComponent, canActivate: [LandlordAuthGuard]},
  {path: 'capture-municipal-bill', component: MunicipallBill2Component, canActivate: [LandlordAuthGuard]},

  {
    path: 'tenant',
    component: TenantComponent,
    canActivate: [TenantAuthGuard]
  },
  {
    path: 'tenant/home',
    component: TenantHomeComponent,
    canActivate: [TenantAuthGuard]
  },
  {
    path: 'tenant/viewprofile',
    component: ViewAccountComponent,
    canActivate: [TenantAuthGuard]
  },
  {
    path: 'landlord',
    component: LandlordComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'landlord/home',
    component: LandlordHomeComponent,
    canActivate: [DashboardAuthGuard]
  },
  {
    path: 'payments',
    component: PaymentsComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'tenant/proofofpayment',
    component: ProofofpaymentComponent,
    canActivate: [TenantAuthGuard]
  },
  { path: 'viewfault', component: ViewfaultComponent },
  { path: 'editfault', component: EditfaultComponent },
  { path: 'escalatefault', component: EscalatefaultComponent },
  { path: 'assignfault', component: AssignfaultComponent },
  { path: 'report-maintenance', component: ReportMaintenanceComponent },
  { path: 'createagreement', component: CreateagreementComponent },
  { path: 'commercialagreement', component: CommercialagreementComponent },
  { path: 'searchmaintenance', component: SearchmaintenanceComponent },
  { path: 'editmaintenance', component: EditmaintenanceComponent },
  { path: 'viewmaintenance', component: ViewmaintenanceComponent },
  { path: 'assignmaintenance', component: AssignmaintenanceComponent },
  { path: 'viewfaulttenant', component: ViewfaulttenantComponent },//about page
  { path: 'reportfault', component: ReportfaultComponent },
  { path: 'searchfault', component: SearchfaultComponent },
  { path: 'htmldoc', component: HtmldocComponent },
  { path: 'agreements', component: AgreementsComponent },
  { path: 'help-page', component: HelpPageComponent },//landlord help

  {
    path: 'landlord/serviceproviders',
    component: ServiceprovidersComponent,
    canActivate: [LandlordAuthGuard]
  },

  {
    path: 'landlord/serviceproviders/editserviceprovider',
    component: EditservprovComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'landlord/serviceproviders/createserviceprovider',
    component: CreateservprovComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'landlord/invoice',
    component: InvoiceComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'landlord/invoice/generateinvoice',
    component: GeninvoiceComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'tenant/readproofofpayment',
    component: ReadsavedpopComponent,
    canActivate: [TenantAuthGuard]
  },
  {
    path: 'tenant/readproofofpayment/view',
    component: ViewpopComponent,
    canActivate: [TenantAuthGuard]
  },
  {
    path: 'tenant/readproofofpayment/editpop',
    component: EditpopComponent,
    canActivate: [TenantAuthGuard]
  },
  {
    path: 'tenant/generatestatement',
    component: GenstatementComponent,
    canActivate: [TenantAuthGuard]
  },
  {
    path: 'tenant/successfullygeneratedstatement',
    component: SuccgenstatementComponent,
    canActivate: [TenantAuthGuard]
  },
  {
    path: 'landlord/statements',
    component: StatementsComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'landlord/succesfullygenstatemnt',
    component: SuccesfullygenstatemntComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'landlord/payments',
    component: PaymentsComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'landlord/payments/raisepayment',
    component: RaisepaymentComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'landlord/payments/raisepayment/manualcharge',
    component: ManualchargeComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'landlord/payments/capturepayment',
    component: CapturepaymentComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'landlord/payments/generatereceipt',
    component: GenpayreceiptComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'landlord/payments/generatedreceipt',
    component: PaymentreceiptComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'landlord/financialmatters/generatewaterreport',
    component: ReportWaterComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'landlord/financialmatters/generateelectricityreport',
    component: ReportElectricityComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'landlord/financialmatters/rentalamount',
    component: RentalamountComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'landlord/financialmatters/addrentalamount',
    component: AddrentamtComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'landlord/financialmatters/editrentalamount',
    component: EditrentamtComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'landlord/databaseBackup',
    component: DatabaseBackupComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'landlord/databaseRestore',
    component: DatabaseRestoreComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'landlord/viewRentalAgreement',
    component: RaViewComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'landlord/viewLandlords',
    component: ViewLandlordComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'landlord/viewProfile',
    component: ViewProfileComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'landlord/viewTenant',
    component: ViewTenantComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'landlord/generateIncomeExpensesReport',
    component: ReportIncomeComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'landlord/uploadRentalAgreement',
    component: UploadRentalAgreementComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'landlord/uploadRentalAgreement2',
    component: RaUploadComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'tenant/editprofile',
    component: EditAccountComponent,
  },
  {
    path: 'landlord/editprofile',
    component: EditProfileComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'landlord/generateoverduepaymentsreport',
    component: ReportOverdueComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'tenant/viewrentalagreement',
    component: ViewrentalagreementComponent,
    canActivate: [TenantAuthGuard]
  },
  {
    path: 'inspection/book',
    component: InspectioncalendarComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'inspection/complete/:inspectionId',
    component: CompleteInspectionComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'inspection/report-inspection',
    component: ReportInspectionsComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'inspection/view-inspections',
    component: ViewInspectionsComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'inspection/view-inspection-items/:inspectionId',
    component: ViewInspectionItemsComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'landlord/viewprofile/edit',
    component: EditLandlordComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'tenant/viewprofile/edit',
    component: EditTenantComponent,
    canActivate: [TenantAuthGuard]
  },
  {
    path: 'landlord/tenant/viewProfile',
    component: ViewSelectedTenantProfileComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'landlord/viewLandlords/viewSelectedProfile',
    component: ViewSelectedLandlordProfileComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'landlord/view-landlords/createlandlord',
    component: CreateLandlordComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'landlord/viewRentalAgreement/viewRAdocs',
    component: RADocumentsComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'landlord/viewRentalAgreement/viewTenantIDdocs',
    component: TenantIDComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'landlord/viewRentalAgreement/viewCompanyIDdocs',
    component: CompanyIDComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'landlord/viewRentalAgreement/viewCompanyCIPCdocs',
    component: CompanyCIPCComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'landlord/uploadRentalAgreement/uploadRAdoc',
    component: UploadRAComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'landlord/uploadRentalAgreement/uploadCIPCdoc',
    component: UploadCIPCComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'landlord/uploadRentalAgreement/uploadTenantID',
    component: UploadTenantIDComponent,
    canActivate: [LandlordAuthGuard]
  }, 
  {
    path: 'landlord/uploadRentalAgreement/uploadCompanyID',
    component: UploadCompanyIDComponent,
    canActivate: [LandlordAuthGuard]
  }, 
  {
    path: 'admin/inspection-status',
    component: InspectionStatusComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'admin/inspection-type',
    component: InspectionTypeComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'admin/maintenance-status',
    component: MaintenanceStatusComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'admin/maintenance-type',
    component: MaintenanceTypeComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'admin/rental-agreement-type',
    component: RentalAgreementTypeComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'admin/rental-agreement-status',
    component: RentalAgreementStatusComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'admin/service-provider-category',
    component: ServiceProviderCetegoryComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'admin/service-provider-status',
    component: ServiceProviderStatusComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'admin/status',
    component: StatusComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'admin/unit-status',
    component: UnitStatusComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'admin/unit-type',
    component: UnitTypeComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'admin/user-type',
    component: UserTypeComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'admin/audit-trail',
    component: AuditTrailComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'admin/backupDatabase',
    component: DatabaseBackupComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'admin/restoreDatabase',
    component: DatabaseRestoreComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'tenant/help-tenant', //help tenant
    component: HelpTenantComponent,
    canActivate: [TenantAuthGuard]
  },
  {
    path: 'landlord/view-municipal-bills',
    component: ViewmunicipalbComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'landlord/viewbuildinginfo',
    component: ViewbuildinginfoComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'admin/help-admin',//help admin
    component: HelpAdminComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'landlord/viewunitinfo',
    component: ViewunitinfoComponent,
    canActivate: [LandlordAuthGuard]
  },
  {
    path: 'changepassword',
    component: ChangepasswordComponent
  },
  {
    path: 'tenant/financials',
    component: ViewtpaymentsComponent,
    canActivate: [TenantAuthGuard]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
