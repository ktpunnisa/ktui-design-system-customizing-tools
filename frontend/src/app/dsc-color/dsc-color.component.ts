import { Component, OnInit } from '@angular/core';
import { DscColorService } from './dsc-color.service';
import { ActivatedRoute } from '@angular/router';
import { DscProjectService } from '../dsc-project.service';

@Component({
  selector: 'app-dsc-color',
  templateUrl: './dsc-color.component.html',
  styleUrls: ['./dsc-color.component.scss']
})
export class DscColorComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    protected ColorService: DscColorService,
    private ProjectService: DscProjectService
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      const colorToken = data.color;
      this.ColorService.colorThemes = colorToken.themes;
      this.ColorService.colorShades = colorToken.shades;
    });
    this.ProjectService.selectedMenu = 'color';
  }
}
