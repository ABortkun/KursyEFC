import { Component, OnInit } from '@angular/core';
import { Towns } from "../../Services/towns.service";
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

    constructor(public towns: Towns, public city: Service) {
        this.refreshCities();
    }

    ngOnInit(): void {
        /*this.city.apiCitiesCitiesOnlyGet().subscribe(r => console.log(r));*/
       this.towns.loadCities()
            .subscribe();
    }
    
    page = 1;
    pageSize = 3;
    collectionSize = this.towns.cities.length;

    refreshCities() {
        this.towns.cities
            .map((c, i) => ({ id: i + 1, ...c}))
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
