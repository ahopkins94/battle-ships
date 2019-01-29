import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { BoatLocationForm } from './boatLocationForm'
import { Game } from './game'

export class App extends React.Component {

  render() {
    return(
      <main>
      <Switch>
        <Route exact path='/' component={BoatLocationForm} />
        <Route exact path='/game' component={Game} />
      </Switch>
      </main>
    )
  }
}
