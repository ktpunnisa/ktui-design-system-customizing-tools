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

  get devDInputShape(): DInputShape {
    return {
      label: { margin: { bottom: 4 } },
      input: { borderRadius: 4, borderStyle: 'solid', borderWidth: 2 }
    };
  }

  get devDInputSizes(): DInputSize {
    return {
      small: {
        label: { fontSize: 14, fontWeight: 400 },
        input: {
          fontSize: 16,
          padding: { top: 6, right: 8, bottom: 6, left: 8 }
        }
      },
      medium: {
        label: { fontSize: 14, fontWeight: 500 },
        input: {
          fontSize: 16,
          padding: { top: 8, right: 8, bottom: 8, left: 8 }
        }
      },
      large: {
        label: { fontSize: 16, fontWeight: 500 },
        input: {
          fontSize: 18,
          padding: { top: 10, right: 10, bottom: 10, left: 10 }
        }
      }
    };
  }

  get devDInputTypes(): DInputType {
    return {
      default: {
        normal: {
          mainColor: 'primary',
          label: { font: { type: 'fixed', color: 'black', shade: 'default' } },
          input: {
            font: { type: 'fixed', color: 'black', shade: 'default' },
            background: { type: 'fixed', color: 'white', shade: 'default' },
            border: { type: 'fixed', color: 'gray', shade: 'default' }
          }
        },
        focus: {
          mainColor: 'info',
          label: { font: { type: 'custom', color: '', shade: 'default' } },
          input: {
            font: { type: 'fixed', color: 'black', shade: 'default' },
            background: { type: 'fixed', color: 'white', shade: 'default' },
            border: { type: 'custom', color: '', shade: 'default' }
          }
        },
        disabled: {
          mainColor: 'primary',
          label: { font: { type: 'fixed', color: 'gray', shade: 'default' } },
          input: {
            font: { type: 'fixed', color: 'gray', shade: 'light' },
            background: { type: 'fixed', color: 'gray', shade: 'lightest' },
            border: { type: 'fixed', color: 'gray', shade: 'light' }
          }
        },
        error: {
          mainColor: 'danger',
          label: { font: { type: 'custom', color: '', shade: 'default' } },
          input: {
            font: { type: 'fixed', color: 'black', shade: 'default' },
            background: { type: 'custom', color: '', shade: 'lightest' },
            border: { type: 'custom', color: '', shade: 'default' }
          }
        }
      }
    };
  }
}
