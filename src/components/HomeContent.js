import React from "react";
import BookShelf from "./BookShelf";

import * as BooksAPI from "../BooksAPI";

class HomeContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      currentlyReading: [],
      wantToRead: [],
      read: [],
    };
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.categorizeBooks(books);
    });
  }

  categorizeBooks = (books) => {
    let read = [];
    let wantToRead = [];
    let currentlyReading = [];
    books.forEach((book) => {
      switch (book.shelf) {
        case "read":
          read.push(book);
          break;
        case "currentlyReading":
          currentlyReading.push(book);
          break;
        default:
          wantToRead.push(book);
          break;
      }
    });
    this.setState({ books, read, wantToRead, currentlyReading });
  };

  handleShelfChange = (changedBook, shelf) => {
    changedBook.shelf = shelf;
    this.setState((prevState) => {
      prevState.books
        .filter((book) => book.id !== changedBook.id)
        .concat(changedBook);
    }, this.categorizeBooks(this.state.books));
  };

  render() {
    return (
      <div className="list-books-content">
        <div>
          <BookShelf
            books={this.state.currentlyReading}
            shelfTitle="Currently Reading"
            handleShelfChange={this.handleShelfChange}
          />
          <BookShelf
            books={this.state.wantToRead}
            shelfTitle="Want to Read"
            handleShelfChange={this.handleShelfChange}
          />
          <BookShelf
            books={this.state.read}
            shelfTitle="Read"
            handleShelfChange={this.handleShelfChange}
          />
        </div>
      </div>
    );
  }
}

export default HomeContent;
