import { Injectable } from '@angular/core';

import { Application } from './application';
import { APPS } from './mock-apps';

@Injectable()

export class AppService {
  getApps(): Promise<Application[]> {
    return Promise.resolve(APPS);
  }

  getApp(id: number): Promise<Application> {
    return this.getApps()
             .then(apps => apps.find(app => app.id === id));
  }
}
