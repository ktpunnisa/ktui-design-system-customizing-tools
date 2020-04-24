import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from 'src/interfaces/project.interface';

@Injectable()
export class ProjectService {
  fs = require('fs-extra');
  util = require('util');
  path = require('path');
  shell = require('shelljs');

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

  async cloneLibrary(projectId: string) {
    const project = await this.getProject(projectId);
    await this.shell.cd(this.staticDir);
    await this.shell.exec(
      `git clone https://github.com/ktpunnisa/kt-web-component.git ${project.name}-library`,
    );
    console.log(`clone ${project.name}-library`);
    return await this.path.join(this.staticDir, `${project.name}-library`);
  }

  async generateFolder(projectId: string, libraryDir: string) {
    const tokenDir = await this.path.join(libraryDir, 'src', 'style-tokens');
    if (!this.fs.existsSync(tokenDir)) {
      await this.fs.mkdir(tokenDir, err => {
        if (err) throw err;
      });
    }
    console.log('generate style-tokens folder');
    const project = await this.getProject(projectId);
    const libraryZipDir = await this.path.join(
      this.staticDir,
      'library',
      `${project.name}-library`,
    );
    if (!this.fs.existsSync(libraryZipDir)) {
      await this.fs.mkdir(libraryZipDir, err => {
        if (err) throw err;
      });
    } else {
      this.fs.readdir(libraryZipDir, (err, files) => {
        if (err) throw err;

        for (const file of files) {
          const pathFile = this.path.join(libraryZipDir, file);
          if (this.fs.lstatSync(pathFile).isDirectory()) {
            this.fs.remove(pathFile, err => {
              if (err) throw err;
            });
          } else {
            this.fs.unlink(pathFile, err => {
              if (err) throw err;
            });
          }
        }
      });
    }
    console.log('generate zip folder');
    return { tokenDir, libraryZipDir };
  }

  async buildLibrary(libraryDir: string) {
    await this.shell.cd(libraryDir);
    await this.shell.exec('npm install');
    console.log('install node_module');
    await this.shell.exec('npm run build');
    console.log('build Library');
  }

  async zipLibrary(
    projectId: string,
    libraryDir: string,
    libraryZipDir: string,
  ) {
    await this.shell.cd(libraryDir);
    await this.shell.cp('package.json', `${libraryZipDir}/package.json`);
    console.log('copy package.json');
    await this.shell.cp('-R', 'public', `${libraryZipDir}/public`);
    console.log('copy public');

    const project = await this.getProject(projectId);
    const zipDir = await this.path.join(this.staticDir, 'library');
    await this.shell.cd(zipDir);
    await this.shell.exec(
      `zip -r ${project.name}-library.zip ${project.name}-library`,
    );
    return `library/${project.name}-library.zip`;
  }

  async deleteProject(projectId: string) {
    if (!projectId) {
      throw new NotFoundException('project_id does not exist!');
    }
    const result = await this.projectModel
      .deleteMany({ _id: projectId })
      .exec();
    if (result.n === 0) {
      throw new NotFoundException('Could not find project.');
    }
    return 'delete project';
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
