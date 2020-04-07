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
    this.DscColor.colorShade[shade] = event;
    this.DscColor.updateDscColors(
      'test',
      this.DscColor.colorTheme,
      this.DscColor.colorShade
    ).subscribe(res => {
      console.log(res);
    });
  }
}
