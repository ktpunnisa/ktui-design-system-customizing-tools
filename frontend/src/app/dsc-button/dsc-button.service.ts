import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DscButton, ButtonSizeValue } from './dsc-button';

@Injectable({
  providedIn: 'root'
})
export class DscButtonService {
  buttonStyles: DscButton;
  buttonBaseSize: ButtonSizeValue;
  private BUTTON_STYLES: DscButton = {
    borderRadius: 4,
    size: {
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
    },
    type: {
      default: {
        normal: {
          font: {
            type: 'fixed',
            color: 'white',
            shade: 'base'
          },
          background: {
            type: 'custom',
            color: '',
            shade: 'base'
          },
          border: {
            style: 'solid',
            width: 1,
            type: 'custom',
            color: '',
            shade: 'base'
          },
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
          ]
        },
        hover: {
          font: {
            type: 'fixed',
            color: 'white',
            shade: 'base'
          },
          background: {
            type: 'custom',
            color: '',
            shade: 'light'
          },
          border: {
            style: 'solid',
            width: 1,
            type: 'custom',
            color: '',
            shade: 'light'
          },
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
          ]
        },
        pressed: {
          font: {
            type: 'fixed',
            color: 'white',
            shade: 'base'
          },
          background: {
            type: 'custom',
            color: '',
            shade: 'lighter'
          },
          border: {
            style: 'solid',
            width: 1,
            type: 'custom',
            color: '',
            shade: 'lighter'
          },
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
          ]
        },
        disabled: {
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
            style: 'solid',
            width: 1,
            type: 'fixed',
            color: 'gray',
            shade: 'lightest'
          },
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
          ]
        }
      },
      outline: {
        normal: {
          font: {
            type: 'custom',
            color: '',
            shade: 'base'
          },
          background: {
            type: 'fixed',
            color: 'white',
            shade: 'base'
          },
          border: {
            style: 'solid',
            width: 1,
            type: 'custom',
            color: '',
            shade: 'base'
          },
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
          ]
        },
        hover: {
          font: {
            type: 'fixed',
            color: 'white',
            shade: 'base'
          },
          background: {
            type: 'custom',
            color: '',
            shade: 'base'
          },
          border: {
            style: 'solid',
            width: 1,
            type: 'custom',
            color: '',
            shade: 'base'
          },
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
          ]
        },
        pressed: {
          font: {
            type: 'fixed',
            color: 'white',
            shade: 'base'
          },
          background: {
            type: 'custom',
            color: '',
            shade: 'lighter'
          },
          border: {
            style: 'solid',
            width: 1,
            type: 'custom',
            color: '',
            shade: 'lighter'
          },
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
          ]
        },
        disabled: {
          font: {
            type: 'fixed',
            color: 'gray',
            shade: 'lighter'
          },
          background: {
            type: 'fixed',
            color: 'white',
            shade: 'base'
          },
          border: {
            style: 'solid',
            width: 1,
            type: 'fixed',
            color: 'gray',
            shade: 'lighter'
          },
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
          ]
        }
      },
      ghost: {
        normal: {
          font: {
            type: 'custom',
            color: '',
            shade: 'base'
          },
          background: {
            type: 'transparent',
            color: '',
            shade: ''
          },
          border: {
            style: 'solid',
            width: 1,
            type: 'transparent',
            color: '',
            shade: ''
          },
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
          ]
        },
        hover: {
          font: {
            type: 'custom',
            color: '',
            shade: 'base'
          },
          background: {
            type: 'fixed',
            color: 'gray',
            shade: 'lightest'
          },
          border: {
            style: 'solid',
            width: 1,
            type: 'fixed',
            color: 'gray',
            shade: 'lightest'
          },
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
          ]
        },
        pressed: {
          font: {
            type: 'custom',
            color: '',
            shade: 'base'
          },
          background: {
            type: 'fixed',
            color: 'gray',
            shade: 'lighter'
          },
          border: {
            style: 'solid',
            width: 1,
            type: 'fixed',
            color: 'gray',
            shade: 'lighter'
          },
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
          ]
        },
        disabled: {
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
            style: 'solid',
            width: 1,
            type: 'fixed',
            color: 'gray',
            shade: 'lightest'
          },
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
          ]
        }
      }
    }
  };

  constructor() {
    this.updateDscButton();
  }

  getButtonStyles(): Observable<DscButton> {
    return of(this.BUTTON_STYLES);
  }

  updateDscButton(): void {
    this.getButtonStyles().subscribe(response => {
      this.buttonStyles = response;
      this.buttonBaseSize = response.size.medium;
    });
  }
}
