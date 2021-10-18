export class UpProofPayment{
    RentalAgreementID: number;
    PaymentMonth: string;
    PaymentYear: number;
    // File: File;
    UnitID: number;
    fileName: string = "";
    fileSize: number = 0;
    fileType: string = "";
    lastModifiedTime: number = 0;
    lastModifiedDate: Date = null;
    fileAsBase64: string = "";
}