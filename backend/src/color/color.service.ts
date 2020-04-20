import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

import {
  ColorToken,
  ColorTheme,
  ColorShade,
} from '../interfaces/color.interface';

@Injectable()
export class ColorService {
  fs = require('fs');
  util = require('util');
  path = require('path');

  constructor(
    @InjectModel('Color') private colorModel: Model<ColorToken>,
    private configService: ConfigService,
  ) {}

  staticDir = this.configService.get('staticDir');

  async insertColor(projectId: string, themes: ColorTheme, shades: ColorShade) {
    const newColor = new this.colorModel({
      project_id: projectId,
      themes,
      shades,
    });
    const result = await newColor.save();
    return result.id as string;
  }

  async getColor(projectId: string) {
    if (!projectId) {
      throw new NotFoundException('project_id does not exist!');
    }
    const color = await this.findColor(projectId);
    return {
      themes: color[0].themes,
      shades: color[0].shades,
    };
  }

  async generateToken(projectId: string) {
    const color = this.getColor(projectId);
    color.then(color => {
      this.fs.writeFileSync(
        this.path.join(this.staticDir, 'color.js'),
        `export default ${this.util.inspect(color, {
          showHidden: false,
          depth: null,
        })};`,
        'utf-8',
      );
    });
    return color;
  }

  async updateColor(projectId: string, themes: ColorTheme, shades: ColorShade) {
    if (!projectId) {
      throw new NotFoundException('project_id does not exist!');
    }
    const updatedColor = await this.findColor(projectId);
    if (themes) {
      updatedColor[0].themes = themes;
    }
    if (shades) {
      updatedColor[0].shades = shades;
    }
    updatedColor[0].save();
    return 'update color';
  }

  async deleteColor(projectId: string) {
    if (!projectId) {
      throw new NotFoundException('project_id does not exist!');
    }
    const result = await this.colorModel
      .deleteMany({ project_id: projectId })
      .exec();
    if (result.n === 0) {
      throw new NotFoundException('Could not find color.');
    }
    return 'delete color';
  }

  private async findColor(projectId: string): Promise<ColorToken> {
    let color;
    try {
      color = await this.colorModel.find({ project_id: projectId }).exec();
    } catch (error) {
      throw new NotFoundException('Could not find color.');
    }
    if (!color) {
      throw new NotFoundException('Could not find color.');
    }
    return color;
  }
}
