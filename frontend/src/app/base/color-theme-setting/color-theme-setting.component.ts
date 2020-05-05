import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DscColorService } from 'src/app/dsc-color/dsc-color.service';

@Component({
  selector: 'app-color-theme-setting',
  templateUrl: './color-theme-setting.component.html',
  styleUrls: ['./color-theme-setting.component.scss']
})
export class ColorThemeSettingComponent implements OnInit {
  @Input() selected: string;

  @Output() selectedChange = new EventEmitter<string>();
  showing: boolean;

  constructor(protected ColorService: DscColorService) {}

  ngOnInit() {}

  isSelected(color): boolean {
    return this.selected === color ? true : false;
  }

  onSelect(color) {
    this.selected = color;
    this.selectedChanged();
    this.hideDropdown();
  }

  selectedChanged() {
    this.selectedChange.emit(this.selected);
  }

  showDropdown() {
    this.showing = true;
  }

  hideDropdown() {
    this.showing = false;
  }
}
