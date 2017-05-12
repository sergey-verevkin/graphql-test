import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import PokemonCard from './PokemonCard'

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

    return (
      <div>
        <PokemonCard pokemon={this.props.data.Pokemon} handleCancel={this.goBack}/>
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
      id
      url
      name
    }
  }
`;

const PokemonPageWithData = graphql(PokemonQuery, {
  options: (ownProps) => {
    console.log(ownProps);
    return {
      variables: {
        id: ownProps.match.params.pokemonId
      }
    }
  }
  }
)(PokemonPage);

export default PokemonPageWithData
