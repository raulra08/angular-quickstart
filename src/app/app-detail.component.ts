import { Component, Input } from '@angular/core';
import { Application } from './application';

@Component({
  selector: 'app-detail',
  template: `
    <div *ngIf="app">
      <h2>{{app.name}} details!</h2>
      <div><label>id: </label>{{app.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="app.name" placeholder="name"/>
      </div>
    </div>
  `
})

export class AppDetailComponent {
  @Input() app: Application;
}
