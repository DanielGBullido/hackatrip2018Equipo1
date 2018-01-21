import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BbvaService {
  http: HttpClient;
  results: any;
  constructor(http: HttpClient) {
    this.http = http;
  }

  getBBVA(YOURREDIRECTURI: string) {
    this.http.get(`https://connect.bbva.com/token/authorize?
    client_id=app.bbva.equipo1
    &response_type=code&
    redirect_uri=http://localhost:4200/step3`, {
        headers: new HttpHeaders()
          .set('Authorization', `l7J0la@@f5zVLiTIOlFQVzNjlupcLaySq18yn9J7Ta7Wz8uoZkdN9WnnApQ9tcsO`)
          .set('Content-Type', 'application/json')
      }).subscribe(data => {
        // data is now an instance of type ItemsResponse, so you can do this:
        this.results = data;
      });
  }
  getFullInfo(token: string) {
    const body = '';
    this.http.post(`https://connect.bbva.com/token?grant_type=authorization_code&code=${localStorage.getItem('token')}&redirect_uri=http://localhost:4200/step3`, body, {
        headers: new HttpHeaders().set('Authorization', `Basic YXBwLmJidmEuZXF1aXBvMTpsN0owbGFAQGY1elZMaVRJT2xGUVZ6TmpsdXBjTGF5U3ExOHluOUo3VGE3V3o4dW9aa2ROOVdubkFwUTl0Y3NP`).set('Content-Type', 'application/json'),
      }).subscribe((data: any) => {
        // data is now an instance of type ItemsResponse, so you can do this:
        this.results = data.access_token;
        this.http.get('https://apis.bbva.com/cards-sbx/v2/me/cards', {
          headers: new HttpHeaders()
            .set('Authorization', `jwt ${this.results}`)
            .set('Content-Type', 'application/json')
        }).subscribe((dataa: any) => {
          // data is now an instance of type ItemsResponse, so you can do this:
  
          dataa.data.cards.forEach(element => {
            this.http.get(`https://apis.bbva.com/cards-sbx/v2/me/cards/${element.id}/transactions`, {
              headers: new HttpHeaders()
                .set('Authorization', `jwt ${this.results}`)
                .set('Content-Type', 'application/json')
            }).subscribe((datas: any) => {
              // data is now an instance of type ItemsResponse, so you can do this:
              if (datas.data.cardTransactions.length) {
                localStorage.setItem('numeroTrans', datas.data.cardTransactions.length);
              }
            });
          });

        });
      });

  }

  postBBVA(YOURCODE: string, YOURREDIRECTURI: string, YOURAPPCREDENTIALS: any, body: any) {
    this.http.post(`https://connect.bbva.com/token?grant_type=authorization_code&
    code=${YOURCODE}&
    redirect_uri=${YOURREDIRECTURI}`, body, {
        headers: new HttpHeaders().set('Authorization', `l7J0la@@f5zVLiTIOlFQVzNjlupcLaySq18yn9J7Ta7Wz8uoZkdN9WnnApQ9tcsO
      `).set('Content-Type', 'application/json'),
      }).subscribe(data => {
        // data is now an instance of type ItemsResponse, so you can do this:
        this.results = data;
      });
  }


}
