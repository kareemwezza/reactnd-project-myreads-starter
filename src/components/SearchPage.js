import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as bookAPI from "../BooksAPI";
import Book from "./Book";

const SearchPage = (props) => {
  const [term, setTerm] = useState("");
  const [books, setBooks] = useState([]);
  let [booksList, setBooksList] = useState([]);

  useEffect(() => {
    bookAPI.getAll().then((myBooks) => {
      setBooksList(myBooks);
    });
  }, []);

  useEffect(() => {
    bookAPI.search(term.trim()).then((res) => {
      if (res && !res.error) {
        setBooks(res);
      } else {
        setBooks([]);
      }
    });
  }, [term]);

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleBook = (book, shelf) => {
    bookAPI.update(book, shelf).then(() => {
      props.history.push("/");
    });
  };

  const renderItems = () => {
    return books.map((book) => {
      if (book.title && book.imageLinks) {
        return (
          <Book
            book={book}
            handleBook={handleBook}
            key={book.id}
            booksList={booksList}
          />
        );
      } else {
        return;
      }
    });
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={term}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">{renderItems()}</ol>
      </div>
    </div>
  );
};

export default SearchPage;
