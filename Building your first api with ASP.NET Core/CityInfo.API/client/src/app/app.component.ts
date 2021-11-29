import { Component, OnInit } from '@angular/core';
import { Towns } from "./Services/towns.service";

@Component({
  selector: 'city',
  templateUrl: "app.component.html",
  styles: []
})
export class AppComponent implements OnInit {


    constructor(public towns: Towns) {
    }

    ngOnInit(): void {
        this.towns.loadCities()
            .subscribe();
    }
}
