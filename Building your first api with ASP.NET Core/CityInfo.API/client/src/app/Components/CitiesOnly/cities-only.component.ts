import { Component, OnInit } from '@angular/core';
import { ICity }  from "../../shared/City";
import { map } from "rxjs/operators";
import { Service } from "../../Services/service";

@Component({
  selector: 'app-cities-only',
  templateUrl: "cities-only.component.html",
  styles: [
  ]
})
export class CitiesOnlyComponent implements OnInit {

    cities: ICity[] = [];

    constructor(public service: Service) {
        this.refreshCities();
    }

    ngOnInit(): void {
        this.service.apiCitiesCitiesOnlyGet()
            .subscribe((res: any) => {
                this.cities = res;
            });
    }
    
    page = 1;
    pageSize = 3;
    collectionSize = this.cities.length;

    refreshCities() {
        this.cities
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
