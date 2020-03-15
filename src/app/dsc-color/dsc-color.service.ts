import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DscColor, DscShade, Palette, PaletteSize } from './dsc-color';
import chroma from 'chroma-js';

@Injectable({
  providedIn: 'root'
})
export class DscColorService {
  colors: DscColor;
  shades: DscShade;
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
    lightest: 0.65,
    lighter: 0.3,
    light: 0.1,
    base: 0,
    dark: 0.3,
    darker: 0.5
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
      this.colors = response;
    });
    this.getShades().subscribe(response => {
      this.shades = response;
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
