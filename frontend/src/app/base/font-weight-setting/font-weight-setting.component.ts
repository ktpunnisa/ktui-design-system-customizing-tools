import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface FontWeight {
  name: string;
  weight: number;
}

@Component({
  selector: 'app-font-weight-setting',
  templateUrl: './font-weight-setting.component.html',
  styleUrls: ['./font-weight-setting.component.scss']
})
export class FontWeightSettingComponent implements OnInit {
  @Input() selected: number;

  @Output() selectedChange = new EventEmitter<number>();
  showing: boolean;

  fontWeight: FontWeight[] = [
    { name: 'Thin', weight: 100 },
    { name: 'Light', weight: 300 },
    { name: 'Regular', weight: 400 },
    { name: 'Medium', weight: 500 },
    { name: 'Bold', weight: 700 },
    { name: 'Extra-Black', weight: 900 }
  ];

  constructor() {}

  ngOnInit() {}

  get selectedName(): string {
    const font = this.fontWeight.filter(x => x.weight === this.selected);
    return font[0].name;
  }

  isSelected(weight: number): boolean {
    return this.selected === weight ? true : false;
  }

  onSelect(weight: number) {
    this.selected = weight;
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

  getFontWeightStyle(weight: number) {
    return { 'font-weight': weight };
  }
}
