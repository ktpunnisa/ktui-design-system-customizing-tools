import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { ColorModule } from './color/color.module';
import { routes } from './routes';
import { RouterModule } from 'nest-router';
import { ButtonModule } from './button/button.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/dscProjectDB'),
    RouterModule.forRoutes(routes),
    ProjectModule,
    ColorModule,
    ButtonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
