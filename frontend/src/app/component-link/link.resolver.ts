import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { LinkToken } from './link';
import { DscLinkService } from './link.service';

@Injectable()
export class DscLinkResolver implements Resolve<LinkToken> {
  constructor(private LinkService: DscLinkService) {}

  resolve(): Observable<LinkToken> {
    return this.LinkService.getLinkToken('5e9d79ea81f8ad60d9c429df');
  }
}
