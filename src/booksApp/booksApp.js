import React, { Component } from "react";
import BooksSearch from "../booksSearch/booksSearch";
import BooksFilter from "../booksFilter/booksFilter";
import BooksResult from "../booksResult/booksResult";
class BooksApp extends Component {
  render() {
    return (
      <div>
        <h1>Google Book Search</h1>
        <BooksSearch />
        <BooksFilter />
        <BooksResult />
      </div>
    );
  }
  componentDidMount() {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q="+event.state.value"&AIzaSyBLnsNugklSnZuKWbk0Ve75GfYBX1Qe1lc`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error("Something went wrong, please try again later.");
        }
        return response;
      })
      .then(response => response.json())
      .then(resJson => {
        console.log(resJson);
      });
  }
}
export default BooksApp;
