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

  @Output() valueChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  valueChanged() {
    this.valueChange.emit(this.value);
  }
}
