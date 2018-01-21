import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class MinubeService {
  results: any;
  constructor(public http: HttpClient) { }

  getZones() {
    let url = `http://papi.minube.com/zones?lang=es&country_id=164&api_key=y6mNny`;
    console.log(url);
    return this.http.request('GET', url, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    }).subscribe(data => {
      this.results = data;
    });
  }


}
