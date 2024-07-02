
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
@ObjectType()
export class User {
    @Prop()
    @Field()
    name: string;

    @Prop()
    @Field()
    email: string;

    @Prop()
    @Field()
    mobile: string;

    @Prop({ default: false })
    isDeleted: boolean;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
