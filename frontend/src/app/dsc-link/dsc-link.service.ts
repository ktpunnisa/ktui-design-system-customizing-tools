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

  get devLinkSizes(): LinkSize {
    return {
      small: { fontSize: 14, fontWeight: 500 },
      medium: {
        fontSize: 16,
        fontWeight: 600
      },
      large: {
        fontSize: 18,
        fontWeight: 700
      }
    };
  }

  get devLinkTypes(): LinkType {
    return {
      default: {
        normal: {
          font: { type: 'custom', color: '', shade: 'default' },
          textDecoration: 'underline'
        },
        hover: {
          font: { type: 'custom', color: '', shade: 'dark' },
          textDecoration: 'underline'
        },
        pressed: {
          font: { type: 'custom', color: '', shade: 'darker' },
          textDecoration: 'underline'
        }
      },
      nav: {
        normal: {
          font: { type: 'fixed', color: 'black', shade: 'default' },
          textDecoration: 'none'
        },
        hover: {
          font: { type: 'custom', color: '', shade: 'default' },
          textDecoration: 'underline'
        },
        pressed: {
          font: { type: 'custom', color: '', shade: 'dark' },
          textDecoration: 'underline'
        }
      }
    };
  }
}
