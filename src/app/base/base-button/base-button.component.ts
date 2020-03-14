import { Component, OnInit, Input } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-base-button',
  templateUrl: './base-button.component.html',
  styleUrls: ['./base-button.component.scss']
})
export class BaseButtonComponent implements OnInit {
  @Input() name = 'Button';
  @Input() fontColor = 'white';
  @Input() bgColor = '#C1D5FA';
  @Input() radius = 0;
  @Input() fontSize = 20;
  @Input() pt = 12;
  @Input() pr = 20;
  @Input() pb = 12;
  @Input() pl = 20;

  constructor() {}

  ngOnInit() {}

  getButtonStyle() {
    const styles = {
      'background-color': this.bgColor,
      color: this.fontColor,
      'font-size': `${this.fontSize}px`,
      padding: `${this.pt}px ${this.pr}px ${this.pb}px ${this.pl}px`,
      'border-radius': `${this.radius}px`,
      width: 'fit-Content'
    };
    return styles;
  }
}
