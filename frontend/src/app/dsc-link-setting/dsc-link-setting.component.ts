import { Component, OnInit } from '@angular/core';
import { DscLinkService } from '../dsc-link/dsc-link.service';
import { DscColorService } from '../dsc-color/dsc-color.service';

@Component({
  selector: 'app-dsc-link-setting',
  templateUrl: './dsc-link-setting.component.html',
  styleUrls: ['./dsc-link-setting.component.scss']
})
export class DscLinkSettingComponent implements OnInit {
  mainColor: string;

  constructor(protected LinkService: DscLinkService, protected ColorService: DscColorService) {}

  ngOnInit() {
    this.mainColor = 'primary';
  }

  get isSizeSetting() {
    const row = this.LinkService.selected.row;
    return this.LinkService.sizeName.includes(row);
  }

  get isTypeSetting() {
    const row = this.LinkService.selected.row;
    return this.LinkService.states.includes(row);
  }

  get linkSize() {
    if (this.isSizeSetting) {
      const size = this.LinkService.selected.col;
      return this.LinkService.linkSizes ? this.LinkService.linkSizes[size] : undefined;
    }
    return undefined;
  }

  get linkState() {
    if (this.isTypeSetting) {
      const state = this.LinkService.selected.row;
      const type = this.LinkService.selected.col;
      return this.LinkService.linkTypes ? this.LinkService.linkTypes[type][state] : undefined;
    }
    return undefined;
  }

  changeSize(event, style, valueType) {
    const size = this.LinkService.selected.col;
    this.LinkService.linkSizes[size][style] = event;
    if (valueType === 'output') {
      this.LinkService.updateLinkToken(
        '5e9d79ea81f8ad60d9c429df',
        this.LinkService.linkSizes,
        null
      ).subscribe(res => {
        console.log('update link size');
      });
    }
  }

  changeType(event, style, valueType) {
    const state = this.LinkService.selected.row;
    const type = this.LinkService.selected.col;
    if (style === 'textDecoration') {
      this.LinkService.linkTypes[type][state][style] = event ? 'underline' : 'none';
    } else {
      const linkStyle = this.convertToLinkType(event);
      this.LinkService.linkTypes[type][state][style] = linkStyle;
    }
    if (valueType === 'output') {
      this.LinkService.updateLinkToken(
        '5e9d79ea81f8ad60d9c429df',
        null,
        this.LinkService.linkTypes
      ).subscribe(res => {
        console.log('update type');
      });
    }
  }

  convertToLinkType(event) {
    if (event.color === 'transparent') {
      return {
        type: 'transparent',
        color: '',
        shade: ''
      };
    }
    if (this.ColorService.naturalColors.includes(event.color)) {
      return {
        type: 'fixed',
        color: event.color,
        shade: event.shade
      };
    }
    return {
      type: 'custom',
      color: '',
      shade: event.shade
    };
  }
}
