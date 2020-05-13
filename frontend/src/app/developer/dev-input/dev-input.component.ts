import { Component, OnInit } from '@angular/core';
import { DscColorService } from 'src/app/color/dsc-color.service';
import { DscInputService } from 'src/app/dsc-input/dsc-input.service';

@Component({
  selector: 'app-dev-input',
  templateUrl: './dev-input.component.html',
  styleUrls: ['./dev-input.component.scss']
})
export class DevInputComponent implements OnInit {
  constructor(protected ColorService: DscColorService, protected InputService: DscInputService) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.ColorService.colorThemes = this.ColorService.devColorThemes;
    this.ColorService.colorShades = this.ColorService.devColorShades;

    this.InputService.dInputShape = this.InputService.devDInputShape;
    this.InputService.dInputSizes = this.InputService.devDInputSizes;
    this.InputService.dInputTypes = this.InputService.devDInputTypes;
  }

  getName(param) {
    return `${param} input`;
  }

  generateCode(label, setting, param) {
    let code = '';
    code = code + ` label="${label}"`;
    if (setting !== 'default') {
      code = setting === 'value' ? code + ` value="${param}"` : code;
      code = setting === 'size' ? code + ` size="${param}"` : code;
      code = setting === 'disabled' ? code + ` disabled="true"` : code;
      code = setting === 'error' ? code + ` error="true"` : code;
    }
    return code;
  }
}
