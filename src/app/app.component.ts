import { Component } from '@angular/core';

import { Router, NavigationStart } from '@angular/router';


import { adminLteConf } from '../../config/admin-lte';
import { LayoutModule } from 'angular-admin-lte';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
