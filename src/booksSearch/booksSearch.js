import React, { Component } from "react";

class BooksSearch extends Component {
  render() {
    return (
      <form>
        <label for="searchbox">Search:</label>
        <input type="text" required id="seachbox"></input>
      </form>
    );
  }
}
export default BooksSearch;
