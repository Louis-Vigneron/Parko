import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlacesService } from './places.service';
import { PlacesController } from './places.controller';
import { PlaceSchema } from './places.model';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'Place' , schema: PlaceSchema }])],
  providers: [PlacesService],
  controllers: [PlacesController]
})
export class PlacesModule {}
