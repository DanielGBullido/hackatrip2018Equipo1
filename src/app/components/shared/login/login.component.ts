import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';


import { AuthenticationService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    this.auth.login();
  }

}
