import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DscInputService } from './dsc-input.service';
import { DscColorService } from '../dsc-color/dsc-color.service';
import { DscProjectService } from '../dsc-project/dsc-project.service';

@Component({
  selector: 'app-dsc-input',
  templateUrl: './dsc-input.component.html',
  styleUrls: ['./dsc-input.component.scss']
})
export class DscInputComponent implements OnInit {
  isEnable = true;

  constructor(
    private route: ActivatedRoute,
    protected InputService: DscInputService,
    protected ColorService: DscColorService,
    private ProjectService: DscProjectService
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      const colorToken = data.color;
      this.ColorService.colorThemes = colorToken.themes;
      this.ColorService.colorShades = colorToken.shades;

      const inputToken = data.input;
      this.InputService.dInputShape = inputToken.shape;
      this.InputService.dInputSizes = inputToken.sizes;
      this.InputService.dInputTypes = inputToken.types;
      this.InputService.dInputBaseSize = inputToken.sizes.medium;
    });
    this.InputService.selected = {
      row: 'shape',
      col: 'shape'
    };
    this.ProjectService.selectedMenu = 'input';
  }

  changeSelected(event) {
    this.InputService.selected = event;
  }

  changeEnable(event) {
    this.isEnable = event;
  }
}
