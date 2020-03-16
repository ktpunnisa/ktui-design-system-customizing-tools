import { Component, OnInit } from '@angular/core';
import { DscButtonService } from './dsc-button.service';

@Component({
  selector: 'app-dsc-button',
  templateUrl: './dsc-button.component.html',
  styleUrls: ['./dsc-button.component.scss']
})
export class DscButtonComponent implements OnInit {
  sizes = ['small', 'medium', 'large'];
  constructor() {}

  ngOnInit() {}
}
