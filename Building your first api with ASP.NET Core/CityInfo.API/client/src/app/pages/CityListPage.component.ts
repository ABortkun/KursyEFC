import { Component, OnInit } from '@angular/core';
import { Towns } from "../Services/towns.service";
import { Client } from "../Services/service";



@Component({
    selector: 'city',
    templateUrl: "CityListPage.component.html",
    styles: []
})
export class CityListPageComponent implements OnInit {

    constructor(public client: Client) {
    }

    ngOnInit(): void {
        this.client.apiCitiesCitiesOnlyGet();
    }
}