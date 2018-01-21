import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MinubeService {
  results: any;
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
   }
   getZones(): Observable<any> {
    let url = `http://papi.minube.com/zones?lang=es&country_id=164&api_key=y6mNny`;
    console.log(url);
return this.http.get(url, {observe: 'response',
  headers: new HttpHeaders()
    .set('Content-Type', 'application/json')
} );
}

  // getZones() {
  //   let url = `http://papi.minube.com/zones?lang=es&country_id=164&api_key=y6mNny`;
  //   console.log(url);
  //   return this.http.request('GET', url, {
  //     headers: new HttpHeaders()
  //       .set('Content-Type', 'application/json')
  //   }).subscribe(data => {
  //     this.results = data;
  //   });
  // }


}
