import React, { Component } from 'react'
import { Block, Heading } from 'rebass'
// import { Link } from 'react-router-dom'
import Results from './Results'

class Search extends Component {
  render () {
    return <div className='Search'>
      <Block borderLeft px={3} color='primary'>
        <Heading level={3} alt>Searching for "whatever you typed"</Heading>
        <Results />
      </Block>
    </div>
  }
}

export default Search
