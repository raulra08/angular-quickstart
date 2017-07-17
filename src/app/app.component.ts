import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <my-application></my-application>
  `
})

export class AppComponent {
  title = 'Digital Security Platform';
}
