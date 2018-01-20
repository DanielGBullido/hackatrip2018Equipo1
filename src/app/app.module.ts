import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

/*****ROUTES******/
import { APP_ROUTING } from './app.routes';

import { LayoutModule } from 'angular-admin-lte';    //Loading layout module
import { BoxModule } from 'angular-admin-lte';
import { adminLteConf } from '../../config/admin-lte';


import { AppComponent } from './app.component';
import { BbvaService } from './bbva/bbva.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LayoutModule.forRoot(adminLteConf),
    FormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [BbvaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
