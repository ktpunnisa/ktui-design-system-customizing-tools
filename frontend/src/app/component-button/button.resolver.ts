import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { DscButtonService } from './button.service';
import { ButtonToken } from './button';

@Injectable()
export class DscButtonResolver implements Resolve<ButtonToken> {
  constructor(private ButtonService: DscButtonService) {}

  resolve(): Observable<ButtonToken> {
    return this.ButtonService.getButtonToken('5e9d79ea81f8ad60d9c429df');
  }
}
