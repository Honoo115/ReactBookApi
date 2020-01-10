import React, { Component } from "react";
import BooksSearch from "../booksSearch/booksSearch";
import BooksFilter from "../booksFilter/booksFilter";
import BooksResult from "../booksResult/booksResult";
class BooksApp extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }
  handleUpdate(books) {
    this.setState({
      books
    });
  }
  render() {
    return (
      <div>
        <h1>Google Book Search</h1>
        <BooksSearch handleUpdate={this.handleUpdate.bind(this)} />
        <BooksFilter />
        <BooksResult books={this.state.books} />
      </div>
    );
  }
}
export default BooksApp;
