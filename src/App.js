import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import HomeContent from "./components/HomeContent";
import SearchButton from "./components/SearchButton";
import SearchPage from "./components/SearchPage";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="list-books">
          <BrowserRouter>
            <Route path="/" exact component={Header} />
            <Route path="/" exact component={HomeContent} />
            <Route path="/" exact component={SearchButton} />
            <Route path="/search" component={SearchPage} />
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default BooksApp;
