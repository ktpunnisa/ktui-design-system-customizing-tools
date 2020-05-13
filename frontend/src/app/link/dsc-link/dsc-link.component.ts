import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DscLinkService } from '../dsc-link.service';
import { DscColorService } from '../../color/dsc-color.service';
import { DscProjectService } from '../../dsc-project/dsc-project.service';

@Component({
  selector: 'app-dsc-link',
  templateUrl: './dsc-link.component.html',
  styleUrls: ['./dsc-link.component.scss']
})
export class DscLinkComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    protected LinkService: DscLinkService,
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

      const linkToken = data.link;
      this.LinkService.linkSizes = linkToken.sizes;
      this.LinkService.linkTypes = linkToken.types;
      this.LinkService.linkBaseSize = linkToken.sizes.medium;
    });
    this.LinkService.selected = {
      row: 'size',
      col: 'small'
    };
    this.ProjectService.selectedMenu = 'link';
  }

  changeSelected(event) {
    this.LinkService.selected = event;
  }
}
