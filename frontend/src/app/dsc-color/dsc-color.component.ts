import { Component, OnInit } from '@angular/core';
import { DscColorService } from './dsc-color.service';

@Component({
  selector: 'app-dsc-color',
  templateUrl: './dsc-color.component.html',
  styleUrls: ['./dsc-color.component.scss']
})
export class DscColorComponent implements OnInit {
  isBase = false;

  constructor(protected DscColor: DscColorService) {}

  ngOnInit() {
    this.DscColor.getDscColors().subscribe(res => {
      this.DscColor.dscThemes = res.themes;
      this.DscColor.dscShades = res.shades;
    });
  }
}
