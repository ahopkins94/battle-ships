import React from 'react'
import { PlayerBoard } from './PlayerBoard'

export class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentBoat: 7
    }
  }

  render() {
    return(
      <div id="Game">
      <div>Please enter your boats' coordinates below:</div>
      <div>
        <PlayerBoard />
      </div>
      </div>
    )
  }
}
