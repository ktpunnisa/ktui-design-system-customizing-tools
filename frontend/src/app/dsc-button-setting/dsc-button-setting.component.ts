import { Component, OnInit } from '@angular/core';
import { DscButtonService } from '../dsc-button/dsc-button.service';
import { ButtonShape, ButtonSizeValue, ButtonStyle } from '../dsc-button/dsc-button';
import { DscColorService } from '../dsc-color/dsc-color.service';

@Component({
  selector: 'app-dsc-button-setting',
  templateUrl: './dsc-button-setting.component.html',
  styleUrls: ['./dsc-button-setting.component.scss']
})
export class DscButtonSettingComponent implements OnInit {
  mainColor: string;

  constructor(protected ButtonService: DscButtonService, protected ColorService: DscColorService) {}

  ngOnInit() {
    this.mainColor = 'primary';
  }

  get isShapeSetting() {
    const row = this.ButtonService.selected.row;
    return this.ButtonService.shapeName.includes(row);
  }

  get isSizeSetting() {
    const row = this.ButtonService.selected.row;
    return this.ButtonService.sizeName.includes(row);
  }

  get isTypeSetting() {
    const row = this.ButtonService.selected.row;
    return this.ButtonService.states.includes(row);
  }

  get buttonShape() {
    if (this.isShapeSetting) {
      return this.ButtonService.buttonShape;
    }
    return undefined;
  }

  get buttonSize() {
    if (this.isSizeSetting) {
      const size = this.ButtonService.selected.col;
      return this.ButtonService.buttonSizes ? this.ButtonService.buttonSizes[size] : undefined;
    }
    return undefined;
  }

  get buttonState() {
    if (this.isTypeSetting) {
      const state = this.ButtonService.selected.row;
      const type = this.ButtonService.selected.col;
      return this.ButtonService.buttonTypes
        ? this.ButtonService.buttonTypes[type][state]
        : undefined;
    }
    return undefined;
  }

  changeShape(event, type) {
    this.ButtonService.buttonShape[type] = event;
  }

  changeSize(event, type) {
    const size = this.ButtonService.selected.col;
    this.ButtonService.buttonSizes[size][type] = event;
  }
}
