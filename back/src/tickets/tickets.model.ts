import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from '../users/users.model';
import { Car } from '../cars/cars.model';

export type TicketDocument = HydratedDocument<Ticket>;

@Schema()
export class Ticket {
  @Prop({ required: true })
  numberPlace: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User'})
  userId: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Car' })
  carId: Car;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);

export class CreateTicketDto{
  readonly numberPlace:number;
  readonly userId:string;
  readonly carId:string;
}

 