import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Color, Theme, Shade } from '../interfaces/color.interface';

@Injectable()
export class ColorService {
  constructor(@InjectModel('Color') private colorModel: Model<Color>) {}

  async insertColor(projectId: string, themes: Theme, shades: Shade) {
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
      id: color[0].id,
      project_id: color[0].project_id,
      themes: color[0].themes,
      shades: color[0].shades,
    };
  }

  async updateColor(projectId: string, themes: Theme, shades: Shade) {
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
  }

  private async findColor(projectId: string): Promise<Color> {
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
