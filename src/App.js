import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom'

// Assets
import logo from './logo.svg';
import './App.css';

// Containers
import Home from './containers/Home';
import Article from './containers/Article';

// Components
import Pokedex from './components/Pokedex'
import PokemonPage from './components/PokemonPage'
import AddPokemonCard from './components/AddPokemonCard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <nav>
            <ul className="list pln">
              <li className="link dim ba ph3 pv2 dib mid-gray mr2">
                <NavLink exact to="/">Home</NavLink>
              </li>
              <li className="link dim ba ph3 pv2 dib mid-gray mr2">
                <NavLink to="/article/1">Article 1</NavLink>
              </li>
              <li className="link dim ba ph3 pv2 dib mid-gray mr2">
                <NavLink to="/pokedex">Pokedex</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <div className="App-intro">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/article/:id' component={Article}/>
            <Route exact path='/pokedex' component={Pokedex}/>
            <Route exact path='/pokedex/:pokemonId' component={PokemonPage}/>
            <Route path='/pokedex/create/:trainerId' component={AddPokemonCard} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
