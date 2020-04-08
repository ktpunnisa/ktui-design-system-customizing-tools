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

  constructor(private route: ActivatedRoute, protected ColorService: DscColorService) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      const colorToken = data.color;
      this.ColorService.colorThemes = colorToken.themes;
      this.ColorService.colorShades = colorToken.shades;
    });
  }
}
