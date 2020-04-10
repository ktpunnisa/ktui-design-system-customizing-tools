import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-container',
  templateUrl: './display-container.component.html',
  styleUrls: ['./display-container.component.scss']
})
export class DisplayContainerComponent implements OnInit {
  @Input() dataRef;
  @Input() rows;
  @Input() cols;

  constructor() {}

  ngOnInit() {}

  getContext(row, col) {
    return {
      $implicit: {
        row,
        col
      }
    };
  }
}
