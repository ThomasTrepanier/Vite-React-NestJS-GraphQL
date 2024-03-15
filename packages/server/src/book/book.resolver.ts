import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { BookService } from './book.service';
import { Book } from './entities/book.entity';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';

@Resolver(() => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Mutation(() => Book)
  createBook(@Args('createBookInput') createBookInput: CreateBookInput) {
    return this.bookService.create(createBookInput);
  }

  @Query(() => [Book])
  books() {
    return this.bookService.findAll();
  }

  @Query(() => Book)
  book(@Args('bookId', { type: () => String }) bookId: string) {
    return this.bookService.findOne(bookId);
  }

  @Mutation(() => Book)
  updateBook(@Args('updateBookInput') updateBookInput: UpdateBookInput) {
    return this.bookService.update(updateBookInput._id, updateBookInput);
  }

  @Mutation(() => Book)
  removeBook(@Args('bookId', { type: () => String }) bookId: string) {
    return this.bookService.remove(bookId);
  }

  @ResolveField()
  async author(@Parent() book: Book) {
    return this.bookService.findAuthor(book._id);
  }
}
