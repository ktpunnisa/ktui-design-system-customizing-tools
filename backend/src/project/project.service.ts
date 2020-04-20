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

  async getAllProjects(userId: string) {
    if (!userId) {
      throw new NotFoundException('user_id does not exist!');
    }
    const projects = await this.findAllProjects(userId);
    return projects;
  }

  async getProject(projectId: string) {
    if (!projectId) {
      throw new NotFoundException('project_id does not exist!');
    }
    const projects = await this.findProject(projectId);
    return projects;
  }

  private async findAllProjects(userId: string): Promise<Project> {
    let project;
    try {
      project = await this.projectModel.find({ creator_id: userId }).exec();
    } catch (error) {
      throw new NotFoundException('Could not find projects.');
    }
    if (project.length === 0) {
      throw new NotFoundException('Could not find projects.');
    }
    return project;
  }

  private async findProject(projectId: string): Promise<Project> {
    let project;
    try {
      project = await this.projectModel.find({ _id: projectId }).exec();
    } catch (error) {
      throw new NotFoundException('Could not find project.');
    }
    if (project.length === 0) {
      throw new NotFoundException('Could not find project.');
    }
    return project[0];
  }
}
