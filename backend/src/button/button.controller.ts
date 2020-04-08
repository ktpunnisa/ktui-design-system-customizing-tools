import {
  Controller,
  Post,
  Param,
  Body,
  Get,
  Patch,
  Delete,
} from '@nestjs/common';
import { ButtonService } from './button.service';
import {
  ButtonShape,
  ButtonSize,
  ButtonType,
} from 'src/interfaces/button.interface';

@Controller()
export class ButtonController {
  constructor(private readonly buttonService: ButtonService) {}

  @Post()
  async addButton(
    @Param('projectId') projectId: string,
    @Body('shape') shape: ButtonShape,
    @Body('sizes') sizes: ButtonSize,
    @Body('types') types: ButtonType,
  ) {
    const generatedId = await this.buttonService.insertButton(
      projectId,
      shape,
      sizes,
      types,
    );
    return { id: generatedId };
  }

  @Get()
  getButton(@Param('projectId') projectId: string) {
    return this.buttonService.getButton(projectId);
  }

  @Patch()
  async updateButton(
    @Param('projectId') projectId: string,
    @Body('shape') shape: ButtonShape,
    @Body('sizes') sizes: ButtonSize,
    @Body('types') types: ButtonType,
  ) {
    await this.buttonService.updateButton(projectId, shape, sizes, types);
    return null;
  }

  @Delete()
  async removeButton(@Param('projectId') projectId: string) {
    await this.buttonService.deleteButton(projectId);
    return null;
  }
}
