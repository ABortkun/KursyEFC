import { Component, OnInit } from '@angular/core';
import { DataService } from "../../Services/DataService";
import { ThemeService } from "../../Services/ThemeService";
import { Service } from "../../Services/service";
import { ICity }  from "../../shared/City";

@Component({
  selector: 'app-sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: [ 'sidenav.component.css']
})
export class SidenavComponent implements OnInit {
    selectedIndex: number | null;
    selectedId: number;

    ngOnInit(): void {
        this.themeService.LoadTheme();
        this.themeService.StyleChange(String(this.themeService.themeFromStorage));
    }

    constructor(public dataservice: DataService, public service: Service, public themeService: ThemeService) { }

    onSelected(_index: number): void {
        this.selectedIndex = _index;
        this.selectedId = this.selectedIndex + 1;
        this.service.apiCitiesByCityIdPointsofinterestGet(this.selectedId)
            .subscribe((res: any) => {
                this.dataservice.selectedData = res;
            });
        this.selectedId = 0;
    }

    MainTableSelected(): void {
        this.selectedIndex = null;
        this.dataservice.selectedData = this.dataservice.cities;
    }

 }
