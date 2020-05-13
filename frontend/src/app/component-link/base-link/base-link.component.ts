import { Component, OnInit, Input } from '@angular/core';
import { DscLinkService } from '../dsc-link.service';
import { DscColorService } from 'src/app/foundation-color/dsc-color.service';
import { LinkSizeValue, LinkStyle } from '../dsc-link';

@Component({
  selector: 'app-base-link',
  templateUrl: './base-link.component.html',
  styleUrls: ['./base-link.component.scss']
})
export class BaseLinkComponent implements OnInit {
  @Input() name = 'Link';
  @Input() setting = 'size';
  @Input() size = 'medium';
  @Input() type = 'default';
  @Input() state = 'normal';
  @Input() color = 'primary';
  base = {
    font: 'black',
    textDecoration: 'underline'
  };
  linkSize: LinkSizeValue;
  linkStyle: LinkStyle;

  constructor(private LinkService: DscLinkService, private ColorService: DscColorService) {}

  ngOnInit() {}

  setLink() {
    this.linkSize = this.LinkService.linkSizes ? this.LinkService.linkSizes[this.size] : undefined;
    this.linkStyle = this.LinkService.linkTypes
      ? this.LinkService.linkTypes[this.type][this.state]
      : undefined;
  }

  getColor(style) {
    const styleToken = this.linkStyle[style];
    return this.ColorService.getColorShade(styleToken, this.color);
  }

  getLinkStyle() {
    this.setLink();
    const size =
      this.linkSize && this.LinkService.linkBaseSize
        ? {
            'font-size':
              this.setting === 'size'
                ? `${this.linkSize.fontSize}px`
                : `${this.LinkService.linkBaseSize.fontSize}px`,
            'font-weight':
              this.setting === 'size'
                ? this.linkSize.fontWeight
                : this.LinkService.linkBaseSize.fontWeight
          }
        : {};
    const type = this.linkStyle
      ? {
          color: this.setting === 'type' ? this.getColor('font') : this.base.font,
          'text-decoration':
            this.setting === 'type' ? this.linkStyle.textDecoration : this.base.textDecoration
        }
      : {};
    return { ...size, ...type };
  }
}
