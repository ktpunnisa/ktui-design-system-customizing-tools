import { Component, OnInit } from '@angular/core';
import { DscButtonService } from '../dsc-button.service';
import { ActivatedRoute } from '@angular/router';
import { DscColorService } from '../../dsc-color/dsc-color.service';
import { DscProjectService } from '../../dsc-project/dsc-project.service';

@Component({
  selector: 'app-dsc-button',
  templateUrl: './dsc-button.component.html',
  styleUrls: ['./dsc-button.component.scss']
})
export class DscButtonComponent implements OnInit {
  isEnable = true;

  constructor(
    private route: ActivatedRoute,
    protected ButtonService: DscButtonService,
    protected ColorService: DscColorService,
    private ProjectService: DscProjectService
  ) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.data.subscribe(data => {
      const project = data.project;
      this.ProjectService.currentProject = project;

      const colorToken = data.color;
      this.ColorService.colorThemes = colorToken.themes;
      this.ColorService.colorShades = colorToken.shades;

      const buttonToken = data.button;
      this.ButtonService.buttonShape = buttonToken.shape;
      this.ButtonService.buttonSizes = buttonToken.sizes;
      this.ButtonService.buttonTypes = buttonToken.types;
      this.ButtonService.buttonBaseSize = buttonToken.sizes.medium;
    });
    this.ButtonService.selected = {
      row: 'shape',
      col: 'shape'
    };
    this.ProjectService.selectedMenu = 'button';
  }

  changeSelected(event) {
    this.ButtonService.selected = event;
  }

  changeEnable(event) {
    this.isEnable = event;
  }
}
