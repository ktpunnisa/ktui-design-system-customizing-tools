import {
  Controller,
  Post,
  Param,
  Body,
  Get,
  Patch,
  Delete,
} from '@nestjs/common';
import { LinkService } from './link.service';
import { LinkSize, LinkType } from './interfaces/link.interface';

@Controller()
export class LinkController {
  constructor(private readonly linkService: LinkService) {}

  @Post()
  async addLink(
    @Param('projectId') projectId: string,
    @Body('sizes') sizes: LinkSize,
    @Body('types') types: LinkType,
  ) {
    const generatedId = await this.linkService.insertLink(
      projectId,
      sizes,
      types,
    );
    return { id: generatedId };
  }

  @Get()
  getLink(@Param('projectId') projectId: string) {
    return this.linkService.getLink(projectId);
  }

  @Get('token')
  generaToken(@Param('projectId') projectId: string) {
    return this.linkService.generateToken(projectId);
  }

  @Patch()
  async updateLink(
    @Param('projectId') projectId: string,
    @Body('sizes') sizes: LinkSize,
    @Body('types') types: LinkType,
  ) {
    return this.linkService.updateLink(projectId, sizes, types);
  }

  @Delete()
  async removeLink(@Param('projectId') projectId: string) {
    return this.linkService.deleteLink(projectId);
  }
}
