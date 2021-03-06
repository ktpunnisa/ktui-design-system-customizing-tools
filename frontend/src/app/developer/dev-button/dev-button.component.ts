import { Component, OnInit } from '@angular/core';
import { DscColorService } from 'src/app/foundation-color/color.service';
import { DscButtonService } from '../../component-button/button.service';

@Component({
  selector: 'app-dev-button',
  templateUrl: './dev-button.component.html',
  styleUrls: ['./dev-button.component.scss']
})
export class DevButtonComponent implements OnInit {
  constructor(protected ColorService: DscColorService, protected ButtonService: DscButtonService) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.ColorService.colorThemes = this.ColorService.devColorThemes;
    this.ColorService.colorShades = this.ColorService.devColorShades;

    this.ButtonService.buttonShape = this.ButtonService.devButtonShape;
    this.ButtonService.buttonSizes = this.ButtonService.devButtonSizes;
    this.ButtonService.buttonTypes = this.ButtonService.devButtonTypes;
  }

  getName(param) {
    return `${param} button`;
  }

  generateCode(setting, param) {
    let code = '';
    if (setting !== 'default') {
      code = setting === 'color' ? code + ` color="${param}"` : code;
      code = setting === 'size' ? code + ` size="${param}"` : code;
      code = setting === 'type' ? code + ` type="${param}"` : code;
      code = setting === 'disabled' ? code + ` disabled="true"` : code;
    }
    return code;
  }
}
