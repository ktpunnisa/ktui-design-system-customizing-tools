import { Injectable } from '@angular/core';
import { DInputSizeValue, DInputShape, DInputSize, DInputType, InputToken } from './dsc-input';
import { Selected } from '../base/display-container/display-container';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DscInputService {
  dInputBaseSize: DInputSizeValue;
  dInputShape: DInputShape;
  dInputSizes: DInputSize;
  dInputTypes: DInputType;
  selected: Selected;

  shapeName = ['shape'];
  sizeName = ['size'];
  typeStates = ['normal', 'error'];
  states = ['normal', 'focus', 'disabled', 'error'];
  sizes = ['small', 'medium', 'large'];
  types = ['default'];

  constructor(private apiService: ApiService) {}

  getInputToken(projectId: string): Observable<InputToken> {
    return this.apiService.get(`project/${projectId}/input`);
  }

  updateInputToken(
    projectId: string,
    shape: DInputShape,
    sizes: DInputSize,
    types: DInputType
  ): Observable<any> {
    return this.apiService.patch(`project/${projectId}/input`, { shape, sizes, types });
  }
}
