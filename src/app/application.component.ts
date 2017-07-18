import { Component, OnInit } from '@angular/core';

import { Application } from './application';
import { AppService } from './app.service';

@Component({
  selector: 'my-application',
  template: `
    <h2>My Applications</h2>
    <ul class="apps">
      <li *ngFor="let app of apps" [class.selected]="app === selectedApp" (click)="onSelect(app)">
          <span class="badge">{{app.id}}</span> {{app.name}}
      </li>
    </ul>
    <app-detail [app]="selectedApp"></app-detail>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .apps {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .apps li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .apps li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .apps li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .apps .text {
      position: relative;
      top: -3px;
    }
    .apps .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
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
