import React from 'react'
import {
  Button,
  Close,
  Panel,
  PanelFooter,
  PanelHeader,
  Space,
  Input,
  Textarea,
  Text
} from 'rebass'

const NewEntry = ({ onDismiss }) =>
  <div className='NewEntry' style={{ maxWidth: '720px' }}>
    <Panel theme='info' m={4}>
      <PanelHeader
        inverted
        theme='default'
      >
        <Text>Add a New Entry</Text>
        <Space auto />
        <Close onClick={onDismiss} />
      </PanelHeader>
      <Text>
        Create a New Term
      </Text>
      <Input
        label=''
        name='newEntry'
        placeholder='Word'
        rounded
        type='text'
      />
      <Textarea
        label=''
        defaultValue='Definition'
        name='newDef'
        rounded
      />
      <PanelFooter theme='default'>
        <Button>Submit</Button>
      </PanelFooter>
    </Panel>
  </div>

export default NewEntry
