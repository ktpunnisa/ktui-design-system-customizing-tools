import { Component, OnInit, Input } from '@angular/core';
import { DscButtonService } from 'src/app/dsc-button/dsc-button.service';
import { ButtonSizeValue, ButtonStyle, ButtonShape } from 'src/app/dsc-button/dsc-button';

@Component({
  selector: 'app-base-button',
  templateUrl: './base-button.component.html',
  styleUrls: ['./base-button.component.scss']
})
export class BaseButtonComponent implements OnInit {
  @Input() name = 'Button';
  @Input() setting = 'shape';
  @Input() size = 'medium';
  @Input() type = 'default';
  @Input() state = 'normal';
  bgColor = '#C1D5FA';
  fontColor = 'white';
  buttonShape: ButtonShape;
  buttonSize: ButtonSizeValue;
  buttonStyle: ButtonStyle;

  constructor(private DscButton: DscButtonService) {}

  ngOnInit() {}

  setButton() {
    this.buttonShape = this.DscButton.buttonShape;
    this.buttonSize = this.DscButton.buttonSizes
      ? this.DscButton.buttonSizes[this.size]
      : undefined;
    this.buttonStyle = this.DscButton.buttonTypes
      ? this.DscButton.buttonTypes[this.type][this.state]
      : undefined;
  }

  getButtonStyle() {
    this.setButton();
    const shape = this.buttonShape
      ? {
          width: 'fit-Content',
          'border-radius': `${this.buttonShape.borderRadius}px`
        }
      : {};
    const size =
      this.buttonSize && this.DscButton.buttonBaseSize
        ? {
            'font-size':
              this.setting === 'shape'
                ? `${this.DscButton.buttonBaseSize.fontSize}px`
                : `${this.buttonSize.fontSize}px`,
            'padding-top':
              this.setting === 'shape'
                ? `${this.DscButton.buttonBaseSize.padding.top}px`
                : `${this.buttonSize.padding.top}px`,
            'padding-right':
              this.setting === 'shape'
                ? `${this.DscButton.buttonBaseSize.padding.right}px`
                : `${this.buttonSize.padding.right}px`,
            'padding-bottom':
              this.setting === 'shape'
                ? `${this.DscButton.buttonBaseSize.padding.bottom}px`
                : `${this.buttonSize.padding.bottom}px`,
            'padding-left':
              this.setting === 'shape'
                ? `${this.DscButton.buttonBaseSize.padding.left}px`
                : `${this.buttonSize.padding.left}px`
          }
        : {};
    const type = {
      color: this.fontColor,
      'background-color': this.bgColor
    };
    return { ...shape, ...size, ...type };
  }
}
