import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from '../users/users.model';
import { Car } from '../cars/cars.model';
import { Place } from '../places/places.model';

export type TicketDocument = HydratedDocument<Ticket>;

@Schema()
export class Ticket {
  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Place', required: true })
  parkingPlace: Place;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User',  required: true })
  userId: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Car',required: true })
  carId: Car;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);

export class CreateTicketDto{
  readonly parkingPlace:string;
  readonly userId:string;
  readonly carId:string;
}

 