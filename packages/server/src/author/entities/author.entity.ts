import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Book } from 'src/book/entities/book.entity';

@Schema()
@ObjectType()
export class Author {
  @Field(() => ID)
  _id: string;

  @Prop()
  @Field()
  name: string;

  @Field(() => [Book], { description: 'Books written by the author' })
  books: Book[];
}

export type AuthorDocument = Author & mongoose.Document;

export const AuthorSchema = SchemaFactory.createForClass(Author);
