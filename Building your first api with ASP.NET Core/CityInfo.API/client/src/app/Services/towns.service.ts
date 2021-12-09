import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ICity } from "../shared/City";

@Injectable()
export class Towns {

    public cities: ICity[] = [];

    constructor(private http: HttpClient) {

    }

    loadCities(): Observable<void> {
       return this.http.get<any[]>("/api/cities/citiesOnly")
       .pipe(map(data => {
           this.cities = data;
           return;
       }))
    }
}

    

