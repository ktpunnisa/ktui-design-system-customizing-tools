import { Component, OnInit } from '@angular/core';
import { DscInputService } from '../dsc-input.service';
import { DscColorService } from '../../foundation-color/dsc-color.service';

@Component({
  selector: 'app-dsc-input-setting',
  templateUrl: './dsc-input-setting.component.html',
  styleUrls: ['./dsc-input-setting.component.scss']
})
export class DscInputSettingComponent implements OnInit {
  constructor(protected InputService: DscInputService, protected ColorService: DscColorService) {}

  ngOnInit() {}

  get isShapeSetting() {
    const row = this.InputService.selected.row;
    return this.InputService.shapeName.includes(row);
  }

  get isSizeSetting() {
    const row = this.InputService.selected.row;
    return this.InputService.sizeName.includes(row);
  }

  get isTypeSetting() {
    const row = this.InputService.selected.row;
    return this.InputService.states.includes(row);
  }

  get labelShape() {
    if (this.isShapeSetting) {
      return this.InputService.dInputShape.label;
    }
    return undefined;
  }

  get inputShape() {
    if (this.isShapeSetting) {
      return this.InputService.dInputShape.input;
    }
    return undefined;
  }

  get labelSize() {
    if (this.isSizeSetting) {
      const size = this.InputService.selected.col;
      return this.InputService.dInputSizes ? this.InputService.dInputSizes[size].label : undefined;
    }
    return undefined;
  }

  get inputSize() {
    if (this.isSizeSetting) {
      const size = this.InputService.selected.col;
      return this.InputService.dInputSizes ? this.InputService.dInputSizes[size].input : undefined;
    }

    return undefined;
  }

  get mainColorState() {
    if (this.isTypeSetting) {
      const state = this.InputService.selected.row;
      const type = this.InputService.selected.col;
      return this.InputService.dInputTypes
        ? this.InputService.dInputTypes[type][state].mainColor
        : undefined;
    }
    return undefined;
  }

  get labelState() {
    if (this.isTypeSetting) {
      const state = this.InputService.selected.row;
      const type = this.InputService.selected.col;
      return this.InputService.dInputTypes
        ? this.InputService.dInputTypes[type][state].label
        : undefined;
    }
    return undefined;
  }

  get inputState() {
    if (this.isTypeSetting) {
      const state = this.InputService.selected.row;
      const type = this.InputService.selected.col;
      return this.InputService.dInputTypes
        ? this.InputService.dInputTypes[type][state].input
        : undefined;
    }
    return undefined;
  }

  changeShape(event, dType, style, valueType) {
    if (dType === 'label' && style === 'margin') {
      this.InputService.dInputShape[dType][style].bottom = event;
    } else {
      this.InputService.dInputShape[dType][style] = event;
    }
    if (valueType === 'output') {
      this.InputService.updateInputToken(
        '5e9d79ea81f8ad60d9c429df',
        this.InputService.dInputShape,
        null,
        null
      ).subscribe(res => {
        console.log('update input shape');
      });
    }
  }

  changeSize(event, dType, style, valueType) {
    const size = this.InputService.selected.col;
    this.InputService.dInputSizes[size][dType][style] = event;
    if (valueType === 'output') {
      this.InputService.updateInputToken(
        '5e9d79ea81f8ad60d9c429df',
        null,
        this.InputService.dInputSizes,
        null
      ).subscribe(res => {
        console.log('update input size');
      });
    }
  }

  changeType(event, dType, style, valueType) {
    const state = this.InputService.selected.row;
    const type = this.InputService.selected.col;
    if (dType === 'mainColor') {
      this.InputService.dInputTypes[type][state][dType] = event;
    } else {
      const inputStyle = this.convertToInputType(event);
      this.InputService.dInputTypes[type][state][dType][style] = inputStyle;
    }
    if (valueType === 'output') {
      this.InputService.updateInputToken(
        '5e9d79ea81f8ad60d9c429df',
        null,
        null,
        this.InputService.dInputTypes
      ).subscribe(res => {
        console.log('update type');
      });
    }
  }

  convertToInputType(event) {
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
