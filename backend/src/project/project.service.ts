import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from 'src/interfaces/project.interface';

@Injectable()
export class ProjectService {
  fs = require('fs');
  util = require('util');
  path = require('path');

  constructor(
    @InjectModel('Project') private projectModel: Model<Project>,
    private configService: ConfigService,
  ) {}

  staticDir = this.configService.get('staticDir');

  async insertProject(projectName: string, creatorId: string) {
    const newProject = new this.projectModel({
      name: projectName,
      creator_id: creatorId,
    });
    const result = await newProject.save();
    return result.id as string;
  }

  async getProject(userId: string) {
    if (!userId) {
      throw new NotFoundException('user_id does not exist!');
    }
    const project = await this.findProject(userId);
    return project;
  }

  private async findProject(userId: string): Promise<Project> {
    let project;
    try {
      project = await this.projectModel.find({ creator_id: userId }).exec();
    } catch (error) {
      throw new NotFoundException('Could not find project.');
    }
    if (!project) {
      throw new NotFoundException('Could not find project.');
    }
    return project;
  }
}
