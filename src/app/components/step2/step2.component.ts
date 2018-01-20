import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {
  fecha: Date = new Date();
  periodo: string;
  duracion: number;
  constructor(private router: Router) { }

  ngOnInit() {

  }

  go() {
    localStorage.setItem('fecha', this.fecha.toString());
    localStorage.setItem('fecha', this.periodo);
    this.router.navigate(['/step3']);
  }

  duracionGuardar(value) {
    this.duracion = value;
  }

}
