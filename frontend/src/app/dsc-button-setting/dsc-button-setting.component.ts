import { Component, OnInit } from '@angular/core';
import { DscButtonService } from '../dsc-button/dsc-button.service';

@Component({
  selector: 'app-dsc-button-setting',
  templateUrl: './dsc-button-setting.component.html',
  styleUrls: ['./dsc-button-setting.component.scss']
})
export class DscButtonSettingComponent implements OnInit {
  constructor(private DscButton: DscButtonService) {}

  ngOnInit() {}

  changeValue(event) {
    this.DscButton.buttonStyles.borderRadius = event;
  }
}
