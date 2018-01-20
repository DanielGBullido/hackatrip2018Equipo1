import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate
} from "@angular/router";

import { AuthenticationService } from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthenticationService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.isAuthenticated()) {
      console.log("guard OK");
      return true;
    } else {
      console.error("guard NOK")
      return false;
    }
  }

}
