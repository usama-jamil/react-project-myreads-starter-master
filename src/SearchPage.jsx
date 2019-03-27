import Book from "./Book";
import React, { Component } from "react";
import * as BookAPI from "./BooksAPI";

export default class SearchPage extends Component {
  state = {
    searchQuery: "",
    BookList: []
  };

  handleChange = event => {
    this.setState({ searchQuery: event.target.value });
    // BookAPI.getAll().then(b => console.log(b));
    BookAPI.search(this.state.searchQuery).then(books =>
      this.setState({ BookList: books })
    );
    // console.log(this.state.BookList);
  };

  render() {
    const { searchQuery, BookList } = this.state;

    return (
      <div className="search-books">
        <BookSearchBar
          searchQuery={searchQuery}
          handleChange={this.handleChange}
          history={this.props.history}
        />
        <BookResults BookList={BookList} />
      </div>
    );
  }
}
const BookResults = ({ BookList }) => (
  <div className="search-books-results">
    <ol className="books-grid">
      {/* <li> */}
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
  </div>
);
const BookSearchBar = props => (
  <div className="search-books-bar">
    <button className="close-search" onClick={() => props.history.push("/")}>
      Close
    </button>
    <div className="search-books-input-wrapper">
      {/*
       NOTES: The search from BooksAPI is limited to a particular set of search terms.
       You can find these search terms here:
       https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

       However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
       you don't find a specific author or title. Every search is limited by search terms.
     */}
      <input
        type="text"
        placeholder="Search by title or author"
        onChange={props.handleChange}
        value={props.searchQuery}
      />
    </div>
  </div>
);
