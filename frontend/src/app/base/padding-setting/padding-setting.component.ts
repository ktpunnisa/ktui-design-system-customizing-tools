import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Padding } from './padding-setting';

@Component({
  selector: 'app-padding-setting',
  templateUrl: './padding-setting.component.html',
  styleUrls: ['./padding-setting.component.scss']
})
export class PaddingSettingComponent implements OnInit {
  @Input() padding: Padding;

  @Output() paddingChange = new EventEmitter<Padding>();

  constructor() {}

  ngOnInit() {}

  get VerticalPadding() {
    return this.padding.top;
  }

  get HorizontalPadding() {
    return this.padding.right;
  }

  changePadding(event, type) {
    if (type === 'vertical') {
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
    this.paddingChange.emit(this.padding);
  }
}
