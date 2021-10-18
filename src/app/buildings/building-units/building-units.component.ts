import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UnitService } from '../../units/unit.service';

@Component({
  selector: 'app-building-units',
  templateUrl: './building-units.component.html',
  styleUrls: ['./building-units.component.scss'],
})
export class BuildingUnitsComponent implements OnInit {
  buildingId: string;
  units: any[];
  createForm: any;
  SearchForm: any;

  constructor(
    private route: ActivatedRoute,
    private service: UnitService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buildingId = this.route.snapshot.paramMap.get('id');
    this.service.GetUnits().subscribe((data: any[]) => {
      this.units = data;
      this.units = this.units[0].filter(
        (unit) => unit.BuildingID == this.buildingId
      );
    });
  }

  SearhcUnits(e) {
    let searchValue = e.target.SearchUnit.value;
    if (searchValue == '') {
      this.service.GetUnits().subscribe((data: any[]) => {
        this.units = data[0].filter(
          (unit) => unit.BuildingID == this.buildingId
        );
      });
    } else {
      this.units = this.units.filter((unit) =>
        unit.UnitNumber.includes(searchValue)
      );
    }
  }

  capture() {
    this.router.navigate(['water-and-electricity']);
  }
  
  add() {
    this.router.navigate(['add-unit']);
  }
}
