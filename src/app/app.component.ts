import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>

    <a routerLink="/applications">Applications</a>
    <router-outlet></router-outlet>
  `
})

export class AppComponent {
  title = 'Digital Security Platform';
}
