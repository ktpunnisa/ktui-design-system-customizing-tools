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

  constructor(private ButtonService: DscButtonService, private ColorService: DscColorService) {}

  ngOnInit() {}

  setButton() {
    this.buttonShape = this.ButtonService.buttonShape;
    this.buttonSize = this.ButtonService.buttonSizes
      ? this.ButtonService.buttonSizes[this.size]
      : undefined;
    this.buttonStyle = this.ButtonService.buttonTypes
      ? this.ButtonService.buttonTypes[this.type][this.state]
      : undefined;
  }

  getColor(style) {
    const styleToken = this.buttonStyle[style];
    if (style === 'boxShadows') {
      return this.ColorService.getBoxShadows(styleToken, this.color);
    }
    return this.ColorService.getColorShade(styleToken, this.color);
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
      this.buttonSize && this.ButtonService.buttonBaseSize
        ? {
            'font-size':
              this.setting === 'size'
                ? `${this.buttonSize.fontSize}px`
                : `${this.ButtonService.buttonBaseSize.fontSize}px`,
            'padding-top':
              this.setting === 'size'
                ? `${this.buttonSize.padding.top}px`
                : `${this.ButtonService.buttonBaseSize.padding.top}px`,
            'padding-right':
              this.setting === 'size'
                ? `${this.buttonSize.padding.right}px`
                : `${this.ButtonService.buttonBaseSize.padding.right}px`,
            'padding-bottom':
              this.setting === 'size'
                ? `${this.buttonSize.padding.bottom}px`
                : `${this.ButtonService.buttonBaseSize.padding.bottom}px`,
            'padding-left':
              this.setting === 'size'
                ? `${this.buttonSize.padding.left}px`
                : `${this.ButtonService.buttonBaseSize.padding.left}px`
          }
        : {};
    const type = this.buttonStyle
      ? {
          color: this.setting === 'type' ? this.getColor('font') : this.base.font,
          'background-color':
            this.setting === 'type' ? this.getColor('background') : this.base.background,
          'border-color': this.setting === 'type' ? this.getColor('border') : this.base.border,
          'box-shadow': this.setting === 'type' ? this.getColor('boxShadows') : ''
        }
      : {};
    return { ...shape, ...size, ...type };
  }
}
