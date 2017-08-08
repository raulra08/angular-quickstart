import { Component, OnInit } from '@angular/core';

import { Application } from './application';
import { AppService } from './app.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

  apps: Application[] = [];

  constructor(private appService: AppService) { }

  getApps(): void {
    this.appService.getApps().then(apps => this.apps = apps.slice(0,3));
  }

  ngOnInit(): void {
    this.getApps();
  }
}
