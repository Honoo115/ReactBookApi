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
