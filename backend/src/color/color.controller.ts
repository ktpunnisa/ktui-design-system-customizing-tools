import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Delete,
  Param,
} from '@nestjs/common';
import { ColorService } from './color.service';
import { ColorTheme, ColorShade } from './interfaces/color.interface';

@Controller()
export class ColorController {
  constructor(private readonly colorService: ColorService) {}

  @Post()
  async addColor(
    @Param('projectId') projectId: string,
    @Body('themes') themes: ColorTheme,
    @Body('shades') shades: ColorShade,
  ) {
    const generatedId = await this.colorService.insertColor(
      projectId,
      themes,
      shades,
    );
    return { id: generatedId };
  }

  @Get()
  getColor(@Param('projectId') projectId: string) {
    return this.colorService.getColor(projectId);
  }

  @Get('token')
  generaToken(@Param('projectId') projectId: string) {
    return this.colorService.generateToken(projectId);
  }

  @Patch()
  async updateColor(
    @Param('projectId') projectId: string,
    @Body('themes') themes: ColorTheme,
    @Body('shades') shades: ColorShade,
  ) {
    return this.colorService.updateColor(projectId, themes, shades);
  }

  @Delete()
  async removeColor(@Param('projectId') projectId: string) {
    return this.colorService.deleteColor(projectId);
  }
}
