import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Service } from "../Services/service";
import { Observable } from "rxjs";
import { ThemeService } from '../Services/ThemeService';

@Component({
    selector: 'city',
    templateUrl: "CityListPage.component.html",
    styleUrls: ["CityListPage.component.css"]
})
export class CityListPageComponent implements OnInit {



    constructor(public service: Service, public themeService: ThemeService) {
    }

    ngOnInit(): void {
        this.service.apiCitiesCitiesOnlyGet().subscribe();
        this.themeService.LoadTheme();
        this.themeService.StyleChange(String(this.themeService.themeFromStorage));
    }

}