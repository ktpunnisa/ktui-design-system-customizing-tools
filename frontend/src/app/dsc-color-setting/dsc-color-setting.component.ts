import { Component, OnInit } from '@angular/core';
import { DscColorService } from '../dsc-color/dsc-color.service';
import { ColorSystem } from '../dsc-color/dsc-color';

@Component({
  selector: 'app-dsc-color-setting',
  templateUrl: './dsc-color-setting.component.html',
  styleUrls: ['./dsc-color-setting.component.scss']
})
export class DscColorSettingComponent implements OnInit {
  constructor(protected ColorService: DscColorService) {}

  ngOnInit() {}

  isSelected(state: string) {
    return state === this.ColorService.displayContainer;
  }

  onSelect(state: string) {
    this.ColorService.displayContainer = state;
  }

  changeShade(event, shade) {
    this.ColorService.colorShades[shade] = event;
    this.ColorService.updateColorToken(
      '5e9d79ea81f8ad60d9c429df',
      null,
      this.ColorService.colorShades
    ).subscribe(res => {
      console.log('update shade');
    });
  }

  changeTheme(event, color) {
    this.ColorService.colorThemes[color] = event;
    this.ColorService.updateColorToken(
      '5e9d79ea81f8ad60d9c429df',
      this.ColorService.colorThemes,
      null
    ).subscribe(res => {
      console.log('update theme');
    });
  }

  getColorSystem(color): ColorSystem {
    return {
      name: this.ColorService.colorThemes[color].toUpperCase(),
      color: this.ColorService.colorThemes[color],
      shade: 'default'
    };
  }
}
