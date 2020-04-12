import { Component, OnInit, Input } from '@angular/core';
import { Palette, ColorSystem } from 'src/app/dsc-color/dsc-color';

@Component({
  selector: 'app-setting-dropdown',
  templateUrl: './setting-dropdown.component.html',
  styleUrls: ['./setting-dropdown.component.scss']
})
export class SettingDropdownComponent implements OnInit {
  @Input() label: string;
  @Input() selected: ColorSystem;
  customPalette: Palette = {
    width: 20,
    height: 20,
    borderRadius: 4
  };
  showing: boolean;

  constructor() {}

  ngOnInit() {}

  showDropdown() {
    this.showing = true;
  }

  hideDropdown() {
    this.showing = false;
  }
}
