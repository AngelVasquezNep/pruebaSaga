import React, { Component } from "react";
import DocumentTitle from "react-document-title";
import { connect } from "react-redux";

import "./App.css";

import guitar from "./images/guitar.jpg";

import Realse from "./components/Relase";
import ReproductorDetail from "./components/ReproductorDetail";
import SearchForm from "./components/SearchForm";
import Card from "./components/Card";

class App extends Component {
  state = {
    results: null,
    trackSound: null
  };

  render() {
    const { results, trackSound } = this.props;
    return (
      <DocumentTitle title={trackSound ? trackSound.name : "Music"}>
        <main className="App">
          {trackSound && (
            <Realse
              title={trackSound.name}
              artist={trackSound.artists}
              ranking={trackSound.popularity}
              image={trackSound.album.images[0].url}
            />
          )}

          <div className="content">
            <SearchForm />
            {trackSound && (
              <ReproductorDetail
                image={trackSound.album.images[0].url}
                title={trackSound.name}
                artists={trackSound.artists}
                album={trackSound.album.name}
              />
            )}
            <div className="results">
              {results ? (
                results.map(
                  (track, index) =>
                    track.preview_url ? (
                      <Card
                        id={track.id}
                        selected={trackSound ? trackSound.id : null}
                        imageSrc={track.album.images[0].url}
                        title={track.name}
                        key={index}
                        // handleClick={() => this.setState({ trackSound: track })}
                        handleClick={() =>
                          this.props.dispatch({
                            type: "SELECTED_TRACK",
                            payload: { trackSound: track }
                          })
                        }
                      />
                    ) : null
                )
              ) : (
                <div className="cover">
                  <h2>Busca tu canción favorita</h2>
                  <img src={guitar} alt="" />
                </div>
              )}
            </div>
            {trackSound && (
              <audio
                autoPlay
                controls
                src={trackSound.preview_url}
                style={{
                  position: "fixed",
                  width: "100%",
                  bottom: "0",
                  right: "0",
                  left: "0"
                }}
              />
            )}
          </div>
        </main>
      </DocumentTitle>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    nameSong: state.course.nameSong,
    results: state.course.tracks,
    trackSound: state.course.trackSound
  };
};

export default connect(mapStateToProps)(App);
