import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { DscColorService } from './dsc-color.service';
import { ColorToken } from './dsc-color';

@Injectable()
export class DscColorResolver implements Resolve<ColorToken> {
  constructor(private DscColor: DscColorService) {}

  resolve(): Observable<ColorToken> {
    return this.DscColor.getDscColors('test');
  }
}
