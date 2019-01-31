import React from 'react'
import { Game } from './game'

export class BoatLocationForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dinghyLocation: Array(3).fill(null),
      allPlayerLocations: Array(60).fill(null),
      submitted: false
    }

  }

  handleChange(index, event) {
    this.setState({
      [event.target.name]: this.state.dinghyLocation.map((coord, i) => (
        i === index ? event.target.value: coord
      )),
      allPlayerLocations: this.state.allPlayerLocations.map((coord, i) => (
        i === index ? event.target.value: coord
      ))
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      submitted: true
    })
  }

  render() {
    if (this.state.submitted === true) {
      return(
        <Game dinghyLocation={this.state.dinghyLocation} allPlayerLocations={this.state.allPlayerLocations} />
      )
    }
    return(
      <div id="boatLocationForm">
      <div>Please enter your boats' coordinates below:</div>
      <div>
      <form onSubmit={(e) => this.handleSubmit(e)}>
        The Dinghy:
        <br></br><input type="text" name="dinghyLocation" placeholder="Coordinate 1" onChange={(e) => this.handleChange(0, e)}></input>
        <br></br><input type="text" name="dinghyLocation" placeholder="Coordinate 2" onChange={(e) => this.handleChange(1, e)}></input>
        <br></br><input type="text" name="dinghyLocation" placeholder="Coordinate 3" onChange={(e) => this.handleChange(2, e)}></input>
        <br></br><input type="submit" value="submit"></input>
      </form>
      </div>
      </div>
    )
  }
}
