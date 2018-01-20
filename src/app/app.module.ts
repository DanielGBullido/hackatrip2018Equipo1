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
import { BbvaService } from './services/bbva/bbva.service';
import { AuthenticationService } from './services/auth/auth.service';
import { LoginComponent } from './components/shared/login/login.component';
import { LoginBankComponent } from './components/shared/login-bank/login-bank.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Step1Component } from './components/step1/step1.component';
import { Step2Component } from './components/step2/step2.component';
import { DropdownModule } from 'angular-admin-lte';
import { Step3Component } from './components/step3/step3.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginBankComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    Step1Component,
    Step2Component,
    Step3Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LayoutModule.forRoot(adminLteConf),
    FormsModule,
    HttpClientModule,
    DropdownModule,
    APP_ROUTING
  ],
  providers: [
    BbvaService,
    AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
