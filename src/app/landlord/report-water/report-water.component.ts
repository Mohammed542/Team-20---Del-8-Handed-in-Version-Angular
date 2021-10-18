import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-report-water',
  templateUrl: './report-water.component.html',
  styleUrls: ['./report-water.component.scss']
})
export class ReportWaterComponent implements OnInit {

  buildingsList: any;
  selectedBuildings: any[] = [];
  startDate: any;
  endDate: any;

  toSend = {
    selectBuildings: null,
    sDate: null,
    eDate: null
  }

  allData: any;

  x: any;
  y: any;
  repoData = [];
  canvas = [];
 
  months = [];
  dataSets = {
    label: "",
    backgroundColor: "",
    data: []
  };

  dataData: any[] = [];

  data = {
    labels: [],
    datasets: []
  }

  clicked: boolean = false;

  dynamicColors = function() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
  };

  constructor(private service: MainService) { }

  ngOnInit(): void {
    this.service.getBuildings().subscribe(res => {
      this.buildingsList = res;
      console.log(res);
    });
  }

  selectBuilding(event) {
    console.log(event);

    this.buildingsList.forEach(element => {
      console.log(element);
      if (element.BuildingID == event.value) {
        console.log(element.BuildingID);
        this.selectedBuildings.push(element);
        console.log("SelectedBUILDINGS",this.selectedBuildings);
      }
    });
  }

  onDeleteSelectedBuilding(item) {
    console.log(item);
    this.selectedBuildings.forEach((element, index) => {
      if (element.BuildingID == item.BuildingID) {
        this.selectedBuildings.splice(index, 1);
      }
    });
  }

  changeStartMonth(event) {
    console.log(event.value);

    var date = event.value;
    var month = date.toLocaleString('default', { month: 'long' });
    var year = date.getFullYear();
    this.startDate = month + " " + year;
    // console.log(month + " " + year);
    console.log(this.startDate);
  }

  changeEndMonth(event) {
    console.log(event.value);

    var date = event.value;
    var month = date.toLocaleString('default', { month: 'long' });
    var year = date.getFullYear();
    this.endDate = month + " " + year;
    // console.log(month + " " + year);
    console.log(this.endDate);
  }

  async onGenerateReport() {
    this.allData = [];
    this.clicked = true;
    this.toSend.selectBuildings = this.selectedBuildings;
    this.toSend.sDate = this.startDate;
    this.toSend.eDate = this.endDate;
    this.months = [];
    this.dataSets.data = [];
    this.dataData = [];

    await this.service.getWaterAndSanitationData(this.toSend).subscribe(res => {
      console.log(res);
      this.allData = res;
      console.log("allData in subs",this.allData);
      this.repoData = this.allData;

      this.allData.forEach((element, index) => {
        this.months.push(element.Month);
        this.data.labels[index] = element.Month;
        this.data.datasets[index] = element.waterdata;
      });

      this.selectedBuildings.forEach((element, index) => {
        const randomNum = () => Math.floor(Math.random() * (235 - 52 + 1) + 52);
        const randomRGB = () => `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
        this.dataSets = {label: '', backgroundColor: this.dynamicColors(), data: []};
        console.log(element);
        console.log(element.BuildingName);
        this.dataSets.label = element.BuildingName;
        this.allData.forEach((element2, index2) => {
          element2.waterdata.forEach((element3, index3) => {
            if(element3.buildingName == element.BuildingName){
              this.dataSets.data.push(element3.consAmount);
            }
            // else {
            //   this.dataSets.data.push(0);
            // }
          });
        });
        this.dataData.push(this.dataSets);
      });

      console.log("data", this.data);
      console.log("datadata", this.dataData);

      this.canvas.push(new Chart('canvas', {
        type: 'bar',
        data: {
          labels: this.months,
          datasets: this.dataData,
          // [
          //   {
          //     data: this.allData.waterdata,
          //   }
          // ],
        },
        // data: this.data,
        options: {
          legend: {
            display: true
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              ticks: {
                min: 0,
              },
              display: true
            }],
          }
        }
      }));
    });

    this.repoData = this.allData;
    console.log("allData out subs",this.allData);
    console.log("repoData out subs",this.repoData);
    //this.totalAverage = this.AQO.reduce((accum,item) => accum + item, 0);

    // this.canvas.push(new Chart('canvas', {
    //   type: 'bar',
    //   data: {
    //     labels: this.allData.Month,
    //     datasets: [
    //       {
    //         data: this.allData.waterdata,
    //       }
    //     ],
    //   },
    //   options: {
    //     legend: {
    //       display: false
    //     },
    //     scales: {
    //       xAxes: [{
    //         display: true
    //       }],
    //       yAxes: [{
    //         display: true
    //       }],
    //     }
    //   }
    // }));
  }
}
