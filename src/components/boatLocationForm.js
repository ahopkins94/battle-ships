import React from 'react'
import { Game } from './game'

export class BoatLocationForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dinghyLocation1: null,
      dinghyLocation2: null,
      dinghyLocation3: null,
      submarineLocation1: null,
      submarineLocation2: null,
      submarineLocation3: null,
      submarineLocation4: null,
      allPlayerLocations: Array(60).fill(null),
      submitted: false
    }

  }

  handleChange(event) {
      if (event.target.name === "dinghyLocation1") {
        let clonedDinghyLocation1 = this.state.dinghyLocation1
        clonedDinghyLocation1 = event.target.value
        this.setState({dinghyLocation1: clonedDinghyLocation1})
      }
      if (event.target.name === "dinghyLocation2") {
        let clonedDinghyLocation2 = this.state.dinghyLocation2
        clonedDinghyLocation2 = event.target.value
        this.setState({dinghyLocation2: clonedDinghyLocation2})
      }
      if (event.target.name === "dinghyLocation3") {
        let clonedDinghyLocation3 = this.state.dinghyLocation3
        clonedDinghyLocation3 = event.target.value
        this.setState({dinghyLocation3: clonedDinghyLocation3})
      }
      if (event.target.name === "submarineLocation1") {
        let clonedSubmarineLocation1 = this.state.submarineLocation1
        clonedSubmarineLocation1 = event.target.value
        this.setState({submarineLocation1: clonedSubmarineLocation1})
      }
      if (event.target.name === "submarineLocation2") {
        let clonedSubmarineLocation2 = this.state.submarineLocation2
        clonedSubmarineLocation2 = event.target.value
        this.setState({submarineLocation2: clonedSubmarineLocation2})
      }
      if (event.target.name === "submarineLocation3") {
        let clonedSubmarineLocation3 = this.state.submarineLocation3
        clonedSubmarineLocation3 = event.target.value
        this.setState({submarineLocation3: clonedSubmarineLocation3})
      }
      if (event.target.name === "submarineLocation4") {
        let clonedSubmarineLocation4 = this.state.submarineLocation4
        clonedSubmarineLocation4 = event.target.value
        this.setState({submarineLocation4: clonedSubmarineLocation4})
      }
  }

  handleSubmit(event) {
    let clonedAllPlayerLocations = this.state.allPlayerLocations
    clonedAllPlayerLocations[this.state["dinghyLocation1"]] = this.state.dinghyLocation1
    clonedAllPlayerLocations[this.state["dinghyLocation2"]] = this.state.dinghyLocation2
    clonedAllPlayerLocations[this.state["dinghyLocation3"]] = this.state.dinghyLocation3
    clonedAllPlayerLocations[this.state["submarineLocation1"]] = this.state.submarineLocation1
    clonedAllPlayerLocations[this.state["submarineLocation2"]] = this.state.submarineLocation2
    clonedAllPlayerLocations[this.state["submarineLocation3"]] = this.state.submarineLocation3
    clonedAllPlayerLocations[this.state["submarineLocation4"]] = this.state.submarineLocation4
    this.setState({allPlayerLocations: clonedAllPlayerLocations})
    event.preventDefault()
    this.setState({
      submitted: true
    })
  }

  render() {
    if (this.state.submitted === true) {
      return(
        <Game allPlayerLocations={this.state.allPlayerLocations} />
      )
    }
    return(
      <div id="boatLocationForm">
      <div>Please enter your boats' coordinates below:</div>
      <div>
      <form onSubmit={(e) => this.handleSubmit(e)}>
        The Dinghy:
        <br></br><input type="text" name="dinghyLocation1" placeholder="Coordinate 1" onChange={(e) => this.handleChange(e)}></input>
        <br></br><input type="text" name="dinghyLocation2" placeholder="Coordinate 2" onChange={(e) => this.handleChange(e)}></input>
        <br></br><input type="text" name="dinghyLocation3" placeholder="Coordinate 3" onChange={(e) => this.handleChange(e)}></input>
        <br></br><input type="text" name="submarineLocation1" placeholder="Coordinate 1" onChange={(e) => this.handleChange(e)}></input>
        <br></br><input type="text" name="submarineLocation2" placeholder="Coordinate 2" onChange={(e) => this.handleChange(e)}></input>
        <br></br><input type="text" name="submarineLocation3" placeholder="Coordinate 3" onChange={(e) => this.handleChange(e)}></input>
        <br></br><input type="text" name="submarineLocation4" placeholder="Coordinate 4" onChange={(e) => this.handleChange(e)}></input>
        <br></br><input type="submit" value="submit"></input>
      </form>
      </div>
      </div>
    )
  }
}
