import { Component, OnInit } from '@angular/core';
import { DscColorService } from '../dsc-color/dsc-color.service';

@Component({
  selector: 'app-dsc-color-setting',
  templateUrl: './dsc-color-setting.component.html',
  styleUrls: ['./dsc-color-setting.component.scss']
})
export class DscColorSettingComponent implements OnInit {
  constructor(private DscColor: DscColorService) {}

  ngOnInit() {}

  changeShade(event, shade) {
    this.DscColor.dscShades[shade] = event;
  }
}
