import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'

import PokemonPreview from './PokemonPreview'

const Title = styled.div`
  color: #7F7F7F;
  font-size: 32px;
  font-weight: 300;
`;

class Pokedex extends Component {

  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.object,
      Trainer: PropTypes.object,
    }).isRequired,
  };

  render() {
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }

    if (this.props.data.error) {
      console.log(this.props.data.error);
      return (<div>An unexpected error occurred</div>)
    }

    return (
      <div className='w-100 bg-light-gray min-vh-100'>
        <Title className='tc pa5'>
          Hey {this.props.data.Trainer.name}, there are {this.props.data.Trainer.ownedPokemons.length} Pokemons in your pokedex
        </Title>
        <div className='flex flex-wrap justify-center center w-75'>
          {this.props.data.Trainer.ownedPokemons.map((pokemon) =>
            <PokemonPreview key={pokemon.id} pokemon={pokemon} />
          )}
        </div>
      </div>
    )
  }
}

const TrainerQuery = gql`
  query TrainerQuery($name: String!) {
    Trainer(name: $name) {
      name
      ownedPokemons {
        id
        name
        url
      }
    }
  }
`;

const PokedexWithData = graphql(TrainerQuery, {
    options: {
      variables: {
        name: 'Sergey Verevkin'
      }
    }
  }
)(Pokedex);

export default PokedexWithData
