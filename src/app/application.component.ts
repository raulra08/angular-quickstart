import { Component, OnInit } from '@angular/core';

import { Application } from './application';
import { AppService } from './app.service';

import { Router } from '@angular/router';

@Component({
  selector: 'my-application',
  templateUrl: `./application.component.html`,
  styleUrls: [`./application.component.css`]
})

export class ApplicationComponent implements OnInit {
  apps: Application[];
  selectedApp: Application;

  constructor (
    private router: Router,
    private appService: AppService ) { }

  getApps(): void {
    this.appService.getApps().then(apps => this.apps = apps);
  }

  ngOnInit(): void {
    this.getApps();
  }

  onSelect(app: Application): void {
    this.selectedApp = app;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedApp.id]);
  }

}
