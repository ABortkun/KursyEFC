import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Service } from "../Services/service";
import { Observable } from "rxjs";



@Component({
    selector: 'city',
    templateUrl: "CityListPage.component.html",
    styles: []
})
export class CityListPageComponent implements OnInit {



    constructor(public service: Service) {
    }

    ngOnInit(): void {
        console.log("on init");
        this.service.apiCitiesCitiesOnlyGet().subscribe(r => console.log(r));
    }

}