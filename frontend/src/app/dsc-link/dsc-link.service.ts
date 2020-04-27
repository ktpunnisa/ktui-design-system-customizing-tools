import { Injectable } from '@angular/core';
import { LinkSizeValue, LinkSize, LinkType, LinkToken } from './dsc-link';
import { Selected } from '../base/display-container/display-container';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DscLinkService {
  linkBaseSize: LinkSizeValue;
  linkSizes: LinkSize;
  linkTypes: LinkType;
  selected: Selected;

  sizeName = ['size'];
  typeName = ['type'];
  states = ['normal', 'hover', 'pressed'];
  sizes = ['small', 'medium', 'large'];
  types = ['default', 'nav'];

  constructor(private apiService: ApiService) {}

  getLinkToken(projectId: string): Observable<LinkToken> {
    return this.apiService.get(`project/${projectId}/link`);
  }

  updateLinkToken(projectId: string, sizes: LinkSize, types: LinkType): Observable<any> {
    return this.apiService.patch(`project/${projectId}/link`, { sizes, types });
  }
}
