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
  const duracion: number;
  constructor(private router: Router) { }

  ngOnInit() {
    var slider = document.getElementById("duration");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;
    slider.oninput = function() {
      output.innerHTML = slider.value;
      localStorage.setItem('duracion', slider.value);
    }
  }

  go() {
    localStorage.setItem('fecha', this.fecha.toString());
    localStorage.setItem('fecha', this.periodo);
    // this.router.navigateByUrl(
    //   'https://connect.bbva.com/token/authorize?client_id=app.bbva.equipo1&response_type=code&redirect_uri=http://localhost:4200/step3');
    // this.router.navigate(['/step3']);
  }

  duracionGuardar(value) {
    this.duracion = value;
  }

}
