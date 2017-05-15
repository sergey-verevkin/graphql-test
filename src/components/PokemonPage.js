import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { filter } from 'graphql-anywhere'

import PokemonCard from './PokemonCard'
import PokemonCardHeader from './PokemonCardHeader'

class PokemonPage extends Component {

  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.object,
      Pokemon: PropTypes.object,
    }).isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  };

  render () {
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }

    if (this.props.data.error) {
      console.log(this.props.data.error);
      return (<div>An unexpected error occurred</div>)
    }

    const pokemon = this.props.data.Pokemon;
    return (
      <div>
        <PokemonCardHeader pokemon={filter(PokemonCardHeader.fragments.pokemon, pokemon)} />
        <PokemonCard pokemon={filter(PokemonCard.fragments.pokemon, pokemon)} handleCancel={this.goBack}/>
      </div>
    )
  }

  goBack = () => {
    this.props.history.replace('/pokedex')
  }
}

const PokemonQuery = gql`
  query PokemonQuery($id: ID!) {
    Pokemon(id: $id) {
      ... PokemonCardPokemon
      ... PokemonCardHeaderPokemon
    }
  }
  ${PokemonCardHeader.fragments.pokemon}
  ${PokemonCard.fragments.pokemon}
`;

const PokemonPageWithData = graphql(PokemonQuery, {
    options: (ownProps) => ({
      variables: {
        id: ownProps.match.params.pokemonId
      }
    })
  }
)(PokemonPage);

export default PokemonPageWithData
