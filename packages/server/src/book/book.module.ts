import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookResolver } from './book.resolver';
import { BookService } from './book.service';
import { BookSchema } from './entities/book.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Book',
        schema: BookSchema,
      },
    ]),
  ],
  providers: [BookResolver, BookService],
})
export class BookModule {}
