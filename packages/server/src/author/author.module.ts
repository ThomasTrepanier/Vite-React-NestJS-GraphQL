import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorResolver } from './author.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorSchema } from './entities/author.entity';
import { BookModule } from 'src/book/book.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Author',
        schema: AuthorSchema,
      },
    ]),
    BookModule,
  ],
  providers: [AuthorResolver, AuthorService],
})
export class AuthorModule {}
