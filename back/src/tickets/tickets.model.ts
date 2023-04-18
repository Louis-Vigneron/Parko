import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TicketDocument = HydratedDocument<Ticket>;

@Schema()
export class Ticket {
  @Prop({ required: true })
  parkingPlace: number;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  carId: string;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);

export class CreateTicketDto{
  readonly parkingPlace:string;
  readonly userId:string;
  readonly carId:string;
}

 