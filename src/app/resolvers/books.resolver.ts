import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';
@Injectable({ providedIn: 'root' })
export class BooksResolver implements Resolve<Book[]> {
  constructor(private books: BookService) {}
  resolve() {
    return this.books.getAll();
  }
}
