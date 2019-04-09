import * as BookAPI from "./BooksAPI";
import React, { Component } from "react";

export default class Book extends Component {
  constructor() {
    super();

    this.updateBookShelf = this.updateBookShelf.bind(this);
  }

  updateBookShelf(newShelf) {
    console.log(newShelf);
    const { bookId } = this.props;

    //update in server
    BookAPI.get(bookId).then(updateBook =>
      BookAPI.update(updateBook, newShelf)
    ).then(this.props.selectBookShelf);

    
    // console.log(updateBook);
    // .then(a=>console.log(a));

    // BookAPI.get(bookId).then(a => console.log(a));
  }
  render() {
    // console.log(this.props);
    const { bookImg, bookAuthor, bookTitle, shelf} = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <BookImg img={bookImg} />
          <div className="book-shelf-changer">
            <BookOptions shelf={shelf} updateBookShelf={this.updateBookShelf}  />
          </div>
        </div>
        <div className="book-title">{bookTitle}</div>
        <div className="book-authors">{bookAuthor}</div>
      </div>
    );
  }
}

const BookImg = props => (
  <div
    className="book-cover"
    style={{ width: 128, height: 193, backgroundImage: `url("${props.img}")` }}
  />
);

const BookOptions = ({ shelf, updateBookShelf }) => (
  <select
    value={shelf}
    onChange={event => {
      updateBookShelf(event.target.value);
    }}
  >
    <option value="move" disabled>
      Move to...
    </option>
    <option value="currentlyReading">Currently Reading</option>
    <option value="wantToRead">Want to Read</option>
    <option value="read">Read</option>
    <option value="none">None</option>
  </select>
);
