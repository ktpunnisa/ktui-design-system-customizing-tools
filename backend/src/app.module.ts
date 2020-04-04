import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColorModule } from './color/color.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/dscProjectDB'),
    ColorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
