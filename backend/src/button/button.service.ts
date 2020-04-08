import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  ButtonToken,
  ButtonType,
  ButtonShape,
  ButtonSize,
} from 'src/interfaces/button.interface';

@Injectable()
export class ButtonService {
  constructor(@InjectModel('Button') private buttonModel: Model<ButtonToken>) {}

  async insertButton(
    projectId: string,
    shape: ButtonShape,
    sizes: ButtonSize,
    types: ButtonType,
  ) {
    const newButton = new this.buttonModel({
      project_id: projectId,
      shape,
      sizes,
      types,
    });
    const result = await newButton.save();
    return result.id as string;
  }

  async getButton(projectId: string) {
    if (!projectId) {
      throw new NotFoundException('project_id does not exist!');
    }
    const button = await this.findButton(projectId);
    return {
      shape: button[0].shape,
      sizes: button[0].sizes,
      types: button[0].types,
    };
  }

  async updateButton(
    projectId: string,
    shape: ButtonShape,
    sizes: ButtonSize,
    types: ButtonType,
  ) {
    if (!projectId) {
      throw new NotFoundException('project_id does not exist!');
    }
    const updatedButton = await this.findButton(projectId);
    if (shape) {
      updatedButton[0].shape = shape;
    }
    if (sizes) {
      updatedButton[0].sizes = sizes;
    }
    if (types) {
      updatedButton[0].types = types;
    }
    updatedButton[0].save();
  }

  async deleteButton(projectId: string) {
    if (!projectId) {
      throw new NotFoundException('project_id does not exist!');
    }
    const result = await this.buttonModel
      .deleteMany({ project_id: projectId })
      .exec();
    if (result.n === 0) {
      throw new NotFoundException('Could not find button.');
    }
  }

  private async findButton(projectId: string): Promise<ButtonToken> {
    let button;
    try {
      button = await this.buttonModel.find({ project_id: projectId }).exec();
    } catch (error) {
      throw new NotFoundException('Could not find button.');
    }
    if (!button) {
      throw new NotFoundException('Could not find button.');
    }
    return button;
  }
}
