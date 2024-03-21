import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema()
@ObjectType()
export class Book {
  @Field(() => ID)
  _id: string;

  @Prop()
  @Field()
  title: string;
}

export type BookDocument = Book & mongoose.Document;

export const BookSchema = SchemaFactory.createForClass(Book);
