import React from "react";

function Book(props) {
  const handleSelect = (e) => {
    const action = e.target.value;
    props.handleBook({ id: props.id }, action);
  };

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${props.image.thumbnail})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              defaultValue={props.shelf || "none"}
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
        <div className="book-title">{props.booTitle}</div>
        <div className="book-authors">
          {props.authors ? props.authors.join(", ") : "unknown"}
        </div>
      </div>
    </li>
  );
}

export default Book;