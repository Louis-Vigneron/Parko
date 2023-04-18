import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PlaceDocument = HydratedDocument<Place>;

@Schema()
export class Place {
  @Prop({ required: true })
  numberPlace: number;

  @Prop({ required: true })
  available: boolean;

}

export const PlaceSchema = SchemaFactory.createForClass(Place);

export class CreatePlaceDto{
  readonly numberPlace:number;
  readonly available:boolean;
}
