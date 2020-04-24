import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss']
})
export class ToggleSwitchComponent implements OnInit {
  @Input() label: string;
  @Input() checked: true;

  @Output() toggleChange = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  toggleChanged() {
    this.toggleChange.emit(this.checked);
  }
}
