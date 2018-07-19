import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { tracksActionsCreate } from "./reducers/tracks";

class App extends Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.actions.search(event.target.search.value);
  };
  render() {
    const { items, loading: loadingFetchTrack } = this.props.tracks;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="search" defaultValue="Happy" />
          <input type="submit" value="buscar" />
        </form>
        {loadingFetchTrack && <p>Loading...</p>}
        <div>{items.map((t, index) => <p key={index}>{t.name}</p>)}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  tracks: state.tracks
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      search: tracksActionsCreate.fetchTrackRequest
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
