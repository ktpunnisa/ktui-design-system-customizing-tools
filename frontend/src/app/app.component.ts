import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'design-system-customization';

  sideHiddenRoutes = ['project', 'developer'];
  devSideShowRoutes = ['developer'];

  constructor(private router: Router) {}

  get showSide() {
    const path = this.router.url.split('?')[0];
    const subPath = path.split('/')[1];
    return this.sideHiddenRoutes.indexOf(subPath) === -1;
  }

  get showDevSide() {
    const path = this.router.url.split('?')[0];
    const subPath = path.split('/')[1];
    return this.sideHiddenRoutes.indexOf(subPath) !== -1;
  }
}
