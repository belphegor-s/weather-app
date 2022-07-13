import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  state = {
    city: "",
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.city === "") {
      alert("This field can not be empty!");
    } else {
      this.props.searchCity(this.state.city);
    }

    this.setState({ city: "" });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div className="searchBar">
        <form onSubmit={this.onSubmit}>
          <h4>Enter your city to check weather...</h4>
          <input
            type="text"
            name="city"
            className="inputSearchCity"
            onChange={this.onChange}
          />
          <button type="submit" className="buttonSearchCity">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
