import { Component, OnInit } from '@angular/core';
import { DscButtonService } from './dsc-button.service';
import { ActivatedRoute } from '@angular/router';
import { DscColorService } from '../dsc-color/dsc-color.service';

@Component({
  selector: 'app-dsc-button',
  templateUrl: './dsc-button.component.html',
  styleUrls: ['./dsc-button.component.scss']
})
export class DscButtonComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    protected ButtonService: DscButtonService,
    private ColorService: DscColorService
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
}
