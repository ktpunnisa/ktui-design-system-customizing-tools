import { Component, OnInit } from '@angular/core';
import { DscButtonService } from './dsc-button.service';

@Component({
  selector: 'app-dsc-button',
  templateUrl: './dsc-button.component.html',
  styleUrls: ['./dsc-button.component.scss']
})
export class DscButtonComponent implements OnInit {
  radius = 24;
  name = 'ktpunnisa';
  rad = '24px';

  constructor(protected DscButton: DscButtonService) {}

  ngOnInit() {}

  changeValue(event) {
    this.radius = event;
    this.rad = `${this.radius}px`;
  }
}
