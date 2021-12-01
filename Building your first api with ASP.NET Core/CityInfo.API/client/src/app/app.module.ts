import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { WelcomeComponent } from "./Components/welcome/welcome.component";
import { Towns } from "./Services/towns.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CitiesOnlyComponent } from './Components/CitiesOnly/cities-only.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CityAddComponent } from './Components/city-add/city-add.component';
//import { NgbdTablePagination } from "./Components/CitiesOnly/cities-only.component";



@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
        CitiesOnlyComponent,
        CityAddComponent,
        //NgbdTablePagination
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgbModule,
        CommonModule,
        FormsModule
    ],
    exports: [CitiesOnlyComponent],
    providers: [Towns],
    bootstrap: [AppComponent, CitiesOnlyComponent]
})
export class AppModule { }
