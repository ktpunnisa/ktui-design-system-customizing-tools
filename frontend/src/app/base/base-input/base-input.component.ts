import { Component, OnInit, Input } from '@angular/core';
import { DscInputService } from 'src/app/dsc-input/dsc-input.service';
import { DscColorService } from 'src/app/color/dsc-color.service';
import {
  InputShape,
  InputSizeValue,
  InputStyle,
  LabelShape,
  LabelSizeValue,
  LabelStyle
} from 'src/app/dsc-input/dsc-input';

@Component({
  selector: 'app-base-input',
  templateUrl: './base-input.component.html',
  styleUrls: ['./base-input.component.scss']
})
export class BaseInputComponent implements OnInit {
  @Input() setting = 'shape';
  @Input() size = 'medium';
  @Input() type = 'default';
  @Input() state = 'normal';
  base = {
    font: 'black',
    background: '#C1D5FA',
    border: '#99B5FC'
  };
  labelShape: LabelShape;
  labelSize: LabelSizeValue;
  labelStyle: LabelStyle;

  inputShape: InputShape;
  inputSize: InputSizeValue;
  inputStyle: InputStyle;

  constructor(private InputService: DscInputService, private ColorService: DscColorService) {}

  ngOnInit() {}

  setLabel() {
    this.labelShape = this.InputService.dInputShape.label;
    this.labelSize = this.InputService.dInputSizes
      ? this.InputService.dInputSizes[this.size].label
      : undefined;
    this.labelStyle = this.InputService.dInputTypes
      ? this.InputService.dInputTypes[this.type][this.state].label
      : undefined;
  }
  setInput() {
    this.inputShape = this.InputService.dInputShape.input;
    this.inputSize = this.InputService.dInputSizes
      ? this.InputService.dInputSizes[this.size].input
      : undefined;
    this.inputStyle = this.InputService.dInputTypes
      ? this.InputService.dInputTypes[this.type][this.state].input
      : undefined;
  }

  getColor(type, style) {
    const styleToken = type === 'label' ? this.labelStyle[style] : this.inputStyle[style];
    const mainColor = this.InputService.dInputTypes[this.type][this.state].mainColor;
    return this.ColorService.getColorShade(styleToken, mainColor);
  }

  getLabelStyle() {
    this.setLabel();
    const shape = this.labelShape
      ? {
          'margin-bottom': `${this.labelShape.margin.bottom}px`
        }
      : {};
    const size =
      this.labelSize && this.InputService.dInputBaseSize
        ? {
            'font-size':
              this.setting === 'size'
                ? `${this.labelSize.fontSize}px`
                : `${this.InputService.dInputBaseSize.label.fontSize}px`,
            'font-weight':
              this.setting === 'size'
                ? this.labelSize.fontWeight
                : this.InputService.dInputBaseSize.label.fontWeight
          }
        : {};
    const type = this.inputStyle
      ? {
          color: this.setting === 'type' ? this.getColor('label', 'font') : this.base.font
        }
      : {};
    return { ...shape, ...size, ...type };
  }

  getInputStyle() {
    this.setInput();
    const shape = this.inputShape
      ? {
          width: '200px',
          'border-radius': `${this.inputShape.borderRadius}px`,
          'border-style': `${this.inputShape.borderStyle}`,
          'border-width': `${this.inputShape.borderWidth}px`
        }
      : {};
    const size =
      this.inputSize && this.InputService.dInputBaseSize
        ? {
            'font-size':
              this.setting === 'size'
                ? `${this.inputSize.fontSize}px`
                : `${this.InputService.dInputBaseSize.input.fontSize}px`,
            'padding-top':
              this.setting === 'size'
                ? `${this.inputSize.padding.top}px`
                : `${this.InputService.dInputBaseSize.input.padding.top}px`,
            'padding-right':
              this.setting === 'size'
                ? `${this.inputSize.padding.right}px`
                : `${this.InputService.dInputBaseSize.input.padding.right}px`,
            'padding-bottom':
              this.setting === 'size'
                ? `${this.inputSize.padding.bottom}px`
                : `${this.InputService.dInputBaseSize.input.padding.bottom}px`,
            'padding-left':
              this.setting === 'size'
                ? `${this.inputSize.padding.left}px`
                : `${this.InputService.dInputBaseSize.input.padding.left}px`
          }
        : {};
    const type = this.inputStyle
      ? {
          color: this.setting === 'type' ? this.getColor('input', 'font') : this.base.font,
          'background-color':
            this.setting === 'type' ? this.getColor('input', 'background') : this.base.background,
          'border-color':
            this.setting === 'type' ? this.getColor('input', 'border') : this.base.border
        }
      : {};
    return { ...shape, ...size, ...type };
  }
}
