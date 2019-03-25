import React from 'react'
import Book from './Book';

export default function SearchPage(){
    return (<div className="search-books">
     <BookSearchBar/>
     <BookResults/>
   </div>)
   }

   const BookResults =()=>(<div className="search-books-results">
   <ol className="books-grid">
   <li>
   <Book  bookTitle="To Kill a Mockingbird" bookAuthor="Harper Lee" bookImg="http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"/>
     </li>
     <li>
   <Book  bookTitle="To Kill a Mockingbird" bookAuthor="Harper Lee" bookImg="http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"/>
     </li>
   </ol>
 </div>)
   const BookSearchBar = ()=>(<div className="search-books-bar">
   <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
   <div className="search-books-input-wrapper">
     {/*
       NOTES: The search from BooksAPI is limited to a particular set of search terms.
       You can find these search terms here:
       https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

       However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
       you don't find a specific author or title. Every search is limited by search terms.
     */}
     <input type="text" placeholder="Search by title or author"/>

   </div>
 </div>)