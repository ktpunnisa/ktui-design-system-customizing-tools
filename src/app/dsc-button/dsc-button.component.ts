import { Component, OnInit } from '@angular/core';
import { DscButtonService } from './dsc-button.service';

@Component({
  selector: 'app-dsc-button',
  templateUrl: './dsc-button.component.html',
  styleUrls: ['./dsc-button.component.scss']
})
export class DscButtonComponent implements OnInit {
  constructor(private DscButton: DscButtonService) {}

  ngOnInit() {}

  changeValue(event) {
    this.DscButton.buttonStyles.borderRadius = event;
  }
}
