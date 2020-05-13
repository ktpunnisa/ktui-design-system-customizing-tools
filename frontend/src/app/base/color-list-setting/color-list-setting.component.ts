import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ColorSystem } from 'src/app/color/dsc-color';
import { DscColorService } from 'src/app/color/dsc-color.service';

@Component({
  selector: 'app-color-list-setting',
  templateUrl: './color-list-setting.component.html',
  styleUrls: ['./color-list-setting.component.scss']
})
export class ColorListSettingComponent implements OnInit {
  @Input() label: string;
  @Input() selected: ColorSystem;
  @Input() mainColor: string;

  @Output() selectedChange = new EventEmitter<ColorSystem>();
  showing: boolean;

  constructor(protected ColorService: DscColorService) {}

  ngOnInit() {}

  isSelected(color: ColorSystem): boolean {
    return this.selected.name === color.name ? true : false;
  }

  onSelect(color: ColorSystem) {
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
