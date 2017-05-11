import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class Pokedex extends Component {

  static propTypes = {
    data: React.PropTypes.shape({
      loading: React.PropTypes.bool,
      error: React.PropTypes.object,
      Trainer: React.PropTypes.object,
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
        <p className='tc pa5'>
          Hey {this.props.data.Trainer.name}, there are 0 Pokemons in your pokedex
        </p>
      </div>
    )
  }
}

const TrainerQuery = gql`
  query TrainerQuery {
    Trainer(name: "Sergey Verevkin") {
      name
    }
  }
`;

const PokedexWithData = graphql(TrainerQuery)(Pokedex);

export default PokedexWithData
