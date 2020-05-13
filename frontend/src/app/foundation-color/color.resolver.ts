import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { DscColorService } from './color.service';
import { ColorToken } from './color';

@Injectable()
export class DscColorResolver implements Resolve<ColorToken> {
  constructor(private ColorService: DscColorService) {}

  resolve(): Observable<ColorToken> {
    return this.ColorService.getColorToken('5e9d79ea81f8ad60d9c429df');
  }
}
