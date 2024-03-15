import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { AuthorService } from './author.service';
import { Author } from './entities/author.entity';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';

@Resolver(() => Author)
export class AuthorResolver {
  constructor(private readonly authorService: AuthorService) {}

  @Mutation(() => Author)
  createAuthor(
    @Args('createAuthorInput') createAuthorInput: CreateAuthorInput,
  ) {
    return this.authorService.create(createAuthorInput);
  }

  @Query(() => [Author])
  authors() {
    return this.authorService.findAll();
  }

  @Query(() => Author)
  author(@Args('authorId', { type: () => String }) authorId: string) {
    return this.authorService.findOne(authorId);
  }

  @Mutation(() => Author)
  updateAuthor(
    @Args('updateAuthorInput') updateAuthorInput: UpdateAuthorInput,
  ) {
    return this.authorService.update(updateAuthorInput._id, updateAuthorInput);
  }

  @Mutation(() => Author)
  removeAuthor(@Args('authorId', { type: () => String }) authorId: string) {
    return this.authorService.remove(authorId);
  }

  @ResolveField()
  async books(@Parent() author: Author) {
    return this.authorService.findBooks(author._id);
  }
}
