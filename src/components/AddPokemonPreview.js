import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class AddPokemonPreview extends Component {

  static propTypes = {
    trainerId: PropTypes.string.isRequired,
  };

  render () {
    return (
      <Link
        to={`/pokedex/create/${this.props.trainerId}`}
        style={{ minWidth: 200 }}
        className='link dim mw4 ma2 ba b--dashed bw3 b--silver flex justify-center items-center'
      >
        <div className='silver tc v-mid fw4 f1'>+</div>
      </Link>
    )
  }
}
