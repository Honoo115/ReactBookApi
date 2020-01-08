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
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form>
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
    );
  }
}
export default BooksSearch;
