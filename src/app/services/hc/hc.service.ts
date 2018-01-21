import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HcService {
  results: any;
  constructor(public http: HttpClient) { }

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


  getDestination(query: string): Observable<any> {
    this.http.get("../jsons/hc.json").subscribe(json => {
      console.log(json);
      localStorage.setItem('autocomplete', JSON.stringify(json));
    });

    return new Observable(observer => {
      if (this.results) {
        observer.next(this.results);
        observer.complete();
        return;
      }
      let url = `http://sandbox.hotelscombined.com/api/2.0/hotels?destination=place:${query}&apikey=042E78D4-282D-41F5-AA8A-FAB22C9240F0&sessionid=testsession1&ClientIp=192.168.1.35&rooms=1&adults_1=2&checkin=2018-02-05&checkout=2018-02-15&ResponseOptions=destination%2Ctoprates%2Cimages`;
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
