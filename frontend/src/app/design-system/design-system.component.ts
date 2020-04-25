import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DscButtonService } from '../dsc-button/dsc-button.service';
import { DscColorService } from '../dsc-color/dsc-color.service';

@Component({
  selector: 'app-design-system',
  templateUrl: './design-system.component.html',
  styleUrls: ['./design-system.component.scss']
})
export class DesignSystemComponent implements OnInit {
  isEnable = true;

  constructor(
    private route: ActivatedRoute,
    protected ButtonService: DscButtonService,
    protected ColorService: DscColorService
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      const colorToken = data.color;
      this.ColorService.colorThemes = colorToken.themes;
      this.ColorService.colorShades = colorToken.shades;

      const buttonToken = data.button;
      this.ButtonService.buttonShape = buttonToken.shape;
      this.ButtonService.buttonSizes = buttonToken.sizes;
      this.ButtonService.buttonTypes = buttonToken.types;
      this.ButtonService.buttonBaseSize = buttonToken.sizes.medium;
    });
  }

  changeEnable(event) {
    this.isEnable = event;
  }
}
