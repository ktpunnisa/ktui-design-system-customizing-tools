import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';

import {
  InputToken,
  DInputSize,
  DInputShape,
  DInputType,
} from 'src/interfaces/input.interface';

import inputToken from '../style-tokens/input';

@Injectable()
export class InputService {
  fs = require('fs');
  util = require('util');
  path = require('path');

  constructor(
    @InjectModel('Input') private inputModel: Model<InputToken>,
    private configService: ConfigService,
  ) {}

  staticDir = this.configService.get('staticDir');
  เ;

  async insertInput(
    projectId: string,
    shape?: DInputShape,
    sizes?: DInputSize,
    types?: DInputType,
  ) {
    const newInput = new this.inputModel({
      project_id: projectId,
      shape: shape ? shape : inputToken.shape,
      sizes: sizes ? sizes : inputToken.sizes,
      types: types ? types : inputToken.types,
    });
    const result = await newInput.save();
    return result.id as string;
  }

  async getInput(projectId: string) {
    if (!projectId) {
      throw new NotFoundException('project_id does not exist!');
    }
    const input = await this.findInput(projectId);
    return {
      shape: input[0].shape,
      sizes: input[0].sizes,
      types: input[0].types,
    };
  }

  async generateToken(projectId: string, folderDir?: string) {
    const input = await this.getInput(projectId);
    await this.fs.writeFileSync(
      this.path.join(folderDir ? folderDir : this.staticDir, 'input.js'),
      `export default ${this.util.inspect(input, {
        showHidden: false,
        depth: null,
      })};`,
      'utf-8',
    );
    console.log('generate input token');
    return { message: 'generate input token' };
  }

  async updateInput(
    projectId: string,
    shape: DInputShape,
    sizes: DInputSize,
    types: DInputType,
  ) {
    if (!projectId) {
      throw new NotFoundException('project_id does not exist!');
    }
    const updatedInput = await this.findInput(projectId);
    if (shape) {
      updatedInput[0].shape = shape;
    }
    if (sizes) {
      updatedInput[0].sizes = sizes;
    }
    if (types) {
      updatedInput[0].types = types;
    }
    updatedInput[0].save();
    return { message: 'update input' };
  }

  async deleteInput(projectId: string) {
    if (!projectId) {
      throw new NotFoundException('project_id does not exist!');
    }
    const result = await this.inputModel
      .deleteMany({ project_id: projectId })
      .exec();
    if (result.n === 0) {
      throw new NotFoundException('Could not find input.');
    }
    return { message: 'delete input' };
  }

  private async findInput(projectId: string): Promise<InputToken> {
    let input;
    try {
      input = await this.inputModel.find({ project_id: projectId }).exec();
    } catch (error) {
      throw new NotFoundException('Could not find input.');
    }
    if (input.length === 0) {
      throw new NotFoundException('Could not find input.');
    }
    return input;
  }
}
