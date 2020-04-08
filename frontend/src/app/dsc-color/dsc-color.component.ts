import { Component, OnInit } from '@angular/core';
import { DscColorService } from './dsc-color.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dsc-color',
  templateUrl: './dsc-color.component.html',
  styleUrls: ['./dsc-color.component.scss']
})
export class DscColorComponent implements OnInit {
  isBase = false;

  constructor(private route: ActivatedRoute, protected DscColor: DscColorService) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      const colorStyle = data.color;
      this.DscColor.colorThemes = colorStyle.themes;
      this.DscColor.colorShades = colorStyle.shades;
    });
  }
}
