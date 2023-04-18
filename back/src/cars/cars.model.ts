import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CarDocument = HydratedDocument<Car>;

@Schema()
export class Car {
  @Prop({ required: true })
  model: string;

  @Prop({ required: true })
  numberplate: string;
}

export const CarSchema = SchemaFactory.createForClass(Car);

export class CreateCarDto{
  readonly model:string;
  readonly numberplate:string;
}

 