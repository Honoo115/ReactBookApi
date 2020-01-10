import React, { Component } from "react";
import "./booksResult.css";
class BooksResult extends Component {
  render() {
    return (
      <div>
        {this.props.books.map(book => (
          <div className="book">
            <div className="title">{book.volumeInfo.title}</div>
            <div className="price">
              {book.saleInfo.listPrice
                ? book.saleInfo.listPrice.amount
                : "No Price Avalible"}
            </div>
            <div className="author">
              {book.volumeInfo.authors.map(author => (
                <div>{author}</div>
              ))}
            </div>
            <div className="desc">{book.volumeInfo.description}</div>
          </div>
        ))}
      </div>
    );
  }
}
export default BooksResult;
