import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemeService } from '../Services/ThemeService';

@Component({
    selector: 'app-settingspage',
    templateUrl: 'settingsPage.component.html',
    styleUrls: ['settingsPage.component.css']
})
export class SettingsPageComponent implements OnInit {

    constructor(private router: Router, public themeService: ThemeService) {}

    ngOnInit(): void {
        this.themeService.LoadTheme();
        this.themeService.StyleChange(String(this.themeService.themeFromStorage));
    }

    goBack() {
        this.router.navigateByUrl('');
    }

    SaveStyle(style: string) {
        window.localStorage.setItem('style', style);
        this.themeService.StyleChange(String(style));
    }
}