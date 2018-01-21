import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BbvaService } from '../../services/bbva/bbva.service';
import { MinubeService } from '../../services/minube/minube.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  zonas: any;
  userData: any;
  chartData: any;
  compras: any = 24;
  mediaAhorro: any = 1.25;
  periodo: any;
  porcentaje: any = 50;
  totalAhorro: any = "68€";
  ObjetivoTotal: any = 965;
  ObjetivoTotalMensual: any = 965;
  constructor(private activatedRouted: ActivatedRoute,
    private _BbvaService: BbvaService,
    private minube: MinubeService,
    private http: HttpClient
  ) {

  }

  ngOnInit() {
    this.compras = localStorage.getItem('numeroTrans');
    this.mediaAhorro = localStorage.getItem('periodoSelect');
    this.periodo = localStorage.getItem('periodo');

    this.ObjetivoTotalMensual = (this.ObjetivoTotal / this.periodo).toFixed();
    this.totalAhorro = this.compras * this.mediaAhorro;
    this.porcentaje = ((this.totalAhorro * 100) / this.ObjetivoTotal).toFixed();


    this.chartData = {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      datasets: [
        {
          label: 'Mi viaje',
          data: [5, 15, 25, 45, 45, 55, 60, 60, 60, 60, 70, 90, 95, 105, 130, 140, 140, 140, 145, 150, this.totalAhorro],
          fill: false,
          borderColor: '#605ca8'
        }
      ]
    };

    this.zonas = this.minube.getZones().subscribe(
      data => { console.log(data); });
    console.log(this.zonas);
    let params = new URLSearchParams(document.location.search.substring(1));
    let code = params.get("code");
    //this.userData = this._BbvaService.getFullInfo(code);
  }

}
