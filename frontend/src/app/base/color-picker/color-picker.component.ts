import { Component, OnInit, Input } from '@angular/core';
import { ColorSystem } from 'src/app/dsc-color/dsc-color';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  @Input() label: string;
  @Input() color: ColorSystem;
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
