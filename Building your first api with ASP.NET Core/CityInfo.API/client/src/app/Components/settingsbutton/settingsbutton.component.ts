import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settingsbutton',
  templateUrl: 'settingsbutton.component.html',
  styles: [
  ]
})
export class SettingsbuttonComponent implements OnInit {

  constructor(private router: Router) {

  }
  goSettings() {
      this.router.navigateByUrl('/settings');
  }

  ngOnInit(): void {
  }

}
