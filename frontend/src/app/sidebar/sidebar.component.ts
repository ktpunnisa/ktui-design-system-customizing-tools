import { Component, OnInit } from '@angular/core';
import { DscProjectService } from '../dsc-project.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor(private ProjectService: DscProjectService) {}

  ngOnInit() {}

  isSelected(menu) {
    return menu === this.ProjectService.selectedMenu;
  }

  onSelect(menu: string) {
    this.ProjectService.selectedMenu = menu;
  }
}
