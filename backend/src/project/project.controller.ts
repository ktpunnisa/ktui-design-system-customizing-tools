import { Controller, Get, Post, Body, Query, Param } from '@nestjs/common';
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
    await this.colorService.insertColor(generatedId, null, null);
    await this.buttonService.insertButton(generatedId, null, null, null);
    return { id: generatedId };
  }
}
