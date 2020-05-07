import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { ButtonToken, ButtonSizeValue, ButtonSize, ButtonShape, ButtonType } from './dsc-button';
import { Selected } from '../base/display-container/display-container';

@Injectable({
  providedIn: 'root'
})
export class DscButtonService {
  buttonBaseSize: ButtonSizeValue;
  buttonShape: ButtonShape;
  buttonSizes: ButtonSize;
  buttonTypes: ButtonType;
  selected: Selected;

  shapeName = ['shape'];
  sizeName = ['size'];
  typeName = ['type'];
  states = ['normal', 'hover', 'pressed', 'disabled'];
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

  get devButtonShape(): ButtonShape {
    return {
      borderRadius: 4,
      borderStyle: 'solid',
      borderWidth: 1
    };
  }

  get devButtonSizes(): ButtonSize {
    return {
      small: {
        fontSize: 14,
        padding: {
          top: 8,
          right: 12,
          bottom: 8,
          left: 12
        }
      },
      medium: {
        fontSize: 16,
        padding: {
          top: 12,
          right: 20,
          bottom: 12,
          left: 20
        }
      },
      large: {
        fontSize: 18,
        padding: {
          top: 16,
          right: 24,
          bottom: 16,
          left: 24
        }
      }
    };
  }

  get devButtonTypes(): ButtonType {
    return {
      default: {
        normal: {
          boxShadows: [
            {
              x: 0,
              y: 4,
              blur: 10,
              spread: 0,
              type: 'fixed',
              color: 'black',
              opacity: 0.1
            }
          ],
          font: {
            type: 'fixed',
            color: 'white',
            shade: 'default'
          },
          background: {
            type: 'custom',
            color: '',
            shade: 'default'
          },
          border: {
            type: 'custom',
            color: '',
            shade: 'default'
          }
        },
        hover: {
          boxShadows: [
            {
              x: 0,
              y: 4,
              blur: 10,
              spread: 0,
              type: 'fixed',
              color: 'black',
              opacity: 0.2
            }
          ],
          font: {
            type: 'fixed',
            color: 'white',
            shade: 'default'
          },
          background: {
            type: 'custom',
            color: '',
            shade: 'light'
          },
          border: {
            type: 'custom',
            color: '',
            shade: 'light'
          }
        },
        pressed: {
          boxShadows: [
            {
              x: 0,
              y: 4,
              blur: 10,
              spread: 0,
              type: 'fixed',
              color: 'black',
              opacity: 0.2
            }
          ],
          font: {
            type: 'fixed',
            color: 'white',
            shade: 'default'
          },
          background: {
            type: 'custom',
            color: '',
            shade: 'lighter'
          },
          border: {
            type: 'custom',
            color: '',
            shade: 'lighter'
          }
        },
        disabled: {
          boxShadows: [
            {
              x: 0,
              y: 4,
              blur: 10,
              spread: 0,
              type: 'fixed',
              color: 'black',
              opacity: 0.1
            }
          ],
          font: {
            type: 'fixed',
            color: 'gray',
            shade: 'lighter'
          },
          background: {
            type: 'fixed',
            color: 'gray',
            shade: 'lightest'
          },
          border: {
            type: 'fixed',
            color: 'gray',
            shade: 'lightest'
          }
        }
      },
      outline: {
        normal: {
          boxShadows: [
            {
              x: 0,
              y: 0,
              blur: 0,
              spread: 0,
              type: 'transparent',
              color: '',
              opacity: 0
            }
          ],
          font: {
            type: 'custom',
            color: '',
            shade: 'default'
          },
          background: {
            type: 'fixed',
            color: 'white',
            shade: 'default'
          },
          border: {
            type: 'custom',
            color: '',
            shade: 'default'
          }
        },
        hover: {
          boxShadows: [
            {
              x: 0,
              y: 0,
              blur: 0,
              spread: 0,
              type: 'transparent',
              color: '',
              opacity: 0
            }
          ],
          font: {
            type: 'fixed',
            color: 'white',
            shade: 'default'
          },
          background: {
            type: 'custom',
            color: '',
            shade: 'default'
          },
          border: {
            type: 'custom',
            color: '',
            shade: 'default'
          }
        },
        pressed: {
          boxShadows: [
            {
              x: 0,
              y: 0,
              blur: 0,
              spread: 0,
              type: 'transparent',
              color: '',
              opacity: 0
            }
          ],
          font: {
            type: 'fixed',
            color: 'white',
            shade: 'default'
          },
          background: {
            type: 'custom',
            color: '',
            shade: 'lighter'
          },
          border: {
            type: 'custom',
            color: '',
            shade: 'lighter'
          }
        },
        disabled: {
          boxShadows: [
            {
              x: 0,
              y: 0,
              blur: 0,
              spread: 0,
              type: 'transparent',
              color: '',
              opacity: 0
            }
          ],
          font: {
            type: 'fixed',
            color: 'gray',
            shade: 'lighter'
          },
          background: {
            type: 'fixed',
            color: 'white',
            shade: 'default'
          },
          border: {
            type: 'fixed',
            color: 'gray',
            shade: 'lighter'
          }
        }
      },
      ghost: {
        normal: {
          boxShadows: [
            {
              x: 0,
              y: 0,
              blur: 0,
              spread: 0,
              type: 'transparent',
              color: '',
              opacity: 0
            }
          ],
          font: {
            type: 'custom',
            color: '',
            shade: 'default'
          },
          background: {
            type: 'transparent',
            color: '',
            shade: ''
          },
          border: {
            type: 'transparent',
            color: '',
            shade: ''
          }
        },
        hover: {
          boxShadows: [
            {
              x: 0,
              y: 0,
              blur: 0,
              spread: 0,
              type: 'transparent',
              color: '',
              opacity: 0
            }
          ],
          font: {
            type: 'custom',
            color: '',
            shade: 'default'
          },
          background: {
            type: 'fixed',
            color: 'gray',
            shade: 'lightest'
          },
          border: {
            type: 'fixed',
            color: 'gray',
            shade: 'lightest'
          }
        },
        pressed: {
          boxShadows: [
            {
              x: 0,
              y: 0,
              blur: 0,
              spread: 0,
              type: 'transparent',
              color: '',
              opacity: 0
            }
          ],
          font: {
            type: 'custom',
            color: '',
            shade: 'default'
          },
          background: {
            type: 'fixed',
            color: 'gray',
            shade: 'lighter'
          },
          border: {
            type: 'fixed',
            color: 'gray',
            shade: 'lighter'
          }
        },
        disabled: {
          boxShadows: [
            {
              x: 0,
              y: 0,
              blur: 0,
              spread: 0,
              type: 'transparent',
              color: '',
              opacity: 0
            }
          ],
          font: {
            type: 'fixed',
            color: 'gray',
            shade: 'lighter'
          },
          background: {
            type: 'fixed',
            color: 'gray',
            shade: 'lightest'
          },
          border: {
            type: 'fixed',
            color: 'gray',
            shade: 'lightest'
          }
        }
      }
    };
  }
}
