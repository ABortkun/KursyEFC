import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { WelcomeComponent } from "./welcome/welcome.component";
import { Towns } from "./Services/towns.service";


@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [Towns],
    bootstrap: [AppComponent]
})
export class AppModule { }
