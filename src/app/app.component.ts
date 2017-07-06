import { Component } from '@angular/core';

@Component({
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
  `],
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>

    <h2>My Heroes</h2>
    <ul class="apps">
      <li *ngFor="let app of apps">
          <span class="badge">{{app.id}}</span> {{app.name}}
      </li>
    </ul>
  `
})

export class AppComponent  {
  title = 'Digital Security Platform';
  apps = APPS;
}

export class Application {
  id: number;
  name: string;
}

const APPS: Application[] = [
    { id: 1, name: 'DSP' },
    { id: 2, name: 'Narco' },
    { id: 3, name: 'Bombasto' },
    { id: 4, name: 'Celeritas' }
  ];

