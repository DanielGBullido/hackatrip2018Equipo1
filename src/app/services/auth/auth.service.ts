import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {

  constructor(private router: Router) { }

  public login() {
    const expiresAt = JSON.stringify((9999999 * 1000) + new Date().getTime());
    localStorage.setItem('access_token', '311f7efe4137efe6ab3dde3434359740');
    localStorage.setItem('expires_at', expiresAt);
  }

  public handleAuthentication(): void {
    if (this.isAuthenticated()) {
      this.router.navigate(['/step1']);
      console.log("logued");
    } else {
      this.router.navigate(['/login']);
      console.log("not login");
    }
  }

  public logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');
    this.router.navigate(['/login']);
  }

  public isAuthenticated(): boolean {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    const access_token = localStorage.getItem('access_token');
    let isAuth = new Date().getTime() < expiresAt && access_token !== null;
    return isAuth;
  }
}
