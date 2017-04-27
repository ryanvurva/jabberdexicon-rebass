import React, { Component } from 'react'
import { Block, Heading, Text } from 'rebass'
import { Link, NavLink } from 'react-router-dom'

class Browse extends Component {
  letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  state = {
    results: []
  }

  componentDidMount () {
    const url = 'https://jabberdexicon.herokuapp.com/entries?access_token=vorpal'
    window.fetch(url)
    .then(r => r.json())
    .then(data => {
      this.setState({
        results: data
      })
    })
  }
  render () {
    const filtered = this.state.results.filter(item => {
      if (this.props.match.params.letter === 'numbers') {
        return item.term.match(/^\d/)
      } else {
        return item.term[0].toLowerCase() === this.props.match.params.letter
      }
    })

    const words = filtered.map(word => {
      return <li key={word.id}>
        <NavLink to={`/entry/${word.slug}`}>{word.term}</NavLink>
      </li>
    })
    return <div className='Search'>
      <Block borderLeft px={3} color='primary'>
        <Heading level={3} alt>Browsing "{this.props.match.params.letter.toUpperCase()}"</Heading>
        <Text color='black'>
          <ul className='one-list'>
            {words}
          </ul>
        </Text>
      </Block>
    </div>
  }
}

export default Browse
