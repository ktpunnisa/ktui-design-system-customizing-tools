import { Component, OnInit, Input } from '@angular/core';
import { DscButtonService } from 'src/app/dsc-button/dsc-button.service';
import { DscColorService } from 'src/app/dsc-color/dsc-color.service';
import { ButtonShape, ButtonSizeValue, ButtonState } from 'src/app/dsc-button/dsc-button';

@Component({
  selector: 'app-demo-button',
  templateUrl: './demo-button.component.html',
  styleUrls: ['./demo-button.component.scss']
})
export class DemoButtonComponent implements OnInit {
  @Input() name = 'Button';
  @Input() type = 'default';
  @Input() color = 'primary';
  @Input() isDisabled = false;
  state = 'normal';

  buttonShape: ButtonShape;
  buttonSize: ButtonSizeValue;
  buttonType: ButtonState;

  constructor(private ButtonService: DscButtonService, private ColorService: DscColorService) {}

  ngOnInit() {
    this.setState('normal', '');
  }

  setButton() {
    this.buttonShape = this.ButtonService.buttonShape;
    this.buttonSize = this.ButtonService.buttonBaseSize;
    this.buttonType = this.ButtonService.buttonTypes
      ? this.ButtonService.buttonTypes[this.type]
      : undefined;
  }

  setState(state, mouse) {
    console.log(state, mouse);
    this.state = this.isDisabled ? 'disabled' : state;
  }

  getColor(state, style) {
    const styleToken = this.buttonType[state][style];
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
    const size = this.buttonSize
      ? {
          'font-size': `${this.buttonSize.fontSize}px`,
          'padding-top': `${this.buttonSize.padding.top}px`,
          'padding-right': `${this.buttonSize.padding.right}px`,
          'padding-bottom': `${this.buttonSize.padding.bottom}px`,
          'padding-left': `${this.buttonSize.padding.left}px`
        }
      : {};

    const type = this.getButtonState(this.state || 'normal');

    return { ...shape, ...size, ...type };
  }

  getButtonState(state) {
    return this.buttonType
      ? {
          color: this.getColor(state, 'font'),
          'background-color': this.getColor(state, 'background'),
          'border-color': this.getColor(state, 'border'),
          'box-shadow': this.getColor(state, 'boxShadows')
        }
      : {};
  }
}
