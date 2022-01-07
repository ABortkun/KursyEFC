import { Component, OnInit } from '@angular/core';
import { ICity }  from "../../shared/City";
import { map } from "rxjs/operators";
import { Service } from "../../Services/service";
import { DataService } from "../../Services/DataService";
import { SidenavComponent } from "../sidenav/sidenav.component";

@Component({
    selector: 'app-cities-only',
    templateUrl: "cities-only.component.html",
    styles: [
    ]
})
export class CitiesOnlyComponent implements OnInit {

    page = 1;
    pageSize = 5;

    constructor(public service: Service, public dataservice: DataService) {
        this.refreshCountries();
    }

    ngOnInit(): void {
        this.service.apiCitiesCitiesOnlyGet()
            .subscribe((res: any) => {
                this.dataservice.cities = res;
                this.dataservice.selectedData = this.dataservice.cities;
            });
    }
    refreshCountries() {
      this.dataservice.selectedData 
           .map((c: any, i: number) => ({id: i + 1, ...c}))
           .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
   }
}

//export class NgbdTablePagination {



//    constructor() {
//        this.refreshCountries();
//    }

//    refreshCountries() {
//        this.countries = COUNTRIES
//            .map((country, i) => ({id: i + 1, ...country}))
//            .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
//    }
//}
