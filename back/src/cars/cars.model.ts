import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from '../users/users.model';

export type CarDocument = HydratedDocument<Car>;

@Schema()
export class Car {
  @Prop({ required: true })
  model: string;

  @Prop({ required: true })
  numberplate: string;
  
 /*  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User',  required: true })
  userId: User; */
}

export const CarSchema = SchemaFactory.createForClass(Car);

export class CreateCarDto{
  readonly model:string;
  readonly numberplate:string;
}

 