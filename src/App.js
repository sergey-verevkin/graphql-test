import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

// Assets
import logo from './logo.svg';
import './App.css';

// Containers
import Home from './containers/Home';
import Article from './containers/Article';

// Components
import Pokedex from './components/Pokedex'
import PokemonPage from './components/PokemonPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/article/:id' component={Article}/>
            <Route exact path='/pokedex' component={Pokedex}/>
            <Route path='/pokedex/:pokemonId' component={PokemonPage}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
