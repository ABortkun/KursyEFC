import { Component, OnInit } from '@angular/core';
import { DataService } from "../../Services/DataService";
import { Service } from "../../Services/service";

@Component({
  selector: 'app-sidenav',
  templateUrl: 'sidenav.component.html',
  styles: [
  ]
})
export class SidenavComponent implements OnInit {

  constructor(public dataservice: DataService, public service: Service) { }

  ngOnInit(): void {
              this.service.apiCitiesCitiesOnlyGet()
            .subscribe((res: any) => {
                this.dataservice.cities = res;
            });
    }
 }
