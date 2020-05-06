import { Component, OnInit } from '@angular/core';
import { DeveloperService } from '../developer.service';

@Component({
  selector: 'app-dev-sidebar',
  templateUrl: './dev-sidebar.component.html',
  styleUrls: ['./dev-sidebar.component.scss']
})
export class DevSidebarComponent implements OnInit {
  constructor(private developerService: DeveloperService) {}

  ngOnInit() {}
  isSelected(menu) {
    return menu === this.developerService.selectedMenu;
  }

  onSelect(menu: string) {
    this.developerService.selectedMenu = menu;
  }
}
