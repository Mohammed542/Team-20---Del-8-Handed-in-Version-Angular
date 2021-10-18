import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { IncomeserviceService} from './incomeservice.service';
import { Router } from '@angular/router';
import * as chart from 'chart.js';
import {Chart} from 'chart.js';
import { autoTable, RowInput } from 'jspdf-autotable';
import { jsPDF } from 'jspdf';
import { Observable } from 'rxjs';
import { Label, SingleDataSet, monkeyPatchChartJsTooltip, monkeyPatchChartJsLegend, Color } from 'ng2-charts';

@Component({
  selector: 'app-report-income',
  templateUrl: './report-income.component.html',
  styleUrls: ['./report-income.component.scss']
})
export class ReportIncomeComponent implements OnInit {form: FormGroup;
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

  public pieChartOptions: chart.ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Landlords'], ['Tenants'], 'Service Providers'];
  public pieChartData: SingleDataSet = [30, 50, 20];
  public pieChartType: chart.ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  public pieChartOptions2: chart.ChartOptions = {
    responsive: true,
  };
  public pieChartLabels2: Label[] = [['Number of Units'], ['Number of Units Occupied']];
  public pieChartData2: SingleDataSet = [30, 50];
  public pieChartType2: chart.ChartType = 'pie';
  public pieChartLegend2 = true;
  public pieChartPlugins2 = [];

  lineChartData: chart.ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Income' },
    { data: [51, 85, 65, 95, 87, 65], label: 'Expenses' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor(private service: IncomeserviceService, private formBuilder : FormBuilder) 
  {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }


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

    this.service.GetPieChartData().subscribe((result: any) => {
      this.pieChartData = [result[0], result[1], result[2]];
    });

    this.service.GetUnitsOccupied().subscribe((result: any) => {
      this.pieChartData2 = [result[0], result[1]];
    });

    this.service.GetIncomeExpensesData().subscribe((result: any) => {
      console.log(result);
      this.lineChartLabels = result.Months;
      this.lineChartData[0].data = result.Incomes;
      this.lineChartData[1].data = result.Expenses;
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
