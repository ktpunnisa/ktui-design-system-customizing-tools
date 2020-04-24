import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Selected } from './display-container';

@Component({
  selector: 'app-display-container',
  templateUrl: './display-container.component.html',
  styleUrls: ['./display-container.component.scss']
})
export class DisplayContainerComponent implements OnInit {
  @Input() dataRef;
  @Input() rows: string[];
  @Input() cols: string[];
  @Input() isShowColName = true;
  @Input() useSelector = true;
  @Input() selected: Selected;

  @Output() selectedChange = new EventEmitter<Selected>();

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

  isSelected(row, col) {
    return row === this.selected.row && col === this.selected.col;
  }

  onSelected(row, col) {
    this.selected = {
      row,
      col
    };
    this.selectedChange.emit(this.selected);
  }
}
