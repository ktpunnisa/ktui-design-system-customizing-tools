import { Component, OnInit } from '@angular/core';
import { DscColorService } from '../dsc-color/dsc-color.service';

@Component({
  selector: 'app-dsc-color-setting',
  templateUrl: './dsc-color-setting.component.html',
  styleUrls: ['./dsc-color-setting.component.scss']
})
export class DscColorSettingComponent implements OnInit {
  constructor(protected DscColor: DscColorService) {}

  ngOnInit() {}

  changeShade(event, shade) {
    this.DscColor.colorShades[shade] = event;
    this.DscColor.updateColorToken(
      'test',
      this.DscColor.colorThemes,
      this.DscColor.colorShades
    ).subscribe(res => {
      console.log(res);
    });
  }
}
