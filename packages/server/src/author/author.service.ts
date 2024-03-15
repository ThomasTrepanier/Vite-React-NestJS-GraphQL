import { Injectable } from '@nestjs/common';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthorDocument } from './entities/author.entity';
import { BookService } from 'src/book/book.service';

@Injectable()
export class AuthorService {
  constructor(
    @InjectModel('Author') private readonly authorModel: Model<AuthorDocument>,
    private readonly bookService: BookService,
  ) {}

  async create(createAuthorInput: CreateAuthorInput) {
    return this.authorModel.create(createAuthorInput);
  }

  async findAll() {
    return this.authorModel.find();
  }

  async findOne(id: string) {
    return this.authorModel.findById(id);
  }

  async update(id: string, updateAuthorInput: UpdateAuthorInput) {
    return this.authorModel.findByIdAndUpdate(id, updateAuthorInput, {
      new: true,
    });
  }

  async findBooks(id: string) {
    return this.bookService.findByAuthor(id);
  }

  remove(id: string) {
    return this.authorModel.findByIdAndDelete(id);
  }
}
