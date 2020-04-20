import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Param,
  Delete,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { ColorService } from 'src/color/color.service';
import { ButtonService } from 'src/button/button.service';

@Controller()
export class ProjectController {
  constructor(
    private readonly projectService: ProjectService,
    private readonly colorService: ColorService,
    private readonly buttonService: ButtonService,
  ) {}
  @Get()
  getAllColor(@Query('userId') userId: string) {
    return this.projectService.getAllProjects(userId);
  }

  @Get(':projectId')
  getColor(@Param('projectId') projectId: string) {
    return this.projectService.getProject(projectId);
  }

  @Post()
  async addProject(
    @Body('projectName') projectName: string,
    @Body('creatorId') creatorId: string,
  ) {
    const generatedId = await this.projectService.insertProject(
      projectName,
      creatorId,
    );
    await this.colorService.insertColor(generatedId);
    await this.buttonService.insertButton(generatedId);
    return { id: generatedId };
  }

  @Get(':projectId/generate')
  async generateToken(@Param('projectId') projectId: string) {
    const libraryDir = await this.projectService.cloneLibrary(projectId);
    const {
      tokenDir,
      libraryZipDir,
    } = await this.projectService.generateFolder(projectId, libraryDir);
    await this.colorService.generateToken(projectId, tokenDir);
    await this.buttonService.generateToken(projectId, tokenDir);
    await this.projectService.buildLibrary(libraryDir);
    await this.projectService.zipLibrary(projectId, libraryDir, libraryZipDir);
    return 'generate finish';
  }

  @Delete(':projectId')
  async removeProject(@Param('projectId') projectId: string) {
    await this.colorService.deleteColor(projectId);
    await this.buttonService.deleteButton(projectId);
    return this.projectService.deleteProject(projectId);
  }
}
