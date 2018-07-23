import React, { Component } from "react";
import "./App.css";

import { apiMusic } from "./services";

import Realse from "./components/Relase";
import ReproductorDetail from "./components/ReproductorDetail";
import SearchForm from "./components/SearchForm";
import Card from "./components/Card";

class App extends Component {
  state = {
    results: null,
    trackSound: null
  };

  handleSubmit = ({ value }) => {
    if (value !== "") {
      apiMusic(value).then(r => {
        console.log(r.tracks.items);
        this.setState({ results: r.tracks.items });
      });
    }
  };

  render() {
    const { results, trackSound } = this.state;
    return (
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
          <SearchForm handleSubmit={this.handleSubmit} />

          {trackSound ? (
            <ReproductorDetail
              image={trackSound.album.images[0].url}
              title={trackSound.name}
              artists={trackSound.artists}
              album={trackSound.album.name}
            />
          ) : (
            <div>
              <h2>Busca tu canción favorita</h2>
            </div>
          )}

          <div className="results">
            {results &&
              results.map((track, index) => (
                <Card
                  id={track.id}
                  selected={trackSound ? trackSound.id : null}
                  imageSrc={track.album.images[0].url}
                  title={track.name}
                  key={index}
                  handleClick={() => this.setState({ trackSound: track })}
                />
              ))}
          </div>
        </div>
      </main>
    );
  }
}

export default App;
