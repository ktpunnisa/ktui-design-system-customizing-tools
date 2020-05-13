import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import chroma from 'chroma-js';

import {
  ColorShade,
  PaletteSize,
  ColorTheme,
  ColorToken,
  ShadowSystem,
  ShadeSystem,
  ColorSystem
} from './color';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class DscColorService {
  colorThemes: ColorTheme;
  colorShades: ColorShade;
  brandColors = ['primary', 'secondary'];
  systemColors = ['success', 'info', 'warning', 'danger'];
  naturalColors = ['white', 'gray', 'black'];
  allColors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];
  shades = ['lightest', 'lighter', 'light', 'default', 'dark', 'darker'];
  size: PaletteSize = {
    xs: { width: 20, height: 20, borderRadius: 4 },
    s: { width: 112, height: 40, borderRadius: 4 },
    m: { width: 112, height: 52, borderRadius: 4 },
    ml: { width: 120, height: 80, borderRadius: 4 },
    l: { width: 180, height: 120, borderRadius: 8 },
    xl: { width: 210, height: 140, borderRadius: 8 }
  };
  displayContainer: string;

  constructor(private apiService: ApiService) {
    this.displayContainer = 'base';
  }

  getColorToken(projectId: string): Observable<ColorToken> {
    return this.apiService.get(`project/${projectId}/color`);
  }

  updateColorToken(projectId: string, themes: ColorTheme, shades: ColorShade): Observable<any> {
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

  mixColorOpacity(color, opacity) {
    return chroma(color).alpha(opacity);
  }

  getColorShade(colorShade: ShadeSystem, color) {
    if (colorShade.type === 'transparent') {
      return 'transparent';
    }
    const colorCode =
      colorShade.type === 'custom' ? this.colorThemes[color] : this.colorThemes[colorShade.color];
    const shade = colorShade.shade;
    const opacity = this.colorShades[colorShade.shade] * 0.01;
    return this.mixColorShade(colorCode, shade, opacity);
  }

  getColorShadow(colorShade: ShadowSystem, color) {
    if (colorShade.type === 'transparent') {
      return 'transparent';
    }
    const colorCode =
      colorShade.type === 'custom' ? this.colorThemes[color] : this.colorThemes[colorShade.color];
    const opacity = colorShade.opacity;
    return this.mixColorOpacity(colorCode, opacity);
  }

  getBoxShadows(boxShadows: ShadowSystem[], color) {
    let boxShadowStyle = '';
    boxShadows.forEach(boxShadow => {
      const colorCode = this.getColorShadow(boxShadow, color);
      const style = `${boxShadow.x}px ${boxShadow.y}px ${boxShadow.blur}px ${boxShadow.spread}px ${colorCode}`;
      boxShadowStyle = boxShadowStyle === '' ? `${style}` : `${style}, ${boxShadowStyle}`;
    });
    return boxShadowStyle;
  }

  getColorList(mainColor: string): ColorSystem[] {
    let colorList = [];
    const transparent = [{ name: 'transparent', color: 'transparent', shade: 'default' }];
    colorList = colorList.concat(transparent);
    const colorScale = this.shades.map(shade => {
      return {
        name: `${shade} color`,
        color: mainColor,
        shade
      };
    });
    colorList = colorList.concat(colorScale);
    const white = [{ name: 'white', color: 'white', shade: 'default' }];
    colorList = colorList.concat(white);
    const grayScale = this.shades.map(shade => {
      return {
        name: shade === 'default' ? 'gray' : `${shade} gray`,
        color: 'gray',
        shade
      };
    });
    colorList = colorList.concat(grayScale);
    const black = [{ name: 'black', color: 'black', shade: 'default' }];
    colorList = colorList.concat(black);
    return colorList;
  }

  getColorSystem(colorShade: ShadeSystem, mainColor): ColorSystem {
    console.log(colorShade, mainColor);
    if (colorShade.type === 'transparent') {
      return { name: 'transparent', color: 'transparent', shade: 'default' };
    } else if (colorShade.type === 'custom') {
      return { name: `${colorShade.shade} color`, color: mainColor, shade: colorShade.shade };
    }
    return {
      name:
        colorShade.shade === 'default'
          ? colorShade.color
          : `${colorShade.shade} ${colorShade.color}`,
      color: colorShade.color,
      shade: colorShade.shade
    };
  }

  get devColorThemes(): ColorTheme {
    return {
      primary: '#ff8879',
      secondary: '#009ba6',
      success: '#00CCA6',
      info: '#5c80ff',
      warning: '#ffcf5c',
      danger: '#ff647c',
      white: '#ffffff',
      gray: '#818181',
      black: '#232323'
    };
  }

  get devColorShades(): ColorShade {
    return {
      lightest: 55,
      lighter: 30,
      light: 20,
      default: 0,
      dark: 30,
      darker: 45
    };
  }
}
