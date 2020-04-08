import { Component, OnInit } from '@angular/core';
import { DscButtonService } from './dsc-button.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dsc-button',
  templateUrl: './dsc-button.component.html',
  styleUrls: ['./dsc-button.component.scss']
})
export class DscButtonComponent implements OnInit {
  constructor(private route: ActivatedRoute, protected DscButton: DscButtonService) {}

  ngOnInit() {
    this.DscButton.getButtonToken('test').subscribe(res => {
      this.DscButton.buttonShape = res.shape;
      this.DscButton.buttonSizes = res.sizes;
      this.DscButton.buttonTypes = res.types;
      this.DscButton.buttonBaseSize = res.sizes.medium;
    });
  }
}
