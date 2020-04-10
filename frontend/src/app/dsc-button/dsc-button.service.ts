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
  shapeName = ['shape'];
  sizeName = ['size'];
  stateName = ['normal', 'hover', 'pressed', 'disabled'];
  sizes = ['small', 'medium', 'large'];
  types = ['default', 'outline', 'ghost'];

  constructor(private apiService: ApiService) {}

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
}
