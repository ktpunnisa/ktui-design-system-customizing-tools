import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { DscColorService } from './dsc-color.service';
import { DscColorStyle } from './dsc-color';

@Injectable()
export class DscColorResolver implements Resolve<DscColorStyle> {
  constructor(private DscColor: DscColorService) {}

  resolve(): Observable<DscColorStyle> {
    return this.DscColor.getDscColors('test');
  }
}
