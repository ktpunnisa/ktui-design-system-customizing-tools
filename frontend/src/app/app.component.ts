import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'design-system-customization';

  sideHiddenRoutes = ['/project'];

  constructor(private router: Router) {}

  get showSide() {
    const path = this.router.url.split('?')[0];
    return this.sideHiddenRoutes.indexOf(path) === -1;
  }
}
