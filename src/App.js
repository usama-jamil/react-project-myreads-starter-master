import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BookPage from "./BookPage";
import SearchPage from "./SearchPage";

import { BrowserRouter, Route, Switch } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  };

  render() {
    // const books = BooksAPI.getAll();
    return (
      <BrowserRouter>
        <div className="app">
          <Route path="/" component={BookPage} exact />
          <Route path="/search" component={SearchPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default BooksApp;
