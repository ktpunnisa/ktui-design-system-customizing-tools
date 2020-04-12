import { Component, OnInit, Input, Output } from '@angular/core';
import { Palette, ColorSystem } from 'src/app/dsc-color/dsc-color';
import { DscColorService } from 'src/app/dsc-color/dsc-color.service';

@Component({
  selector: 'app-color-list-setting',
  templateUrl: './color-list-setting.component.html',
  styleUrls: ['./color-list-setting.component.scss']
})
export class ColorListSettingComponent implements OnInit {
  @Input() label: string;
  @Input() selected: ColorSystem;
  @Input() mainColor: string;
  customPalette: Palette = {
    width: 20,
    height: 20,
    borderRadius: 4
  };

  constructor(protected ColorService: DscColorService) {}

  ngOnInit() {}

  isSelected(color: ColorSystem): boolean {
    return this.selected.name === color.name ? true : false;
  }

  onSelect(color: ColorSystem) {
    this.selected = color;
  }
}
