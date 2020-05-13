import { Component, OnInit } from '@angular/core';
import { DscColorService } from 'src/app/color/dsc-color.service';
import { DscLinkService } from 'src/app/dsc-link/dsc-link.service';

@Component({
  selector: 'app-dev-link',
  templateUrl: './dev-link.component.html',
  styleUrls: ['./dev-link.component.scss']
})
export class DevLinkComponent implements OnInit {
  constructor(protected ColorService: DscColorService, protected LinkService: DscLinkService) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.ColorService.colorThemes = this.ColorService.devColorThemes;
    this.ColorService.colorShades = this.ColorService.devColorShades;

    this.LinkService.linkSizes = this.LinkService.devLinkSizes;
    this.LinkService.linkTypes = this.LinkService.devLinkTypes;
  }

  getName(param) {
    return `${param} link`;
  }

  generateCode(setting, param) {
    let code = '';
    if (setting !== 'default') {
      code = setting === 'color' ? code + ` color="${param}"` : code;
      code = setting === 'size' ? code + ` size="${param}"` : code;
      code = setting === 'type' ? code + ` type="${param}"` : code;
    }
    return code;
  }
}
