import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {
  LabelShape,
  LabelSizeValue,
  InputShape,
  InputSizeValue,
  DInputState
} from 'src/app/dsc-input/dsc-input';
import { DscInputService } from 'src/app/dsc-input/dsc-input.service';
import { DscColorService } from 'src/app/color/dsc-color.service';

@Component({
  selector: 'app-demo-input',
  templateUrl: './demo-input.component.html',
  styleUrls: ['./demo-input.component.scss']
})
export class DemoInputComponent implements OnInit, OnChanges {
  @Input() label = 'Label';
  @Input() value = '';
  @Input() type = 'default';
  @Input() size = 'medium';
  @Input() isEnable = true;
  @Input() isError = false;
  state = 'normal';

  labelShape: LabelShape;
  labelSize: LabelSizeValue;

  inputShape: InputShape;
  inputSize: InputSizeValue;

  dInputType: DInputState;

  constructor(private InputService: DscInputService, private ColorService: DscColorService) {}

  ngOnInit() {
    this.setInitState();
  }

  ngOnChanges() {
    this.setInitState();
  }

  setLabel() {
    this.labelShape = this.InputService.dInputShape.label;
    this.labelSize = this.InputService.dInputSizes
      ? this.InputService.dInputSizes[this.size].label
      : undefined;
    this.dInputType = this.InputService.dInputTypes
      ? this.InputService.dInputTypes[this.type]
      : undefined;
  }

  setInput() {
    this.inputShape = this.InputService.dInputShape.input;
    this.inputSize = this.InputService.dInputSizes
      ? this.InputService.dInputSizes[this.size].input
      : undefined;
    this.dInputType = this.InputService.dInputTypes
      ? this.InputService.dInputTypes[this.type]
      : undefined;
  }

  setInitState() {
    if (this.isEnable) {
      if (this.isError) {
        this.setState('error', '');
      } else {
        this.setState('normal', '');
      }
    } else {
      this.setState('disabled', '');
    }
  }

  setState(state, mouse) {
    this.state = this.isEnable ? (this.isError ? 'error' : state) : 'disabled';
  }

  getColor(state, type, style) {
    const styleToken = this.dInputType[state][type][style];
    const mainColor = this.dInputType[state].mainColor;
    return this.ColorService.getColorShade(styleToken, mainColor);
  }
  getLabelStyle() {
    this.setLabel();
    if (!this.isEnable) {
      this.state = 'disabled';
    }
    const shape = this.inputShape
      ? {
          'margin-bottom': `${this.labelShape.margin.bottom}px`
        }
      : {};
    const size = this.inputSize
      ? {
          'font-size': `${this.labelSize.fontSize}px`,
          'font-weight': this.labelSize.fontWeight
        }
      : {};

    const type = this.getLabelState(this.state || 'normal');

    return { ...shape, ...size, ...type };
  }

  getLabelState(state) {
    return this.dInputType
      ? {
          color: this.getColor(state, 'label', 'font')
        }
      : {};
  }

  getInputStyle() {
    this.setInput();
    if (!this.isEnable) {
      this.state = 'disabled';
    }
    const shape = this.inputShape
      ? {
          width: '200px',
          'border-radius': `${this.inputShape.borderRadius}px`,
          'border-style': `${this.inputShape.borderStyle}`,
          'border-width': `${this.inputShape.borderWidth}px`
        }
      : {};
    const size = this.inputSize
      ? {
          'font-size': `${this.inputSize.fontSize}px`,
          'padding-top': `${this.inputSize.padding.top}px`,
          'padding-right': `${this.inputSize.padding.right}px`,
          'padding-bottom': `${this.inputSize.padding.bottom}px`,
          'padding-left': `${this.inputSize.padding.left}px`
        }
      : {};

    const type = this.getInputState(this.state || 'normal');

    return { ...shape, ...size, ...type };
  }

  getInputState(state) {
    return this.dInputType
      ? {
          color: this.getColor(state, 'input', 'font'),
          'background-color': this.getColor(state, 'input', 'background'),
          'border-color': this.getColor(state, 'input', 'border')
        }
      : {};
  }
}
