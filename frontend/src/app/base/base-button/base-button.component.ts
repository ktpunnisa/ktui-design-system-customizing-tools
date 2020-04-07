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
  btnShape: ButtonShape;
  btnSize: ButtonSizeValue;
  btnStyle: ButtonStyle;

  constructor(private DscButton: DscButtonService) {}

  ngOnInit() {
    this.btnShape = this.DscButton.buttonToken.shape;
    this.btnSize = this.DscButton.buttonToken.size[this.size];
    this.btnStyle = this.DscButton.buttonToken.type[this.type][this.state];
  }

  getButtonStyle() {
    const shape = {
      width: 'fit-Content',
      'border-radius': `${this.btnShape.borderRadius}px`
    };
    const size = {
      'font-size':
        this.setting === 'shape'
          ? `${this.DscButton.buttonBaseSize.fontSize}px`
          : `${this.btnSize.fontSize}px`,
      'padding-top':
        this.setting === 'shape'
          ? `${this.DscButton.buttonBaseSize.padding.top}px`
          : `${this.btnSize.padding.top}px`,
      'padding-right':
        this.setting === 'shape'
          ? `${this.DscButton.buttonBaseSize.padding.right}px`
          : `${this.btnSize.padding.right}px`,
      'padding-bottom':
        this.setting === 'shape'
          ? `${this.DscButton.buttonBaseSize.padding.bottom}px`
          : `${this.btnSize.padding.bottom}px`,
      'padding-left':
        this.setting === 'shape'
          ? `${this.DscButton.buttonBaseSize.padding.left}px`
          : `${this.btnSize.padding.left}px`
    };
    const type = {
      color: this.fontColor,
      'background-color': this.bgColor
    };
    return { ...shape, ...size, ...type };
  }
}
