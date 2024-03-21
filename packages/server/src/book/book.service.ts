import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { BookDocument } from './entities/book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectModel('Book') private readonly bookModel: Model<BookDocument>,
  ) {}

  async create(createBookInput: CreateBookInput) {
    return this.bookModel.create(createBookInput);
  }

  async findAll() {
    return this.bookModel.find();
  }

  async findOne(id: string) {
    return this.bookModel.findById(id);
  }

  async update(id: string, updateBookInput: UpdateBookInput) {
    return this.bookModel.findByIdAndUpdate(id, updateBookInput, { new: true });
  }

  remove(id: string) {
    return this.bookModel.findByIdAndDelete(id);
  }
}
