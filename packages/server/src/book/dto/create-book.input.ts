import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBookInput {
  @Field(() => String, { description: 'Title of the book' })
  title: string;

  @Field(() => String, { description: 'Author of the book' })
  author: string;
}
