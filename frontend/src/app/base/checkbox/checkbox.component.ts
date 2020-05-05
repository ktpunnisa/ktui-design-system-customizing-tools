import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() label: string;
  @Input() name: string;
  @Input() checked = true;

  @Output() checkBoxChange = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  checkBoxChanged() {
    this.checkBoxChange.emit(this.checked);
  }
}
