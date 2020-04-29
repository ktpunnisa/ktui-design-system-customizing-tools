import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface Padding {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

@Component({
  selector: 'app-padding-setting',
  templateUrl: './padding-setting.component.html',
  styleUrls: ['./padding-setting.component.scss']
})
export class PaddingSettingComponent implements OnInit {
  @Input() padding: Padding;

  @Output() paddingChange = new EventEmitter<Padding>();
  @Output() paddingOutput = new EventEmitter<Padding>();

  constructor() {}

  ngOnInit() {}

  get VerticalPadding() {
    return this.padding.top;
  }

  get HorizontalPadding() {
    return this.padding.right;
  }

  changePadding(event, paddingType, valueType) {
    if (paddingType === 'vertical') {
      this.padding = {
        ...this.padding,
        top: event,
        bottom: event
      };
    } else {
      this.padding = {
        ...this.padding,
        right: event,
        left: event
      };
    }

    valueType === 'output'
      ? this.paddingOutput.emit(this.padding)
      : this.paddingChange.emit(this.padding);
  }
}
