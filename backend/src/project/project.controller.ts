import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller()
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}
  @Get()
  getColor(@Query('userId') userId: string) {
    return this.projectService.getProject(userId);
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
    return { id: generatedId };
  }
}
