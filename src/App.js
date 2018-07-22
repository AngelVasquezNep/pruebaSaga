import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="App">
        <div className="column-left">
          <h1>Título: </h1>
          <p>Artistas</p>
          <ul>
            <li></li>
          </ul>
          <p>Popularidad</p>
          <p> / 100 </p>
          <img src="" alt="albúm" />
        </div>
        <div className="content">
          <form className="form">
            <input
              type="search"
              className="input-text"
            />
            <input type="submit" value="Buscar" className="btn" />
          </form>
          <div className="reproductor-detail">
            <div className="image">
              <img src="" alt="Portada" />
            </div>
            <div className="detail">
              <p>Título: </p>
              <p>Artistas: </p>
              <p>Lanzamiento: </p>
              <p>Albúm: </p>
            </div>
          </div>
          <div className="results">
            <div className="card">
              <img src="http://jsequeiros.com/sites/default/files/imagen-cachorro-comprimir.jpg" alt="image" className="image" />
              <div className="description">
                <p>Título</p>
                <button className="btn">
                  <span role="img" aria-label="Reproducir">
                    🎵
                </span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>
    );
  }
}

export default App;
