import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { AppDetailComponent }  from './app-detail.component';
import { ApplicationComponent }  from './application.component';
import { AppService } from './app.service';

import { AppRoutingModule }   from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    AppRoutingModule
  ],
  declarations: [ AppComponent, DashboardComponent, AppDetailComponent, ApplicationComponent ],
  providers: [ AppService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
