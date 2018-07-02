import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from './actions'

class App extends Component {
  render() {
    const {hola, adios, tracks} = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <p>Hola: {hola} </p>
          <p>Adios: {adios} </p>
        </div>
        <button
          onClick={()=>this.props.actions.hola_action()  }
          >HOLA</button>
        <button
          onClick={()=>this.props.actions.adios_action()  }
        >ADIOS</button>
        <button
          onClick={()=>this.props.actions.hola_async()  }
        >HOLA ASYNC</button>
        <button
          onClick={()=>this.props.actions.fetch_saga()  }
        >FETCH SAGA</button>
        <div>
          {tracks.map((t, index)=>(
            <div key={index}>{t.name}</div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  hola: state.hola.msg,
  adios: state.adios.msg,
  tracks: state.tracks
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
