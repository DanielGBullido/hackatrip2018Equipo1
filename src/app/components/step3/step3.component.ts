import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { BbvaService } from '../../services/bbva/bbva.service';
import { HcService } from '../../services/hc/hc.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {
  ahorroInput = 0;
  ahorro: number = 1000;
  cantidadparaahorrar: any;
  movimientos: any = 31;
  display = false;
  duracion: any = 10;
  redondeo: any;
  periodo: any;
  peridoSelect: any;
  dato1: any;
  dato2: any;
  dato3: any;
  constructor(private router: Router, protected bbvaService: BbvaService, protected hcService: HcService) {
    //media precio hotel
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
    // this.getDestination(localStorage.getItem('ciudad'));
    // console.log('route', this.route);
    console.log('router', this.router);
    this.duracion = localStorage.getItem('duracion');
    this.periodo = localStorage.getItem('periodo');

    this.cantidadparaahorrar = this.ahorro / this.periodo;
    this.dato1 = Math.floor(this.cantidadparaahorrar / this.movimientos);

    this.cantidadparaahorrar = this.ahorro / (this.periodo - 2);
    this.dato2 = Math.floor(this.cantidadparaahorrar / this.movimientos);

    this.cantidadparaahorrar = this.ahorro / (this.periodo - 4);
    this.dato3 = Math.floor(this.cantidadparaahorrar / this.movimientos);

    this.getInfoBbva(localStorage.getItem('token'));
  }

  getInfoBbva(token: string) {
    const fullinfo = this.bbvaService.getFullInfo(token);
    console.log('infobbva: ', fullinfo);
  }
  getDestination(destination: string) {
    let destinatios = '';
    this.hcService.getDestination('Porto').subscribe(data => {
      destinatios = data;
    });
    console.log('infoDestino: ', destinatios);
  }

  getData() {
    localStorage.setItem('periodoSelect', this.peridoSelect);
  }

  calcular() {
    this.router.navigateByUrl(
      'https://connect.bbva.com/token/authorize?client_id=app.bbva.equipo1&response_type=code&redirect_uri=http://localhost:4200/dashboard');

  }
}
