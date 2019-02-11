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
      destroyerLocation1: null,
      destroyerLocation2: null,
      destroyerLocation3: null,
      destroyerLocation4: null,
      destroyerLocation5: null,
      destroyerLocation6: null,
      battleshipLocation1: null,
      battleshipLocation2: null,
      battleshipLocation3: null,
      battleshipLocation4: null,
      battleshipLocation1: null,
      battleshipLocation5: null,
      battleshipLocation6: null,
      battleshipLocation7: null,
      battleshipLocation8: null,
      allPlayerLocations: Array(61).fill(null),
      submitted: false
    }

  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
    console.log(this.state)
  }

  handleSubmit(event) {
    var locations = [this.state.dinghyLocation1, this.state.dinghyLocation2, this.state.dinghyLocation3, this.state.submarineLocation1, this.state.submarineLocation2, this.state.submarineLocation3, this.state.submarineLocation4, this.state.destroyerLocation1, this.state.destroyerLocation2, this.state.destroyerLocation3, this.state.destroyerLocation4, this.state.destroyerLocation5, this.state.destroyerLocation6, this.state.battleshipLocation1, this.state.battleshipLocation2, this.state.battleshipLocation3, this.state.battleshipLocation4, this.state.battleshipLocation5, this.state.battleshipLocation6, this.state.battleshipLocation7, this.state.battleshipLocation8]
    let clonedAllPlayerLocations = this.state.allPlayerLocations
    var i
    for (i = 0; i < locations.length; i++) {
      var location = locations[i]
      clonedAllPlayerLocations[location] = "X"
    }
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
        <br></br><input type="text" name="dinghyLocation3" placeholder="Coordinate 3" onChange={(e) => this.handleChange(e, "dinghyLocation3")}></input>
        <br></br>The Submarine:
        <br></br><input type="text" name="submarineLocation1" placeholder="Coordinate 1" onChange={(e) => this.handleChange(e)}></input>
        <br></br><input type="text" name="submarineLocation2" placeholder="Coordinate 2" onChange={(e) => this.handleChange(e)}></input>
        <br></br><input type="text" name="submarineLocation3" placeholder="Coordinate 3" onChange={(e) => this.handleChange(e)}></input>
        <br></br><input type="text" name="submarineLocation4" placeholder="Coordinate 4" onChange={(e) => this.handleChange(e)}></input>
        <br></br>The Destroyer:
        <br></br><input type="text" name="destroyerLocation1" placeholder="Coordinate 1" onChange={(e) => this.handleChange(e)}></input>
        <br></br><input type="text" name="destroyerLocation2" placeholder="Coordinate 2" onChange={(e) => this.handleChange(e)}></input>
        <br></br><input type="text" name="destroyerLocation3" placeholder="Coordinate 3" onChange={(e) => this.handleChange(e)}></input>
        <br></br><input type="text" name="destroyerLocation4" placeholder="Coordinate 4" onChange={(e) => this.handleChange(e)}></input>
        <br></br><input type="text" name="destroyerLocation5" placeholder="Coordinate 5" onChange={(e) => this.handleChange(e)}></input>
        <br></br><input type="text" name="destroyerLocation6" placeholder="Coordinate 6" onChange={(e) => this.handleChange(e)}></input>
        <br></br>The Battleship:
        <br></br><input type="text" name="battleshipLocation1" placeholder="Coordinate 1" onChange={(e) => this.handleChange(e)}></input>
        <br></br><input type="text" name="battleshipLocation2" placeholder="Coordinate 2" onChange={(e) => this.handleChange(e)}></input>
        <br></br><input type="text" name="battleshipLocation3" placeholder="Coordinate 3" onChange={(e) => this.handleChange(e)}></input>
        <br></br><input type="text" name="battleshipLocation4" placeholder="Coordinate 4" onChange={(e) => this.handleChange(e)}></input>
        <br></br><input type="text" name="battleshipLocation5" placeholder="Coordinate 5" onChange={(e) => this.handleChange(e)}></input>
        <br></br><input type="text" name="battleshipLocation6" placeholder="Coordinate 6" onChange={(e) => this.handleChange(e)}></input>
        <br></br><input type="text" name="battleshipLocation7" placeholder="Coordinate 7" onChange={(e) => this.handleChange(e)}></input>
        <br></br><input type="text" name="battleshipLocation8" placeholder="Coordinate 8" onChange={(e) => this.handleChange(e)}></input>
        <br></br><input type="submit" value="submit"></input>
      </form>
      </div>
      </div>
    )
  }
}
