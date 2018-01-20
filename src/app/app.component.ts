import { Component } from '@angular/core';
import { BbvaService } from './bbva/bbva.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router, NavigationStart } from '@angular/router';


import { adminLteConf } from '../../config/admin-lte';
import { LayoutModule } from 'angular-admin-lte';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BbvaService]
})
export class AppComponent {
  title = 'app';
  constructor (protected bbvaService: BbvaService, private http: HttpClient) {
    this.getTest();
  }

  getTest() {
    // const YOURREDIRECTURI = 'https://apis.bbva.com/customers/v1/me-basic';
    // this.http.get(`https://connect.bbva.com/token/authorize?
    // client_id=app.bbva.equipo1
    // &response_type=code&
    // redirect_uri=${YOURREDIRECTURI}`, {
    //   headers: new HttpHeaders()
    //   .set('Authorization', `Basic app.bbva.equipo1:l7J0la@@f5zVLiTIOlFQVzNjlupcLaySq18yn9J7Ta7Wz8uoZkdN9WnnApQ9tcsO`)
    //   .set('Content-Type', 'application/json')
    // }).subscribe(data => {
    //   // data is now an instance of type ItemsResponse, so you can do this:
    //   let as = data;
    // });
    const YOURREDIRECTURI = 'https://apis.bbva.com/customers/v1/me-basic';
    this.http.get(`https://connect.bbva.com/token/authorize?client_id=app.bbva.equipo1&response_type=code&redirect_uri=${YOURREDIRECTURI}`).subscribe((data: any) => {
      // data is now an instance of type ItemsResponse, so you can do this:
      let as = data;
      this.http.get(`https://apis.bbva.com/customers-sbx/v1/me-basic`, {headers: new HttpHeaders()
        .set('Authorization', `jwt ${data.token}.`)
        .set('Content-Type', 'application/json')} ).subscribe((datas: any) => {
          let aser = datas;
        });
    });
    // let a = this.bbvaService.getBBVA(`https://apis.bbva.com/customers/v1/me-basic`);
  }
}
