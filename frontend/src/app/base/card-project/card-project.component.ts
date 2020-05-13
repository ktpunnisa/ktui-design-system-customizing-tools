import { Component, OnInit, Input } from '@angular/core';
import { ColorTheme } from 'src/app/foundation-color/color';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss']
})
export class CardProjectComponent implements OnInit {
  @Input() name: string;
  @Input() theme: ColorTheme = {
    primary: '#ff8879',
    secondary: '#009ba6',
    success: '#00dcc7',
    info: '#5c80ff',
    warning: '#ffcf5c',
    danger: '#ff647c',
    white: '#ffffff',
    gray: '#818181',
    black: '#232323'
  };

  constructor() {}

  ngOnInit() {}

  getBackgroundColor(color) {
    return {
      'background-color': this.theme[color]
    };
  }

  getColor(color) {
    return {
      color: this.theme[color]
    };
  }

  delete() {
    console.log('delete');
  }

  design() {
    console.log('design');
  }
}
