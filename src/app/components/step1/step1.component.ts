import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { window } from 'rxjs/operators/window';

import { HcService } from '../../services/hc/hc.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {
  ciudad: string;
  results: any;


  direcciones: Array<any> = [];
  listFiltradaDirecciones: Array<any> = [];
  listDireccionesInit: Array<any> = [];

  constructor(private router: Router, public hc: HcService) {
    this.ciudad = '';
    const ciudadLocalStorage = localStorage.getItem('cuidad');
    if (ciudadLocalStorage) {
      this.ciudad = ciudadLocalStorage;
    }
  }

  ngOnInit() {
  }


  filterDirecciones(event) {
    this.listFiltradaDirecciones = [];

    this.listDireccionesInit.filter((item) => {
      if (item.toUpperCase().indexOf(event.query.toUpperCase()) === 0) {
        this.listFiltradaDirecciones.push(item);
      }
    });
  }

  search($event) {
    let q = $event.target.value;
    this.results = this.hc.getDestination(q);

  }

  go() {
    this.router.navigate(['/step2']);
    localStorage.setItem('cuidad', this.ciudad);

  }

}
