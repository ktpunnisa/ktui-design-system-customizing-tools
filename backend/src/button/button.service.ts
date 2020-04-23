import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

import {
  ButtonToken,
  ButtonType,
  ButtonShape,
  ButtonSize,
} from 'src/interfaces/button.interface';
import buttonToken from '../style-tokens/button';

@Injectable()
export class ButtonService {
  fs = require('fs');
  util = require('util');
  path = require('path');

  constructor(
    @InjectModel('Button') private buttonModel: Model<ButtonToken>,
    private configService: ConfigService,
  ) {}

  staticDir = this.configService.get('staticDir');

  async insertButton(
    projectId: string,
    shape?: ButtonShape,
    sizes?: ButtonSize,
    types?: ButtonType,
  ) {
    const newButton = new this.buttonModel({
      project_id: projectId,
      shape: shape ? shape : buttonToken.shape,
      sizes: sizes ? sizes : buttonToken.sizes,
      types: types ? types : buttonToken.types,
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

  async generateToken(projectId: string, folderDir?: string) {
    const button = await this.getButton(projectId);
    await this.fs.writeFileSync(
      this.path.join(folderDir ? folderDir : this.staticDir, 'button.js'),
      `export default ${this.util.inspect(button, {
        showHidden: false,
        depth: null,
      })};`,
      'utf-8',
    );
    console.log('generate button token');
    return 'generate button token';
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
    return 'update button';
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
    return 'delete button';
  }

  private async findButton(projectId: string): Promise<ButtonToken> {
    let button;
    try {
      button = await this.buttonModel.find({ project_id: projectId }).exec();
    } catch (error) {
      throw new NotFoundException('Could not find button.');
    }
    if (button.length === 0) {
      throw new NotFoundException('Could not find button.');
    }
    return button;
  }
}
