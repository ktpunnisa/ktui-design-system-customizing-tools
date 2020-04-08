import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ButtonToken, ButtonSizeValue, ButtonSize, ButtonShape, ButtonType } from './dsc-button';
import { ApiService } from '../api.service';

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

  getButtonSize(size: string): ButtonSizeValue {
    return this.buttonSizes ? this.buttonSizes[size] : undefined;
  }
}
