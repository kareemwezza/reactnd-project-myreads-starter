import React from "react";
import Book from "./Book";
import * as bookAPI from "../BooksAPI";

function BooksList(props) {
  const handleBook = (book, shelf) => {
    bookAPI.update(book, shelf).then((newBooks) => {
      props.handleShelfChange(book, shelf);
    });
  };

  const renderBooks = () => {
    return props.books.map((book) => {
      return <Book book={book} handleBook={handleBook} key={book.id} />;
    });
  };

  return (
    <div className="bookshelf-books">
      <ol className="books-grid">{renderBooks()}</ol>
    </div>
  );
}

export default BooksList;
