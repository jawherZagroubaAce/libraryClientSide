import { Pipe, PipeTransform } from "@angular/core";
import { Book } from "../models/book";
@Pipe({ name: "bookSearch" })
export class BookSearchPipe implements PipeTransform {
  transform(books: Book[] | null, q: string) {
    const t = q.trim().toLowerCase();
    return (books ?? []).filter(
      (b) =>
        !t ||
        [
          b.title,
          b.author.name,
          b.isbn,
          ...b.categories.map((c) => c.name),
        ].some((v) => v.toLowerCase().includes(t)),
    );
  }
}
