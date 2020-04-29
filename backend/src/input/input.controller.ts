import {
  Controller,
  Post,
  Param,
  Body,
  Get,
  Patch,
  Delete,
} from '@nestjs/common';
import { InputService } from './input.service';
import {
  DInputShape,
  DInputSize,
  DInputType,
} from 'src/interfaces/input.interface';

@Controller()
export class InputController {
  constructor(private readonly inputService: InputService) {}

  @Post()
  async addInput(
    @Param('projectId') projectId: string,
    @Body('shape') shape: DInputShape,
    @Body('sizes') sizes: DInputSize,
    @Body('types') types: DInputType,
  ) {
    const generatedId = await this.inputService.insertInput(
      projectId,
      shape,
      sizes,
      types,
    );
    return { id: generatedId };
  }

  @Get()
  getInput(@Param('projectId') projectId: string) {
    return this.inputService.getInput(projectId);
  }

  @Get('token')
  generaToken(@Param('projectId') projectId: string) {
    return this.inputService.generateToken(projectId);
  }

  @Patch()
  async updateInput(
    @Param('projectId') projectId: string,
    @Body('shape') shape: DInputShape,
    @Body('sizes') sizes: DInputSize,
    @Body('types') types: DInputType,
  ) {
    return this.inputService.updateInput(projectId, shape, sizes, types);
  }

  @Delete()
  async removeInput(@Param('projectId') projectId: string) {
    return this.inputService.deleteInput(projectId);
  }
}
