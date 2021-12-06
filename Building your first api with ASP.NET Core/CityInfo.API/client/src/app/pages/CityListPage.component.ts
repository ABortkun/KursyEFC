import { Component, OnInit } from '@angular/core';
import { Towns } from "../Services/towns.service";


@Component({
    selector: 'city',
    templateUrl: "CityListPage.component.html",
    styles: []
})
export class CityListPageComponent implements OnInit {


    constructor(public towns: Towns) {
    }

    ngOnInit(): void {
        this.towns.loadCities()
            .subscribe();
    }
}