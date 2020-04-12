import { Component, OnInit } from '@angular/core';
import { DscColorService } from '../dsc-color/dsc-color.service';

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
      'test',
      this.ColorService.colorThemes,
      this.ColorService.colorShades
    ).subscribe(res => {
      console.log(res);
    });
  }
}
