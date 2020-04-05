import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { ColorService } from './color.service';
import { Theme, Shade } from 'src/interfaces/color.interface';

@Controller('color')
export class ColorController {
  constructor(private readonly colorService: ColorService) {}

  @Post()
  async addColor(
    @Body('project_id') projectId: string,
    @Body('themes') themes: Theme,
    @Body('shades') shades: Shade,
  ) {
    const generatedId = await this.colorService.insertColor(
      projectId,
      themes,
      shades,
    );
    return { id: generatedId };
  }

  @Get()
  getColor(@Query('projectId') projectId: string) {
    return this.colorService.getColor(projectId);
  }

  @Patch()
  async updateColor(
    @Body('projectId') projectId: string,
    @Body('themes') themes: Theme,
    @Body('shades') shades: Shade,
  ) {
    await this.colorService.updateColor(projectId, themes, shades);
    return null;
  }

  @Delete()
  async removeColor(@Query('projectId') projectId: string) {
    await this.colorService.deleteColor(projectId);
    return null;
  }
}
