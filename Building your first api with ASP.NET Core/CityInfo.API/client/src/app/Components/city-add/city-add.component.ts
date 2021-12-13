import { Component, OnInit } from "@angular/core";
import { NgForm, NgModel, FormBuilder, FormGroup } from "@angular/forms";
import { ICityadd  } from "../../shared/cityadd";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap } from "rxjs/operators";
import { Service } from "../../Services/service";


@Component({
  selector: "app-city-add",
  templateUrl:"city-add.component.html",
  styles: [
  ]
})
export class CityAddComponent implements OnInit {

    oryginalcityadd: ICityadd = ({
        name: null,
        description: null
    }) as any;

    cityadd : ICityadd = {...this.oryginalcityadd}

  constructor(public service: Service) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
      console.log('Cityadd is: ', this.cityadd);
      this.service.apiCitiesCityPost(this.cityadd.name, this.cityadd.description).subscribe();
  }
}
