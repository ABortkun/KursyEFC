import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { WelcomeComponent } from "./Components/welcome/welcome.component";
import { Towns } from "./Services/towns.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CitiesOnlyComponent } from './Components/CitiesOnly/cities-only.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            WelcomeComponent,
            CitiesOnlyComponent
        ],
        imports: [
            BrowserModule,
            HttpClientModule,
            NgbModule
        ],
        providers: [Towns],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map