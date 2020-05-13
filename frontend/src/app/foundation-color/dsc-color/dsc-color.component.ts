import { Component, OnInit } from '@angular/core';
import { DscColorService } from '../color.service';
import { ActivatedRoute } from '@angular/router';
import { DscProjectService } from '../../dsc-project/dsc-project.service';

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
    window.scrollTo(0, 0);
    this.route.data.subscribe(data => {
      const project = data.project;
      this.ProjectService.currentProject = project;

      const colorToken = data.color;
      this.ColorService.colorThemes = colorToken.themes;
      this.ColorService.colorShades = colorToken.shades;
    });
    this.ProjectService.selectedMenu = 'color';
  }
}
