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
  @Input() itemSize = 'm';

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

  get itemHeight() {
    if (this.itemSize === 's') {
      return { height: '60px' };
    } else if (this.itemSize === 'm') {
      return { height: '80px' };
    }
    return { height: '100px' };
  }
}
