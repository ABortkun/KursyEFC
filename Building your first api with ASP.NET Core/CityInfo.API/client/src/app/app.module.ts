import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { WelcomeComponent } from "./Components/welcome/welcome.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { CityListPageComponent } from "./pages/CityListPage.component";
import { Service } from "./Services/service";
import { CitiesOnlyComponent } from "./Components/CitiesOnly/cities-only.component";
import { FormsModule } from "@angular/forms";
import { CityAddComponent } from "./Components/city-add/city-add.component";



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
        WelcomeComponent,
        CityListPageComponent,
        CitiesOnlyComponent,
        CityAddComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgbModule,
        RouterModule.forRoot(routes),
        FormsModule
    ],
    exports: [],
    providers: [Service],
    bootstrap: [AppComponent]
})
export class AppModule { }
