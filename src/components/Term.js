import React from 'react'
import { Block, Heading, Text } from 'rebass'

const Term = () =>
  <Block borderLeft px={3} color='primary'>
    <Heading level={3} size={1}>Yoda Conditions</Heading>
    <Text color='black'>Using if (constant == variable) instead of if (variable == constant), like if (4 == foo). Because it's like saying "if blue is the sky" or "if tall is the man".</Text>
  </Block>

export default Term
