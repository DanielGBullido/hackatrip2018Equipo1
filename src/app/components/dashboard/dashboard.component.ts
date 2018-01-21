import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

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
  totalAhorro: any = "68€";
  ObjetivoTotal: any = 118;
  constructor(private activatedRouted: ActivatedRoute,
    private _BbvaService: BbvaService,
    private minube: MinubeService
  ) {
    this.chartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Mi viaje',
          data: [65, 100, 128, 150, 210, 230],
          fill: false,
          borderColor: '#605ca8'
        },
        {
          label: 'Second Dataset',
          data: [300, 300, 300, 300, 300, 300, 300],
          fill: false,
          borderColor: '#565656'
        }
      ]
    };
  }

  ngOnInit() {
    this.zonas = this.minube.getZones().subscribe(data => {console.log(data); });
    console.log(this.zonas);
    let params = new URLSearchParams(document.location.search.substring(1));
    let code = params.get("code");
    //this.userData = this._BbvaService.getFullInfo(code);
  }

}
