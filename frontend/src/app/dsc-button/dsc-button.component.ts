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
    this.route.data.subscribe(data => {
      const buttonToken = data.button;
      this.DscButton.buttonShape = buttonToken.shape;
      this.DscButton.buttonSizes = buttonToken.sizes;
      this.DscButton.buttonTypes = buttonToken.types;
      this.DscButton.buttonBaseSize = buttonToken.sizes.medium;
    });
  }
}
