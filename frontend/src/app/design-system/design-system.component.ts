import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DscButtonService } from '../dsc-button/dsc-button.service';
import { DscColorService } from '../dsc-color/dsc-color.service';
import { DscProjectService } from '../dsc-project/dsc-project.service';
import { DscLinkService } from '../dsc-link/dsc-link.service';
import { DscInputService } from '../dsc-input/dsc-input.service';

@Component({
  selector: 'app-design-system',
  templateUrl: './design-system.component.html',
  styleUrls: ['./design-system.component.scss']
})
export class DesignSystemComponent implements OnInit {
  isEnable = true;

  constructor(
    private route: ActivatedRoute,
    private ProjectService: DscProjectService,
    protected ColorService: DscColorService,
    protected ButtonService: DscButtonService,
    protected LinkService: DscLinkService,
    protected InputService: DscInputService
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

      const linkToken = data.link;
      this.LinkService.linkSizes = linkToken.sizes;
      this.LinkService.linkTypes = linkToken.types;
      this.LinkService.linkBaseSize = linkToken.sizes.medium;

      const inputToken = data.input;
      this.InputService.dInputShape = inputToken.shape;
      this.InputService.dInputSizes = inputToken.sizes;
      this.InputService.dInputTypes = inputToken.types;
      this.InputService.dInputBaseSize = inputToken.sizes.medium;
    });
    this.ProjectService.selectedMenu = 'design system';
  }

  changeEnable(event) {
    this.isEnable = event;
  }
}
