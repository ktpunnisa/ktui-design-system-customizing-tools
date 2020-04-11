import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { ButtonToken, ButtonSizeValue, ButtonSize, ButtonShape, ButtonType } from './dsc-button';
import { Selected } from '../display-container/display-container';

@Injectable({
  providedIn: 'root'
})
export class DscButtonService {
  buttonBaseSize: ButtonSizeValue;
  buttonShape: ButtonShape;
  buttonSizes: ButtonSize;
  buttonTypes: ButtonType;

  shapeName = ['shape'];
  sizeName = ['size'];
  typeName = ['type'];
  states = ['normal', 'hover', 'pressed', 'disabled'];
  sizes = ['small', 'medium', 'large'];
  types = ['default', 'outline', 'ghost'];

  selected: Selected = {
    row: 'shape',
    col: 'shape'
  };

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
