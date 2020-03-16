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

  constructor(private DscColor: DscColorService) {}

  ngOnInit() {}

  getColorStyle() {
    this.palette = this.DscColor.size[this.size];
    this.opacity = this.DscColor.dscShades[this.shade] * 0.01;
    return {
      'background-color': this.DscColor.mixColorShade(
        this.DscColor.dscColors[this.color],
        this.shade,
        this.opacity
      ),
      width: `${this.palette.width}px`,
      height: `${this.palette.height}px`,
      'border-radius': `${this.palette.borderRadius}px`
    };
  }
}
