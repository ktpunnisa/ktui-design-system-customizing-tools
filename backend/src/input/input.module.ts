import { Module } from '@nestjs/common';
import { InputService } from './input.service';
import { InputController } from './input.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { InputSchema } from './schemas/input.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Input', schema: InputSchema }]),
  ],
  providers: [InputService],
  controllers: [InputController],
  exports: [InputService],
})
export class InputModule {}
