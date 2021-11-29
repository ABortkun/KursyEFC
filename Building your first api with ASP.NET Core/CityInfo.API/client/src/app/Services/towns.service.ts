import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable()
export class Towns {

    public cities: any[] = [];

    constructor(private http: HttpClient) {

    }

    loadCities() {
       return this.http.get<any[]>("/api/cities/citiesOnly")
       .pipe(map(data => {
           this.cities = <any[]>(data);
           return;
       }))
    }
}

    

