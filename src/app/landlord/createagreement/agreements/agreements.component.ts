import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateagreementService } from '../createagreement.service';

@Component({
  selector: 'app-agreements',
  templateUrl: './agreements.component.html',
  styleUrls: ['./agreements.component.scss']
})
export class AgreementsComponent implements OnInit {
  @ViewChild('content', { static: false }) el!: ElementRef;
  tenantData;
  tenantDetails;

  constructor(
    private httpService: HttpClient,
    public service: CreateagreementService
  ) {}

  ngOnInit(): void {
    this.httpService
      .get(environment.apiURL + '/RentalAgreements/getRentalAgreements')
      .subscribe(res => {
        this.tenantData = res as string[];
        console.log((this.tenantData = res as string[]));
      });
  }

  requestdetails(id) {
    localStorage['RentalAgreementID'] = id;
    this.httpService
      .get(
        environment.apiURL + '/RentalAgreements/getRentalDetails/' + id
      )
      .subscribe(res => {
        this.tenantDetails = res as string[];
        console.log((this.tenantDetails = res as string[]));
      });
  }

  makePDF() {}
  deleteAgreement(id: number) {
    this.service.deleteAgreement(id).subscribe(res => {
      window.location.reload();
    });
  }
}
