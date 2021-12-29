import { Component, OnInit } from '@angular/core';
import { DataService } from "../../Services/DataService";
import { Service } from "../../Services/service";
import { ICity }  from "../../shared/City";

@Component({
  selector: 'app-sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: [ 'sidenav.component.css']
})
export class SidenavComponent implements OnInit {
    selectedIndex: number | null;

    constructor(public dataservice: DataService, public service: Service) { }

  ngOnInit(): void {
              this.service.apiCitiesCitiesOnlyGet()
            .subscribe((res: any) => {
                this.dataservice.cities = res;
            });
    }

    onSelected(_index: number): void {
        this.selectedIndex = _index;
    }
    MainTableSelected(): void {
        this.selectedIndex = null;
    }

 }
