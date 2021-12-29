import { Component, OnInit } from '@angular/core';
import { ICity }  from "../../shared/City";
import { map } from "rxjs/operators";
import { Service } from "../../Services/service";
import { DataService } from "../../Services/DataService";

@Component({
  selector: 'app-cities-only',
  templateUrl: "cities-only.component.html",
  styles: [
  ]
})
export class CitiesOnlyComponent implements OnInit {

    constructor(public service: Service, public dataservice: DataService) {
        this.refreshCities();
    }

    ngOnInit(): void {
        this.service.apiCitiesCitiesOnlyGet()
            .subscribe((res: any) => {
                this.dataservice.cities = res;
            });
    }
    
    page = 1;
    pageSize = 3;
    collectionSize = this.dataservice.cities.length;

    refreshCities() {
        this.dataservice.cities
            .map((c, i) => ({ Id: i + 1, ...c}))
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
