import { Component, OnInit } from '@angular/core';
import { DscButtonService } from '../button.service';
import { DscColorService } from '../../foundation-color/color.service';

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

  changeShape(event, style, type) {
    this.ButtonService.buttonShape[style] = event;
    if (type === 'output') {
      this.ButtonService.updateButtonToken(
        '5e9d79ea81f8ad60d9c429df',
        this.ButtonService.buttonShape,
        null,
        null
      ).subscribe(res => {
        console.log('update button shape');
      });
    }
  }

  changeSize(event, style, type) {
    const size = this.ButtonService.selected.col;
    this.ButtonService.buttonSizes[size][style] = event;
    if (type === 'output') {
      this.ButtonService.updateButtonToken(
        '5e9d79ea81f8ad60d9c429df',
        null,
        this.ButtonService.buttonSizes,
        null
      ).subscribe(res => {
        console.log('update button size');
      });
    }
  }

  changeType(event, style, valueType) {
    const state = this.ButtonService.selected.row;
    const type = this.ButtonService.selected.col;
    const buttonStyle = this.convertToButtonType(event);
    this.ButtonService.buttonTypes[type][state][style] = buttonStyle;
    if (valueType === 'output') {
      this.ButtonService.updateButtonToken(
        '5e9d79ea81f8ad60d9c429df',
        null,
        null,
        this.ButtonService.buttonTypes
      ).subscribe(res => {
        console.log('update type');
      });
    }
  }

  convertToButtonType(event) {
    if (event.color === 'transparent') {
      return {
        type: 'transparent',
        color: '',
        shade: ''
      };
    }
    if (this.ColorService.naturalColors.includes(event.color)) {
      return {
        type: 'fixed',
        color: event.color,
        shade: event.shade
      };
    }
    return {
      type: 'custom',
      color: '',
      shade: event.shade
    };
  }
}
