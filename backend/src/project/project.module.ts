import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectSchema } from 'src/schemas/project.schema';
import { ColorModule } from 'src/color/color.module';
import { ButtonModule } from 'src/button/button.module';
import { LinkModule } from 'src/link/link.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Project', schema: ProjectSchema }]),
    ColorModule,
    ButtonModule,
    LinkModule,
  ],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
