import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MinubeService {
  results: any;
  http: HttpClient;

<<<<<<< HEAD
  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'authorization': 'Basic  YXBwLmJidmEuZXF1aXBvMTpsN0owbGFAQGY1elZMaVRJT2xGUVZ6TmpsdXBjTGF5U3ExOHluOUo3VGE3V3o4dW9aa2ROOVdubkFwUTl0Y3NP',
      'Content-Type': 'application/json',
      'Api-User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'authorization',
      'Access-Control-Allow-Credentials': 'true',
    });
    return headers;
  }

  getZones(): Observable<any> {
    return new Observable(observer => {
      if (this.results) {
        observer.next(this.results);
        observer.complete();
        return;
      }
      let url = `http://papi.minube.com/zones?lang=es&country_id=164&api_key=y6mNny`;
      this.http.get(url, { headers: this.getHeaders() }).subscribe(result => {
        this.results = result;
        observer.next(this.results);
        observer.complete();
      });
    });
  }
=======
  constructor(http: HttpClient) {
    this.http = http;
   }
   getZones(): Observable<any> {
    let url = `http://papi.minube.com/zones?lang=es&country_id=164&api_key=y6mNny`;
    console.log(url);
return this.http.get(url, {
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
>>>>>>> f38f490d2027e82b8eb8bc4100c7a76a860af945


}
