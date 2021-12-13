import { Component, OnInit } from "@angular/core";
import { NgForm, NgModel, FormBuilder, FormGroup } from "@angular/forms";
import { cityadd } from "../../shared/cityadd";
import { ICity } from "../../shared/City";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap } from "rxjs/operators";


@Component({
  selector: "app-city-add",
  templateUrl:"city-add.component.html",
  styles: [
  ]
})
export class CityAddComponent implements OnInit {

    oryginalcityadd : cityadd = ({
        name: null,
        description: null
    }) as any;

    cityadd : cityadd = {...this.oryginalcityadd}

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
      console.log("cityadd.name:", this.cityadd.name);
      console.log("cityadd.description:", this.cityadd.description);
      console.log('Cityadd is: ', this.cityadd);
  }
}
