import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(towns) {
        this.towns = towns;
    }
    ngOnInit() {
        this.towns.loadCities()
            .subscribe();
    }
};
AppComponent = __decorate([
    Component({
        selector: 'city',
        templateUrl: "app.component.html",
        styles: []
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map