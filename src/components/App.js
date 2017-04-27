import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import {
  Button,
  // InlineForm,
  Footer,
  NavItem,
  Overlay,
  Space,
  Text,
  Toolbar,
  Dropdown,
  DropdownMenu,
  Arrow,
  Section
} from 'rebass'

import Home from './Home'
import NewEntry from './NewEntry'
import Search from './Search'
import LetterBar from './LetterBar'
import Browse from './Browse'
import Term from './Term'
import NoMatch from './NoMatch'
import SearchForm from './SearchForm'
import Logo from './Logo'

import theme from './theme'
// import get from '../api'

class App extends Component {
  state = {
    modal: false,
    menu: false
  }

  _toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  _dropDown = () => {
    this.setState({
      menu: !this.state.menu
    })
  }

  static childContextTypes = {
    rebass: React.PropTypes.object
  }

  getChildContext () {
    return {
      rebass: theme
    }
  }

  render () {
    return <Router>
      <div className='App'>
        <nav><Toolbar>
          <NavItem is={Link} to='/'>The Jabberdexicon</NavItem>
          <Space auto />
          <NavItem>
            <SearchForm />
          </NavItem>
          <Dropdown>
            <Button
              onClick={this._dropDown}
              backgroundColor='primary'
              color='white'
              inverted
              rounded
              >
                Browse
                <Arrow direction='down' />
            </Button>
            <DropdownMenu open={this.state.menu} onDismiss={this._dropDown}>
              <LetterBar />
            </DropdownMenu>
          </Dropdown>
        </Toolbar></nav>
        <main><Switch>
          <Route exact path='/' component={Home} />
          <Route path='/browse/:letter' component={Browse} />
          <Route path='/entry/:slug' component={Term} />
          <Route path='/search/:query' component={Search} />
          <Route component={NoMatch} />
        </Switch></main>
        <Section />
        <Footer m={1}>
          <Logo />
          {/* <Text>Built with &hearts; at The Iron Yard in Saint Petersburg, FL.</Text> */}
          <Space auto />
          <Button onClick={this._toggle}>Add new Entry</Button>
        </Footer>
        <Overlay open={this.state.modal}>
          <NewEntry onDismiss={this._toggle} />
        </Overlay>
      </div>
    </Router>
  }
}

export default App
