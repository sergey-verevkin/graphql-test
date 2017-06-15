import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class PokemonPreview extends Component {
  static propTypes = {
    pokemon: PropTypes.object,
  };

  render() {
    return (
      <Link
        to={`/pokedex/${this.props.pokemon.id}`}
        style={{ minWidth: 200 }}
        className='link dim grow mw4 bg-white ma2 pa3 shadow-1'
      >
        <img src={this.props.pokemon.url} alt={this.props.pokemon.name} />
        <div className='gray tc'>{this.props.pokemon.name}</div>
      </Link>
    )
  }
}

export default PokemonPreview
