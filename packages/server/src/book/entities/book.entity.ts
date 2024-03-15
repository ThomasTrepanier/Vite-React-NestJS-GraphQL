import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Author } from 'src/author/entities/author.entity';

@Schema()
@ObjectType()
export class Book {
  @Field(() => ID)
  _id: string;

  @Prop()
  @Field()
  title: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Author' })
  @Field(() => Author, { description: 'Author of the book', nullable: true })
  author: Author;
}

export type BookDocument = Book & mongoose.Document;

export const BookSchema = SchemaFactory.createForClass(Book);
