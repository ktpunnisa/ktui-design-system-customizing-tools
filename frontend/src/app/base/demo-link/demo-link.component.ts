import { Component, OnInit, Input } from '@angular/core';
import { LinkSizeValue, LinkState } from 'src/app/dsc-link/dsc-link';
import { DscLinkService } from 'src/app/dsc-link/dsc-link.service';
import { DscColorService } from 'src/app/dsc-color/dsc-color.service';

@Component({
  selector: 'app-demo-link',
  templateUrl: './demo-link.component.html',
  styleUrls: ['./demo-link.component.scss']
})
export class DemoLinkComponent implements OnInit {
  @Input() name = 'Link';
  @Input() type = 'default';
  @Input() size = 'medium';
  @Input() color = 'primary';
  state = 'normal';

  linkSize: LinkSizeValue;
  linkType: LinkState;

  constructor(private LinkService: DscLinkService, private ColorService: DscColorService) {}

  ngOnInit() {}

  setLink() {
    this.linkSize = this.LinkService.linkSizes ? this.LinkService.linkSizes[this.size] : undefined;
    this.linkType = this.LinkService.linkTypes ? this.LinkService.linkTypes[this.type] : undefined;
  }

  setState(state, mouse) {
    this.state = state;
  }

  getColor(state, style) {
    const styleToken = this.linkType[state][style];
    return this.ColorService.getColorShade(styleToken, this.color);
  }

  getLinkStyle() {
    this.setLink();
    const size = this.linkSize
      ? {
          'font-size': `${this.linkSize.fontSize}px`,
          'font-weight': this.linkSize.fontWeight
        }
      : {};

    const type = this.getLinkState(this.state || 'normal');

    return { ...size, ...type };
  }

  getLinkState(state) {
    return this.linkType
      ? {
          color: this.getColor(state, 'font'),
          'text-decoration': this.linkType[state].textDecoration,
          cursor: 'pointer'
        }
      : {};
  }
}
