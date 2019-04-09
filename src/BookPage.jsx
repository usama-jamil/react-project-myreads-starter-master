import Book from "./Book";
import * as BookAPI from "./BooksAPI";
import React, { Component } from "react";
import BookGrid from "./BooksGrid";

export default class BookPage extends Component {

  constructor() {
    super();

    this.selectBookShelf = this.selectBookShelf.bind(this);
  }

  state = {
    allBooks: [],
    currentlyReading: [],
    wantToRead: [],
    read: []
  };

  componentDidMount = () => {
    BookAPI.getAll().then(books => {
      this.setState({ allBooks: books })
      this.selectBookShelf()
    });
  };

  selectBookShelf() {
    console.log(this.state)
    // const { allBooks } = this.state
    let allBooks=[]
    let currentlyReading = [];
    let wantToRead = [];
    let read = [];
    
    BookAPI.getAll().then(books => allBooks=books).then(()=>{
      allBooks.map(book => {
        if (book.shelf === "currentlyReading") {
          currentlyReading.push(book);
        } else if (book.shelf === "wantToRead") {
          wantToRead.push(book);
        } else if (book.shelf === "read") {
          read.push(book);
        }
        return;
      }); 
      this.setState({
        currentlyReading,
        wantToRead,
        read
      });
    })
    
  }


  render() {
    // console.log(this.state);
    const { currentlyReading, wantToRead, read } = this.state;
    return (
      <div className="list-books">
        <MyReadsTitle />
        <div className="list-books-content">
          <div>
            <BookShelf
              title="Currently Reading"
              BookList={currentlyReading}
              selectBookShelf={this.selectBookShelf}
            />
            <BookShelf
              title="Want to Read"
              BookList={wantToRead}
              selectBookShelf={this.selectBookShelf}
            />
            <BookShelf
              title="Read"
              BookList={read}
              selectBookShelf={this.selectBookShelf}
            />
          </div>
        </div>
        <AddBook {...this.props} />
      </div>
    );
  }
}

const AddBook = props => (
  <div className="open-search">
    <button onClick={() => props.history.push("/search")}>Add a book</button>
  </div>
);

function MyReadsTitle() {
  return (
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
  );
}

function BookShelf({ title, BookList, selectBookShelf }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <BookShelfBooks BookList={BookList} selectBookShelf={selectBookShelf} />
    </div>
  );
}

function BookShelfBooks({ BookList, selectBookShelf }) {
  return (
    <div className="bookshelf-books">
      <BookGrid BookList={BookList} selectBookShelf={selectBookShelf} />
      {/* <ol className="books-grid">
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
      </ol> */}
    </div>
  );
}
