import { Component, OnInit } from '@angular/core';
import { DeveloperService } from '../developer.service';

@Component({
  selector: 'app-dev-setup',
  templateUrl: './dev-setup.component.html',
  styleUrls: ['./dev-setup.component.scss']
})
export class DevSetupComponent implements OnInit {
  constructor(private developerService: DeveloperService) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.developerService.selectedMenu = 'setup library';
  }
}
