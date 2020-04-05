import { Component, OnInit, Input } from '@angular/core';
import { DscColorService } from 'src/app/dsc-color/dsc-color.service';
import { Palette } from 'src/app/dsc-color/dsc-color';

@Component({
  selector: 'app-base-color',
  templateUrl: './base-color.component.html',
  styleUrls: ['./base-color.component.scss']
})
export class BaseColorComponent implements OnInit {
  @Input() color = 'primary';
  @Input() shade = 'base';
  @Input() size = 's';
  palette: Palette;
  opacity: number;
  colorGenerated: string;

  constructor(private DscColor: DscColorService) {}

  ngOnInit() {}

  getColorStyle() {
    this.palette = this.DscColor.size[this.size];
    this.opacity = this.DscColor.dscShades[this.shade] * 0.01;
    this.colorGenerated = this.DscColor.mixColorShade(
      this.DscColor.dscThemes[this.color],
      this.shade,
      this.opacity
    );
    return {
      'box-sizing': 'border-box',
      'background-color': this.colorGenerated,
      width: `${this.palette.width}px`,
      height: `${this.palette.height}px`,
      'border-radius': `${this.palette.borderRadius}px`,
      border: this.colorGenerated === '#ffffff' || this.opacity === 1 ? '1px solid #E9E9E9' : 'none'
    };
  }
}
