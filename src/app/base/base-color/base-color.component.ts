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

  ngOnInit() {
    this.palette = this.DscColor.size[this.size];
    this.opacity = this.DscColor.shades[this.shade];
  }

  getColorStyle() {
    return {
      'background-color': this.DscColor.mixColorShade(
        this.DscColor.colors[this.color],
        this.shade,
        this.opacity
      ),
      width: `${this.palette.width}px`,
      height: `${this.palette.height}px`,
      'border-radius': `${this.palette.borderRadius}px`
    };
  }
}
