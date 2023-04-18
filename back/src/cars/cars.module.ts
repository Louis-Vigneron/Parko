import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { CarSchema } from './cars.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Car' , schema: CarSchema }])],
  providers: [CarsService],
  controllers: [CarsController]
})
export class CarsModule {}
