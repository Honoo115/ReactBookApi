import React, { Component } from "react";

class BooksFilter extends Component {
  render() {
    return (
      <div>
        <label for="printbox">Print Type</label>
        <select>
          <option value="all" id="printbox">
            All
          </option>
          <option value="magazines" id="printbox">
            Magazines
          </option>
          <option value="books" id="printbox">
            Books
          </option>
        </select>
        <label for="typebox"> Book Type</label>
        <select id="typebox">
          <option value="full">Full</option>
          <option value="free e-book">Free E-Book</option>
        </select>
      </div>
    );
  }
}
export default BooksFilter;
