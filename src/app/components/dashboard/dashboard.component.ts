import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any;
  constructor() {
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
  }

}
