import { Component, OnInit, Input } from '@angular/core';
import { DscButtonService } from 'src/app/dsc-button/dsc-button.service';
import { ButtonSizeValue, ButtonStyle, ButtonShape } from 'src/app/dsc-button/dsc-button';
import { DscColorService } from 'src/app/dsc-color/dsc-color.service';

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
  @Input() color = 'primary';
  base = {
    font: 'white',
    background: '#C1D5FA',
    border: '#99B5FC'
  };
  buttonShape: ButtonShape;
  buttonSize: ButtonSizeValue;
  buttonStyle: ButtonStyle;

  constructor(private buttonService: DscButtonService, private ColorService: DscColorService) {}

  ngOnInit() {}

  setButton() {
    this.buttonShape = this.buttonService.buttonShape;
    this.buttonSize = this.buttonService.buttonSizes
      ? this.buttonService.buttonSizes[this.size]
      : undefined;
    this.buttonStyle = this.buttonService.buttonTypes
      ? this.buttonService.buttonTypes[this.type][this.state]
      : undefined;
  }

  getColor(style) {
    const styleToken = this.buttonStyle[style];
    const colorCode =
      styleToken.type === 'custom'
        ? this.ColorService.colorThemes[this.color]
        : this.ColorService.colorThemes[styleToken.color];
    return this.buttonService.getColorShade(styleToken.type, colorCode, styleToken.shade);
  }

  getButtonStyle() {
    this.setButton();
    const shape = this.buttonShape
      ? {
          width: 'fit-Content',
          'border-radius': `${this.buttonShape.borderRadius}px`,
          'border-style': `${this.buttonShape.borderStyle}`,
          'border-width': `${this.buttonShape.borderWidth}px`
        }
      : {};
    const size =
      this.buttonSize && this.buttonService.buttonBaseSize
        ? {
            'font-size':
              this.setting === 'size'
                ? `${this.buttonSize.fontSize}px`
                : `${this.buttonService.buttonBaseSize.fontSize}px`,
            'padding-top':
              this.setting === 'size'
                ? `${this.buttonSize.padding.top}px`
                : `${this.buttonService.buttonBaseSize.padding.top}px`,
            'padding-right':
              this.setting === 'size'
                ? `${this.buttonSize.padding.right}px`
                : `${this.buttonService.buttonBaseSize.padding.right}px`,
            'padding-bottom':
              this.setting === 'size'
                ? `${this.buttonSize.padding.bottom}px`
                : `${this.buttonService.buttonBaseSize.padding.bottom}px`,
            'padding-left':
              this.setting === 'size'
                ? `${this.buttonSize.padding.left}px`
                : `${this.buttonService.buttonBaseSize.padding.left}px`
          }
        : {};
    const type = this.buttonStyle
      ? {
          color: this.setting === 'type' ? this.getColor('font') : this.base.font,
          'background-color':
            this.setting === 'type' ? this.getColor('background') : this.base.background,
          'border-color': this.setting === 'type' ? this.getColor('border') : this.base.border
        }
      : {};
    return { ...shape, ...size, ...type };
  }
}
