import { Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { InjectModel } from '@nestjs/mongoose';
import { BookDocument } from './entities/book.entity';
import { Model } from 'mongoose';
import { Author } from 'src/author/entities/author.entity';

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

  async findAuthor(id: string): Promise<Author> {
    return (
      await this.bookModel
        .findById(id, {
          author: 1, // facultatif, pour juste avoir l'auteur
        })
        .populate('author')
    ).author as Author;
  }

  async findByAuthor(id: string) {
    return this.bookModel.find({ author: id });
  }

  remove(id: string) {
    return this.bookModel.findByIdAndDelete(id);
  }
}
