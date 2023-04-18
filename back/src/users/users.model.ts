import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  fistname: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ required: true })
  phonenumber: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  ticketId: [string];
}

export const UserSchema = SchemaFactory.createForClass(User);

export class CreateUserDto{
  readonly fistname:string;
  readonly lastname:string;
  readonly phonenumber:string;
  readonly email:string;
  readonly ticketId:[string];
}
