import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { BbvaService } from '../../services/bbva/bbva.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {
  ahorroInput = 0;
  ahorro: number;
  display = false;
  constructor(private router: Router,  protected bbvaService: BbvaService) {
    router.events.subscribe(
      event => {
        const urlStep3: string = event['url'];
        if (urlStep3) {
          const token = urlStep3.substring(12);
          localStorage.setItem('token', token);
          // this.router.navigate(['/step3']);
          console.log(token);
          
        }
        console.log(event['url']);
      }
    );
   }

  ngOnInit() {
// console.log('route', this.route);
console.log('router', this.router);
this.getInfoBbva(localStorage.getItem('token'));
  }

  getInfoBbva(token: string) {
    const fullinfo = this.bbvaService.getFullInfo(token);
  }

  calcular() {
    this.router.navigateByUrl(
      'https://connect.bbva.com/token/authorize?client_id=app.bbva.equipo1&response_type=code&redirect_uri=http://localhost:4200/dashboard');

}
}
