import React from "react";

function Book(props) {
  const { book } = props;
  const handleSelect = (e) => {
    const action = e.target.value;
    props.handleBook(book, action);
  };

  let currentShelf = "none";

  props.booksList.forEach((myBook) => {
    if (myBook.id === book.id) {
      currentShelf = myBook.shelf;
    }
  });

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              defaultValue={book.shelf || currentShelf}
              onChange={handleSelect}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.booTitle}</div>
        <div className="book-authors">
          {book.authors ? book.authors.join(", ") : "unknown"}
        </div>
      </div>
    </li>
  );
}

export default Book;
