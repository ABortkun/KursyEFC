import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { WelcomeComponent } from "./Components/welcome/welcome.component";
import { Towns } from "./Services/towns.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { CityListPageComponent } from "./pages/CityListPage.component";

const routes: Routes = [
    {
        path: '',
        component: CityListPageComponent
    },
    {
        path: 'welcome',
        component: WelcomeComponent
    }
];


@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgbModule
    ],
    exports: [CitiesOnlyComponent],
    providers: [Towns, Client],
    bootstrap: [AppComponent, CitiesOnlyComponent]
})
export class AppModule { }
