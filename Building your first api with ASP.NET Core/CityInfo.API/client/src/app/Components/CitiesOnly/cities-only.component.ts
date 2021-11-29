import { Component, OnInit } from '@angular/core';
import { Towns } from "../../Services/towns.service";


@Component({
  selector: 'app-cities-only',
  templateUrl: "cities-only.component.html",
  styles: [
  ]
})
export class CitiesOnlyComponent implements OnInit {

    constructor(public towns: Towns) {
    }

    ngOnInit(): void {
        this.towns.loadCities()
            .subscribe();
    }

}
