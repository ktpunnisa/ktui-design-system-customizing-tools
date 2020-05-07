import { Component, OnInit } from '@angular/core';
import { DscColorService } from 'src/app/dsc-color/dsc-color.service';
import { DscButtonService } from 'src/app/dsc-button/dsc-button.service';

@Component({
  selector: 'app-dev-button',
  templateUrl: './dev-button.component.html',
  styleUrls: ['./dev-button.component.scss']
})
export class DevButtonComponent implements OnInit {
  constructor(private ColorService: DscColorService, private ButtonService: DscButtonService) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.ColorService.colorThemes = this.ColorService.devColorThemes;
    this.ColorService.colorShades = this.ColorService.devColorShades;

    this.ButtonService.buttonShape = this.ButtonService.devButtonShape;
    this.ButtonService.buttonSizes = this.ButtonService.devButtonSizes;
    this.ButtonService.buttonTypes = this.ButtonService.devButtonTypes;
  }

  generateCode(setting, param, isEnable) {
    let code = '';
    if (setting !== 'default') {
      code = setting === 'color' ? code + ` color:"${param}"` : code;
      code = setting === 'size' ? code + ` size:"${param}"` : code;
      code = setting === 'type' ? code + ` type:"${param}"` : code;
    }
    code = isEnable ? code : code + ` disabled:"true"`;
    return code;
  }
}
