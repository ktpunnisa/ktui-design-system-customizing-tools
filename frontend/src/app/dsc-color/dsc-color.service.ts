import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import chroma from 'chroma-js';

import { DscShade, PaletteSize, DscTheme, DscColorStyle } from './dsc-color';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class DscColorService {
  dscThemes: DscTheme;
  dscShades: DscShade;
  brandColors = ['primary', 'secondary'];
  systemColors = ['success', 'info', 'warning', 'danger'];
  naturalColors = ['white', 'gray', 'black'];
  shades = ['lightest', 'lighter', 'light', 'default', 'dark', 'darker'];
  size: PaletteSize = {
    s: { width: 112, height: 40, borderRadius: 4 },
    m: { width: 112, height: 52, borderRadius: 4 },
    l: { width: 180, height: 120, borderRadius: 8 },
    xl: { width: 210, height: 140, borderRadius: 8 }
  };

  constructor(private apiService: ApiService) {}

  getDscColors(projectId: string): Observable<DscColorStyle> {
    return this.apiService.get(`project/${projectId}/color`);
  }

  updateDscColors(projectId: string, themes: DscTheme, shades: DscShade): Observable<any> {
    return this.apiService.patch(`project/${projectId}/color`, { themes, shades });
  }

  mixColorShade(color, shade, opacity) {
    if (shade === 'light' || shade === 'lighter' || shade === 'lightest') {
      return chroma.mix(color, 'white', opacity);
    } else if (shade === 'dark' || shade === 'darker') {
      return chroma.mix(color, 'black', opacity);
    }
    return color;
  }

  getColorOpacity(hex, opacity) {
    const r = '0x' + hex[1] + hex[2];
    const g = '0x' + hex[3] + hex[4];
    const b = '0x' + hex[5] + hex[6];
    return `rgba(${parseInt(r, 16)},${parseInt(g, 16)},${parseInt(b, 16)},${opacity})`;
  }
}
