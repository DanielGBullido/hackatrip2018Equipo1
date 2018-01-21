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
  constructor(private router: Router,  protected bbvaService: BbvaService) { }

  ngOnInit() {
// console.log('route', this.route);
console.log('router', this.router);
  }

  getInfoBbva() {
    this.bbvaService.getFullInfo(localStorage.getItem('token'));
  }

  calcular() {
    this.router.navigateByUrl(
      'https://connect.bbva.com/token/authorize?client_id=app.bbva.equipo1&response_type=code&redirect_uri=http://localhost:4200/dashboard');

}
}
