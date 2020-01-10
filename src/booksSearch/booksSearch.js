import React, { Component } from "react";

class BooksSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log("here");
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${this.state.value}&AIzaSyBLnsNugklSnZuKWbk0Ve75GfYBX1Qe1lc&filter=${value}&printType=${value}`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error("Something went wrong, please try again later.");
        }
        return response;
      })
      .then(response => response.json())
      .then(resJson => {
        this.props.handleUpdate(resJson.items);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label for="searchbox">Search:</label>
          <input
            type="text"
            required
            id="seachbox"
            value={this.state.value}
            onChange={this.handleChange}
          ></input>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default BooksSearch;
