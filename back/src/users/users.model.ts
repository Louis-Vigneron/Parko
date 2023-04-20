import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';

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

  @Prop({ required: true, unique:true })
  numberplate: string;

  @Prop({ required: true })
  numberticket: number;

  @Prop({ required: true, unique:true })
  numberPlace: number;
}



export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.plugin(uniqueValidator);

export class CreateUserDto{
  readonly firstName:string;
  readonly lastName:string;
  readonly phone:string;
  readonly mail:string;
  readonly numberplate:string;
  readonly numberticket:number;
  readonly numberPlace:number;
}
