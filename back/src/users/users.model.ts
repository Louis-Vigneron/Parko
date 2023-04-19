import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  mail: string;

  /* @Prop()
  ticketId?: [string];  */
}

export const UserSchema = SchemaFactory.createForClass(User);

export class CreateUserDto{
  readonly firstName:string;
  readonly lastName:string;
  readonly phone:string;
  readonly mail:string;/* 
  readonly ticketId:[string]; */
}
