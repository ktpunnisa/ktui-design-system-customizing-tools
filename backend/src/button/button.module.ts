import { Module } from '@nestjs/common';
import { ButtonController } from './button.controller';
import { ButtonService } from './button.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ButtonSchema } from 'src/schemas/button.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Button', schema: ButtonSchema }]),
  ],
  controllers: [ButtonController],
  providers: [ButtonService],
  exports: [ButtonService],
})
export class ButtonModule {}
