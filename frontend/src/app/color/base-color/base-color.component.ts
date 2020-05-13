import { Component, OnInit, Input } from '@angular/core';
import { DscColorService } from '../dsc-color.service';
import { Palette } from '../dsc-color';

@Component({
  selector: 'app-base-color',
  templateUrl: './base-color.component.html',
  styleUrls: ['./base-color.component.scss']
})
export class BaseColorComponent implements OnInit {
  @Input() color = 'primary';
  @Input() shade = 'default';
  @Input() size = 's';

  palette: Palette;
  opacity: number;
  colorGenerated: string;

  constructor(private ColorService: DscColorService) {}

  ngOnInit() {}

  get hasBorder(): boolean {
    return this.colorGenerated === '#ffffff' || this.opacity === 1 || this.color === 'transparent';
  }

  getColorStyle() {
    this.palette = this.ColorService.size[this.size];
    this.opacity = this.ColorService.colorShades
      ? this.ColorService.colorShades[this.shade] * 0.01
      : 1;
    this.colorGenerated =
      this.color !== 'transparent'
        ? this.ColorService.mixColorShade(
            this.ColorService.colorThemes[this.color]
              ? this.ColorService.colorThemes[this.color]
              : this.color,
            this.shade,
            this.opacity
          )
        : 'white';
    return {
      'box-sizing': 'border-box',
      'background-color': this.colorGenerated,
      'background-image': this.color === 'transparent' ? `url('assets/img/transparent.jpg')` : '',
      width: `${this.palette.width}px`,
      height: `${this.palette.height}px`,
      'border-radius': `${this.palette.borderRadius}px`,
      border: this.hasBorder ? '1px solid #E9E9E9' : 'none'
    };
  }
}
