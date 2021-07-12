import React from "react";
import Book from "./Book";
import * as bookAPI from "../BooksAPI";

function BooksList(props) {
  const handleBook = (book, shelf) => {
    bookAPI.update(book, shelf).then((newBooks) => {
      props.handleShelfChange(newBooks);
    });
  };

  const renderBooks = () => {
    return props.books.map(({ title, id, authors, imageLinks, shelf }) => {
      return (
        <Book
          bookTitle={title}
          key={id}
          authors={authors}
          shelf={shelf}
          image={imageLinks}
          handleBook={handleBook}
          id={id}
        />
      );
    });
  };

  return (
    <div className="bookshelf-books">
      <ol className="books-grid">{renderBooks()}</ol>
    </div>
  );
}

export default BooksList;
