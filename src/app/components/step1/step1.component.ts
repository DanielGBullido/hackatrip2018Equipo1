import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { window } from 'rxjs/operators/window';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {
  ciudad: string;
  constructor(private router: Router) {
    this.ciudad = '';
    const ciudadLocalStorage = localStorage.getItem('cuidad');
    if (ciudadLocalStorage) {
      this.ciudad = ciudadLocalStorage;
    }
  }

  ngOnInit() {
  }

  go() {
    this.router.navigate(['/step2']);
    localStorage.setItem('cuidad', this.ciudad);

  }

}
