import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ColorSystem } from 'src/app/color/dsc-color';
import { ColorPickerControl } from '@iplab/ngx-color-picker';
import { DscColorService } from 'src/app/color/dsc-color.service';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  @Input() label: string;
  @Input() colorSystem: ColorSystem;
  showing: boolean;

  @Output() colorChange = new EventEmitter<string>();

  chromeControl = new ColorPickerControl().hidePresets().hideAlphaChannel();

  constructor(protected ColorService: DscColorService) {}

  ngOnInit() {}

  showDropdown() {
    this.showing = true;
  }

  hideDropdown() {
    this.showing = false;
  }

  changeColor(event) {
    this.colorChange.emit(event);
  }
}
