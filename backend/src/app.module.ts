import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { ColorModule } from './color/color.module';
import { routes } from './routes';
import { RouterModule } from 'nest-router';
import { ButtonModule } from './button/button.module';
import configuration from './configuration';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/dscProjectDB'),
    RouterModule.forRoutes(routes),
    ConfigModule.forRoot({
      load: [configuration],
      envFilePath: '.env',
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../../', 'db'),
    }),
    ProjectModule,
    ColorModule,
    ButtonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
