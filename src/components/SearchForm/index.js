import React, { Component } from "react";
import { connect } from "react-redux";

import "./style.css";
import Button from "../Button";

class SearchForm extends Component {
  static defaultProps = {
    showButton: true,
    placeholder: "Buscar..."
  };

  state = {
    inputValue: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch({
      type: "SEARCH_SONG",
      payload: {
        nameSong: event.target.search.value
      }
    });
    this.props.handleSubmit({ value: event.target.search.value });
  };

  render() {
    const { inputValue } = this.state;
    const { showButton, placeholder } = this.props;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          autoComplete="off"
          type="search"
          className="input-text"
          placeholder={placeholder}
          name="search"
          value={inputValue}
          onChange={event => this.setState({ inputValue: event.target.value })}
        />
        {showButton && <Button>Buscar</Button>}
      </form>
    );
  }
}

export default connect()(SearchForm);
