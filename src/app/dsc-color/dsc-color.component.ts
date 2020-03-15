import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dsc-color',
  templateUrl: './dsc-color.component.html',
  styleUrls: ['./dsc-color.component.scss']
})
export class DscColorComponent implements OnInit {
  isBase = false;
  brandColors = ['primary', 'secondary'];
  systemColors = ['success', 'info', 'warning', 'danger'];
  naturalColors = ['white', 'gray', 'black'];
  shades = ['lightest', 'lighter', 'light', 'base', 'dark', 'darker'];

  constructor() {}

  ngOnInit() {}
}
