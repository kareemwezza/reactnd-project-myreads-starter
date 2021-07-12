import React from "react";
import BooksList from "./BooksList";

function BookShelf({ books, shelfTitle, handleShelfChange }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <BooksList books={books} handleShelfChange={handleShelfChange} />
    </div>
  );
}

export default BookShelf;
