import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { BbvaService } from '../../services/bbva/bbva.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any;
  constructor(private activatedRouted: ActivatedRoute, private _BbvaService: BbvaService) {
    this.data = {
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
    let params = new URLSearchParams(document.location.search.substring(1));
    let code = params.get("code");
    console.log(code);
  }



}
