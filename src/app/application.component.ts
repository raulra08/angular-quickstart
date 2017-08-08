import { Component, OnInit } from '@angular/core';

import { Application } from './application';
import { AppService } from './app.service';

@Component({
  selector: 'my-application',
  templateUrl: `./application.component.html`,
  styleUrls: [`./application.component.css`]
})

export class ApplicationComponent implements OnInit {
  apps: Application[];
  selectedApp: Application;

  constructor(private appService: AppService) { }

  getApps(): void {
    this.appService.getApps().then(apps => this.apps = apps);
  }

  ngOnInit(): void {
    this.getApps();
  }

  onSelect(app: Application): void {
    this.selectedApp = app;
  }

}
