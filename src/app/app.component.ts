import { Component } from '@angular/core';

@Component({

  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{application.name}} details!</h2>
    <div><label>id: </label>{{application.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="application.name" placeholder="name">
    </div>
  `
})

export class AppComponent  {
  title = 'Digital Security Platform';

  application: Application = {
    id: 1,
    name: 'Snapshot Version'
  };
}

export class Application {
  id: number;
  name: string;
}
