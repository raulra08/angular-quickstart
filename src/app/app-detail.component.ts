import { Component, OnInit, Input } from '@angular/core';
import { Application } from './application';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { AppService } from './app.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-detail',
  templateUrl: `./app-detail.component.html`
})

export class AppDetailComponent implements OnInit {
  @Input() app: Application;

  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  // The app id is a number. Route parameters are always strings. So the route parameter value is converted to a number with the JavaScript (+) operator.
  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.appService.getApp(+params.get('id')))
      .subscribe(app => this.app = app);
  }

  goBack(): void {
    this.location.back();
  }
}
