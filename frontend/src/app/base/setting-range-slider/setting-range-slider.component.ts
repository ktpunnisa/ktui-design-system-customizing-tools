import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-setting-range-slider',
  templateUrl: './setting-range-slider.component.html',
  styleUrls: ['./setting-range-slider.component.scss']
})
export class SettingRangeSliderComponent implements OnInit {
  @Input() label: string;
  @Input() value: number;
  @Input() min: number;
  @Input() max: number;
  @Input() hasCheckbox = false;
  @Input() checked = true;

  @Output() valueChange = new EventEmitter<number>();
  @Output() valueOutput = new EventEmitter<number>();
  @Output() checkBoxChange = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  valueChanged(event, valueType) {
    valueType === 'output' ? this.valueOutput.emit(this.value) : this.valueChange.emit(this.value);
  }

  checkBoxChanged() {
    this.checkBoxChange.emit(this.checked);
  }
}
