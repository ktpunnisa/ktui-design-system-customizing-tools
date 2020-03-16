import { Component, OnInit } from '@angular/core';
import { DscColorService } from './dsc-color.service';

@Component({
  selector: 'app-dsc-color',
  templateUrl: './dsc-color.component.html',
  styleUrls: ['./dsc-color.component.scss']
})
export class DscColorComponent implements OnInit {
  isBase = false;

  constructor(private DscColor: DscColorService) {}

  ngOnInit() {}
}
