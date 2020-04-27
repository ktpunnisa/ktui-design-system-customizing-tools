import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';

import { LinkToken, LinkSize, LinkType } from 'src/interfaces/link.interface';
import linkToken from '../style-tokens/link';

@Injectable()
export class LinkService {
  fs = require('fs');
  util = require('util');
  path = require('path');

  constructor(
    @InjectModel('Link') private linkModel: Model<LinkToken>,
    private configService: ConfigService,
  ) {}

  staticDir = this.configService.get('staticDir');

  async insertLink(projectId: string, sizes?: LinkSize, types?: LinkType) {
    const newLink = new this.linkModel({
      project_id: projectId,
      sizes: sizes ? sizes : linkToken.sizes,
      types: types ? types : linkToken.types,
    });
    const result = await newLink.save();
    return result.id as string;
  }

  async getLink(projectId: string) {
    if (!projectId) {
      throw new NotFoundException('project_id does not exist!');
    }
    const link = await this.findLink(projectId);
    return {
      shape: link[0].shape,
      sizes: link[0].sizes,
      types: link[0].types,
    };
  }

  async generateToken(projectId: string, folderDir?: string) {
    const link = await this.getLink(projectId);
    await this.fs.writeFileSync(
      this.path.join(folderDir ? folderDir : this.staticDir, 'link.js'),
      `export default ${this.util.inspect(link, {
        showHidden: false,
        depth: null,
      })};`,
      'utf-8',
    );
    console.log('generate link token');
    return { message: 'generate link token' };
  }

  async updateLink(projectId: string, sizes: LinkSize, types: LinkType) {
    if (!projectId) {
      throw new NotFoundException('project_id does not exist!');
    }
    const updatedLink = await this.findLink(projectId);
    if (sizes) {
      updatedLink[0].sizes = sizes;
    }
    if (types) {
      updatedLink[0].types = types;
    }
    updatedLink[0].save();
    return { message: 'update link' };
  }

  async deleteLink(projectId: string) {
    if (!projectId) {
      throw new NotFoundException('project_id does not exist!');
    }
    const result = await this.linkModel
      .deleteMany({ project_id: projectId })
      .exec();
    if (result.n === 0) {
      throw new NotFoundException('Could not find link.');
    }
    return { message: 'delete link' };
  }

  private async findLink(projectId: string): Promise<LinkToken> {
    let link;
    try {
      link = await this.linkModel.find({ project_id: projectId }).exec();
    } catch (error) {
      throw new NotFoundException('Could not find link.');
    }
    if (link.length === 0) {
      throw new NotFoundException('Could not find link.');
    }
    return link;
  }
}
