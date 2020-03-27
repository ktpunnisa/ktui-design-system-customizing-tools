import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DscColor, DscShade, Palette, PaletteSize } from './dsc-color';
import chroma from 'chroma-js';

@Injectable({
  providedIn: 'root'
})
export class DscColorService {
  dscColors: DscColor;
  dscShades: DscShade;
  brandColors = ['primary', 'secondary'];
  systemColors = ['success', 'info', 'warning', 'danger'];
  naturalColors = ['white', 'gray', 'black'];
  shades = ['lightest', 'lighter', 'light', 'base', 'dark', 'darker'];
  size: PaletteSize = {
    s: { width: 112, height: 40, borderRadius: 4 },
    m: { width: 112, height: 52, borderRadius: 4 },
    l: { width: 180, height: 120, borderRadius: 8 },
    xl: { width: 210, height: 140, borderRadius: 8 }
  };

  private COLORS: DscColor = {
    primary: '#ff8879',
    secondary: '#009ba6',
    success: '#00dcc7',
    info: '#5c80ff',
    warning: '#ffcf5c',
    danger: '#ff647c',
    white: '#ffffff',
    gray: '#818181',
    black: '#232323'
  };

  private SHADES = {
    lightest: 65,
    lighter: 30,
    light: 10,
    base: 0,
    dark: 30,
    darker: 50
  };

  constructor() {
    this.updateDscColor();
  }

  getColors(): Observable<any> {
    return of(this.COLORS);
  }

  getShades(): Observable<any> {
    return of(this.SHADES);
  }

  updateDscColor(): void {
    this.getColors().subscribe(response => {
      this.dscColors = response;
    });
    this.getShades().subscribe(response => {
      this.dscShades = response;
    });
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
