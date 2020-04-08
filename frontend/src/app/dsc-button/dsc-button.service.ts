import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ButtonToken, ButtonSizeValue, ButtonSize, ButtonShape, ButtonType } from './dsc-button';
import { ApiService } from '../api.service';
import { DscColorService } from '../dsc-color/dsc-color.service';

@Injectable({
  providedIn: 'root'
})
export class DscButtonService {
  buttonToken: ButtonToken;
  buttonBaseSize: ButtonSizeValue;

  buttonShape: ButtonShape;
  buttonSizes: ButtonSize;
  buttonTypes: ButtonType;
  sizes = ['small', 'medium', 'large'];
  types = ['default', 'outline', 'ghost'];
  states = ['normal', 'hover', 'pressed', 'disabled'];

  constructor(private apiService: ApiService, private ColorService: DscColorService) {}

  getButtonToken(projectId: string): Observable<ButtonToken> {
    return this.apiService.get(`project/${projectId}/button`);
  }

  updateButtonToken(
    projectId: string,
    shape: ButtonShape,
    sizes: ButtonSize,
    types: ButtonType
  ): Observable<any> {
    return this.apiService.patch(`project/${projectId}/button`, { shape, sizes, types });
  }

  getColorShade(type, color, shade) {
    if (type === 'transparent') {
      return 'transparent';
    }
    const opacity = this.ColorService.colorShades ? this.ColorService.colorShades[shade] * 0.01 : 1;
    return this.ColorService.mixColorShade(color, shade, opacity);
  }

  // getColorBoxShadow(boxShadow, colorcode) {
  //   if (boxShadow.type === 'transparent') {
  //     return 'transparent';
  //   }
  //   const color =
  //     boxShadow.type === 'fixed'
  //       ? colorToken.themes[boxShadow.color]
  //       : colorcode;
  //   const opacity = boxShadow.opacity;
  //   return getColorOpacity(color, opacity);
  // }

  // function getBoxShadow(state) {
  //   let boxShadowCSS = '';
  //   btnType[state]['boxShadows'].forEach(boxShadow => {
  //     const color = getColorBoxShadow(boxShadow, colorcode);
  //     const style = getBoxShadowCSS(
  //       boxShadow.x,
  //       boxShadow.y,
  //       boxShadow.blur,
  //       boxShadow.spread,
  //       color
  //     );
  //     boxShadowCSS =
  //       boxShadowCSS === '' ? `${style}` : `${style}, ${boxShadowCSS}`;
  //   });
  //   return boxShadowCSS;
  // }
}
