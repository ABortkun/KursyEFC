import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { WelcomeComponent } from "./Components/welcome/welcome.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { CityListPageComponent } from "./pages/CityListPage.component";
import { SettingsPageComponent } from "./pages/SettingsPage.component";
import { Service } from "./Services/service";
import { ThemeService } from "./Services/ThemeService";
import { DataService } from "./Services/DataService";
import { CitiesOnlyComponent } from "./Components/CitiesOnly/cities-only.component";
import { FormsModule } from "@angular/forms";
import { CityAddComponent } from "./Components/city-add/city-add.component";
import { SettingsbuttonComponent } from './Components/settingsbutton/settingsbutton.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from "./Components/sidenav/sidenav.component";



const routes: Routes = [
    {
        path: '',
        component: CityListPageComponent
    },
    {
        path: 'welcome',
        component: WelcomeComponent
    },
    {
        path: 'settings',
        component: SettingsPageComponent
    }
];


@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
        CityListPageComponent,
        SettingsPageComponent,
        CitiesOnlyComponent,
        CityAddComponent,
        SettingsbuttonComponent,
        SidenavComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgbModule,
        RouterModule.forRoot(routes),
        FormsModule,
        MatSidenavModule,
        BrowserAnimationsModule
    ],
    exports: [],
    providers: [Service, ThemeService, DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
