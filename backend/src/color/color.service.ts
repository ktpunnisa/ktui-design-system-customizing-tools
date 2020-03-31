import { Injectable } from '@nestjs/common';
import { COLOR } from '../mocks/color.mock';

@Injectable()
export class ColorService {
  color = COLOR;

  getColor(): Promise<any> {
    return new Promise(resolve => {
      resolve(this.color);
    });
  }
}
