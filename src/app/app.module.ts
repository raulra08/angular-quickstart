import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AppDetailComponent }  from './app-detail.component';
import { ApplicationComponent }  from './application.component';
import { AppService } from './app.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  declarations: [
    AppComponent,
    AppDetailComponent,
    ApplicationComponent
  ],
  providers: [
    AppService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
