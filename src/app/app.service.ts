import { Injectable } from '@angular/core';

import { Application } from './application';
import { APPS } from './mock-apps';

@Injectable()

export class AppService {
  getApps(): Promise<Application[]> {
    return Promise.resolve(APPS);
  }
}
