import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { InputToken } from './dsc-input';
import { DscInputService } from './dsc-input.service';

@Injectable()
export class DscInputResolver implements Resolve<InputToken> {
  constructor(private InputService: DscInputService) {}

  resolve(): Observable<InputToken> {
    return this.InputService.getInputToken('5e9d79ea81f8ad60d9c429df');
  }
}
