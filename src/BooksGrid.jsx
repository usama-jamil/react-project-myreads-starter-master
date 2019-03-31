import React from "react";
import Book from "./Book";

export default function BookGrid({ BookList }) {
  return (
    <ol className="books-grid">
      {BookList &&
        BookList.map(book => (
          <li key={book.id}>
            <Book
              bookTitle={book.title}
              bookAuthor={book.authors}
              bookImg={book.imageLinks.smallThumbnail}
            />
          </li>
        ))}
    </ol>
  );
}
