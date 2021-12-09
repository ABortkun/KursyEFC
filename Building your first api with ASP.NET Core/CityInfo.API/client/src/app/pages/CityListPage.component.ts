import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Towns } from "../Services/towns.service";
import { Service } from "../Services/service";
import { Observable } from "rxjs";
import { ICity } from "../shared/City";



@Component({
    selector: 'city',
    templateUrl: "CityListPage.component.html",
    styles: []
})
export class CityListPageComponent implements OnInit {


    cities: ICity[] = [];

    constructor(public service: Service) {
    }

    ngOnInit(): void {
        console.log("on init");
        this.service.apiCitiesCitiesOnlyGet().subscribe(r => console.log(r));
    }

}