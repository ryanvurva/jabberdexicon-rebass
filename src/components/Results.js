
import React from 'react'
import { Link } from 'react-router-dom'
import { Text } from 'rebass'

const Results = ({ entries }) => (
  <Text color='black'><ul className='one-list'>
    {entries.map((entry) => (
      <li key={entry.id}>
        <Link to={`/entry/${entry.slug}`}>{entry.term}</Link>
      </li>
    ))}
  </ul></Text>
)

export default Results
