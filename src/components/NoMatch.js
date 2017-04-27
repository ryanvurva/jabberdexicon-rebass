import React from 'react'
import { Link } from 'react-router-dom'
import { Block, Heading, Text } from 'rebass'

const NoMatch = () =>
  <Block borderLeft px={3} color='primary'>
    <Heading level={3} size={1}>
      <Link to='/entry/1-yoda-condition'>Whoops!</Link>
    </Heading>
    <Text color='black'>Sorry!  Seems we couldn't find what you were looking for...</Text>
  </Block>

export default NoMatch
