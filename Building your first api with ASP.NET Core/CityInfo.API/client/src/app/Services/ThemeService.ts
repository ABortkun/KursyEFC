import { Injectable } from '@angular/core';

export class ThemeService {
     lightTheme: boolean = true;
    mediumTheme: boolean = false;
    darkTheme: boolean = false;
    interfaceStyle: string;
    themeFromStorage: string | null;

    constructor() {}

     StyleChange(theme: string) {
        this.interfaceStyle = theme;
        console.log(`style changed to: ${this.interfaceStyle} `);
        if (this.interfaceStyle === "light") {
            this.lightTheme = true;
            this.mediumTheme = false;
            this.darkTheme = false;
        } else if (this.interfaceStyle === "medium") {
            this.lightTheme = false;
            this.mediumTheme = true;
            this.darkTheme = false;
        } else {
            this.lightTheme = false;
            this.mediumTheme = false;
            this.darkTheme = true;
        }  
    }
    LoadTheme() {
       this.themeFromStorage = window.localStorage.getItem('style')
    }
}
