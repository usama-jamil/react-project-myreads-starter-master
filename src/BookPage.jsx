import React from "react";
import Book from "./Book";

export default function BookPage(props) {
  return (
    <div className="list-books">
      <MyReadsTitle />
      <div className="list-books-content">
        <div>
          <BookShelf title="Currently Reading" />
          <BookShelf title="Want to Read" />
          <BookShelf title="Read" />
        </div>
      </div>
      <AddBook />
    </div>
  );
}

const AddBook = props => (
  <div className="open-search">
    <button onClick={() => this.setState({ showSearchPage: true })}>
      Add a book
    </button>
  </div>
);

function MyReadsTitle() {
  return (
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
  );
}

function BookShelf(props) {
  const { title } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <BookShelfBooks />
    </div>
  );
}

function BookShelfBooks(props) {
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        <li>
          <Book
            bookTitle="To Kill a Mockingbird"
            bookAuthor="Harper Lee"
            bookImg="http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
          />
        </li>
        <li>
          <Book
            bookTitle="To Kill a Mockingbird"
            bookAuthor="Harper Lee"
            bookImg="http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
          />
        </li>
      </ol>
    </div>
  );
}
