import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MiddleComponent } from './middle/middle.component';
import { AuFaInputComponent } from './au-fa-input/au-fa-input.component';
import { InputRefDirective } from './directives/input-ref.directive';
import { HttpService } from './services/http.service';

import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MiddleComponent,
    AuFaInputComponent,
    InputRefDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
