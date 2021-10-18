import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { OverdueserviceService} from './overdueservice.service';
import { Router } from '@angular/router';
import * as chart from 'chart.js';
import {Chart} from 'chart.js';
import { autoTable, RowInput } from 'jspdf-autotable';
import { jsPDF } from 'jspdf';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-report-overdue',
  templateUrl: './report-overdue.component.html',
  styleUrls: ['./report-overdue.component.scss']
})
export class ReportOverdueComponent implements OnInit {form: FormGroup;
  // prodcategories: any;
  // s_picker: any;
  // e_picker: any;
  // ProductName = []; 
  // AverageQuantityOrdered = []; 
  // data2 = [];
  // htmlData = [];
  // temp: any;

  // count : any;
  // total : any;
  // GrandAverage : any;

  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('htmlData') htmlData: ElementRef;
  displayedColumns: string[] = ['TenantName', 'TenantEmail', 'BuildingName', 'UnitNumber', 'AmountOutstanding', 'Icon'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: OverdueserviceService, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    // this.service.GetCategories().subscribe((data) => 
    // {
    // this.prodcategories = data;
    // })

    // this.form = this.formBuilder.group(
    // {
    //   startdate: ['', Validators.required],
    //   enddate: ['', Validators.required],
    //   productCategoryID: ['', Validators.required],
    // });

    this.service.GetOverduePayments().subscribe((result: any) => {
      console.log(result);

      this.dataSource.data = result;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  onClickEmail(item){
    this.service.EmailOverduePayment(item).subscribe(result => {

    });
  }

  // generate(data)
  // {

  //   this.service.GetReportData(data).subscribe((results: any) => 
  //   {
  //     console.log(results)

  //     results.reportData.forEach(x => 
  //     {
  //       this.ProductName.push(x.ProductName); 
  //       this.AverageQuantityOrdered.push(x.AverageQuantityOrdered);  
  //       this.count = this.count + this.AverageQuantityOrdered;
  //     });

  //     this.total = this.ProductName.length;

  //     this.GrandAverage = this.AverageQuantityOrdered.reduce((accum,item) => accum + item, 0)

  //     this.data2 = results.reportData;

  //     this.htmlData.push(new Chart('canvas', 
  //     {
  //       type: 'bar',
  //       data: 
  //       {
  //         labels: this.ProductName,
  //         datasets: [
  //           {
  //             data: this.AverageQuantityOrdered,
  //             borderColor: '#3cb371',
  //             backgroundColor: "#FF6384",
  //           }
  //         ],
  //       },
         
  //       options: 
  //       {
  //         scales: 
  //         {
  //           y: 
  //             {
  //             display: true
  //           },
  //           x: 
  //             {
  //             display: true
  //           },
  //         }
  //       }
  //     }));
  //   });
  // }
  }


