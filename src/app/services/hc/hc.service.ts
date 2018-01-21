import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HcService {
  results: any;
  constructor(public http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'authorization': 'Basic  YXBwLmJidmEuZXF1aXBvMTpsN0owbGFAQGY1elZMaVRJT2xGUVZ6TmpsdXBjTGF5U3ExOHluOUo3VGE3V3o4dW9aa2ROOVdubkFwUTl0Y3NP',
      'Content-Type': 'application/json',
      'Api-User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST',
      'Access-Control-Allow-Headers': 'authorization',
      'Access-Control-Allow-Credentials': 'true',
    });
    return headers;
  }

  getDestination(query: string) {
    let url = `http://sandbox.hotelscombined.com/api/2.0/hotels?destination=place:${query}&apikey=042E78D4-282D-41F5-AA8A-FAB22C9240F0&sessionid=testsession1&ClientIp=192.168.1.35&rooms=1&adults_1=2&checkin=2018-02-05&checkout=2018-02-15&ResponseOptions=destination%2Ctoprates%2Cimages`;
    console.log(url);
    return this.http.request('GET', url, { headers: this.getHeaders() }).subscribe(data => {
      this.results = data;
    });
  }

}
