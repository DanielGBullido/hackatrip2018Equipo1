import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class MinubeService {
  results: any;
  http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }

  authHeaders() {
    let username: string = 'xxxx';
    let password: string = 'xxxx';

    let token: string = btoa(username + ":" + password);

    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Access-Control-Expose-Headers', 'Authorization');
    headers.append('Authorization', 'Basic ' + token);
    headers.append("Access-Control-Allow-Origin", "http://localhost:4200/");
    headers.append("Access-Control-Allow-Methods", "*");
    headers.append("Access-Control-Allow-Headers", "Accept,Accept-Charset,Accept-Encoding,Accept-Language,Authorization,Connection,Content-Type,Cookie,DNT,Host,Keep-Alive,Origin,Referer,User-Agent,X-CSRF-Token,X-Requested-With");
    headers.append("Access-Control-Allow-Credentials", "true");

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
      this.http.get(url, {
        headers: this.authHeaders()
      }).subscribe(result => {
        this.results = result;
        observer.next(this.results);
        observer.complete();
      });
    });
  }


}
