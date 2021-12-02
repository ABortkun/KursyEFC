import { Component, OnInit } from "@angular/core";
import { NgForm, NgModel, FormBuilder, FormGroup } from "@angular/forms";
import { cityadd } from "../../shared/cityadd";

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

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
      console.log("in onSubmit: ", form.value);
      console.log("cityadd.name:", this.cityadd.name);
      console.log("cityadd.description:", this.cityadd.description);

  }

}
