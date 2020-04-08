import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { DscButtonService } from './dsc-button.service';
import { ButtonToken } from './dsc-button';

@Injectable()
export class DscButtonResolver implements Resolve<ButtonToken> {
  constructor(private ColorService: DscButtonService) {}

  resolve(): Observable<ButtonToken> {
    return this.ColorService.getButtonToken('test');
  }
}
