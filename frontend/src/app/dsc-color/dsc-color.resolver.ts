import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { DscColorService } from './dsc-color.service';
import { ColorToken } from './dsc-color';

@Injectable()
export class DscColorResolver implements Resolve<ColorToken> {
  constructor(private ColorService: DscColorService) {}

  resolve(): Observable<ColorToken> {
    return this.ColorService.getColorToken('test');
  }
}
