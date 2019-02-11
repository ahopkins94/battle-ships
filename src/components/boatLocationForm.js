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
      if (event.target.name === "destroyerLocation1") {
        let clonedDestroyerLocation1 = this.state.destroyerLocation1
        clonedDestroyerLocation1 = event.target.value
        this.setState({destroyerLocation1: clonedDestroyerLocation1})
      }
      if (event.target.name === "destroyerLocation2") {
        let clonedDestroyerLocation2 = this.state.destroyerLocation2
        clonedDestroyerLocation2 = event.target.value
        this.setState({destroyerLocation2: clonedDestroyerLocation2})
      }
      if (event.target.name === "destroyerLocation3") {
        let clonedDestroyerLocation3 = this.state.destroyerLocation3
        clonedDestroyerLocation3 = event.target.value
        this.setState({destroyerLocation3: clonedDestroyerLocation3})
      }
      if (event.target.name === "destroyerLocation4") {
        let clonedDestroyerLocation4 = this.state.destroyerLocation4
        clonedDestroyerLocation4 = event.target.value
        this.setState({destroyerLocation4: clonedDestroyerLocation4})
      }
      if (event.target.name === "destroyerLocation5") {
        let clonedDestroyerLocation5 = this.state.destroyerLocation5
        clonedDestroyerLocation5 = event.target.value
        this.setState({destroyerLocation5: clonedDestroyerLocation5})
      }
      if (event.target.name === "destroyerLocation6") {
        let clonedDestroyerLocation6 = this.state.destroyerLocation6
        clonedDestroyerLocation6 = event.target.value
        this.setState({destroyerLocation6: clonedDestroyerLocation6})
      }
      if (event.target.name === "battleshipLocation1") {
        let clonedBattleshipLocation1 = this.state.battleshipLocation1
        clonedBattleshipLocation1 = event.target.value
        this.setState({battleshipLocation1: clonedBattleshipLocation1})
      }
      if (event.target.name === "battleshipLocation2") {
        let clonedBattleshipLocation2 = this.state.battleshipLocation2
        clonedBattleshipLocation2 = event.target.value
        this.setState({battleshipLocation2: clonedBattleshipLocation2})
      }
      if (event.target.name === "battleshipLocation3") {
        let clonedBattleshipLocation3 = this.state.battleshipLocation3
        clonedBattleshipLocation3 = event.target.value
        this.setState({battleshipLocation3: clonedBattleshipLocation3})
      }
      if (event.target.name === "battleshipLocation4") {
        let clonedBattleshipLocation4 = this.state.battleshipLocation4
        clonedBattleshipLocation4 = event.target.value
        this.setState({battleshipLocation4: clonedBattleshipLocation4})
      }
      if (event.target.name === "battleshipLocation5") {
        let clonedBattleshipLocation5 = this.state.battleshipLocation5
        clonedBattleshipLocation5 = event.target.value
        this.setState({battleshipLocation5: clonedBattleshipLocation5})
      }
      if (event.target.name === "battleshipLocation6") {
        let clonedBattleshipLocation6 = this.state.battleshipLocation6
        clonedBattleshipLocation6 = event.target.value
        this.setState({battleshipLocation6: clonedBattleshipLocation6})
      }
      if (event.target.name === "battleshipLocation7") {
        let clonedBattleshipLocation7 = this.state.battleshipLocation7
        clonedBattleshipLocation7 = event.target.value
        this.setState({battleshipLocation7: clonedBattleshipLocation7})
      }
      if (event.target.name === "battleshipLocation8") {
        let clonedBattleshipLocation8 = this.state.battleshipLocation8
        clonedBattleshipLocation8 = event.target.value
        this.setState({battleshipLocation8: clonedBattleshipLocation8})
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
    clonedAllPlayerLocations[this.state["destroyerLocation1"]] = this.state.destroyerLocation1
    clonedAllPlayerLocations[this.state["destroyerLocation2"]] = this.state.destroyerLocation2
    clonedAllPlayerLocations[this.state["destroyerLocation3"]] = this.state.destroyerLocation3
    clonedAllPlayerLocations[this.state["destroyerLocation4"]] = this.state.destroyerLocation4
    clonedAllPlayerLocations[this.state["destroyerLocation5"]] = this.state.destroyerLocation5
    clonedAllPlayerLocations[this.state["destroyerLocation6"]] = this.state.destroyerLocation6
    clonedAllPlayerLocations[this.state["battleshipLocation1"]] = this.state.battleshipLocation1
    clonedAllPlayerLocations[this.state["battleshipLocation2"]] = this.state.battleshipLocation2
    clonedAllPlayerLocations[this.state["battleshipLocation3"]] = this.state.battleshipLocation3
    clonedAllPlayerLocations[this.state["battleshipLocation4"]] = this.state.battleshipLocation4
    clonedAllPlayerLocations[this.state["battleshipLocation5"]] = this.state.battleshipLocation5
    clonedAllPlayerLocations[this.state["battleshipLocation6"]] = this.state.battleshipLocation6
    clonedAllPlayerLocations[this.state["battleshipLocation7"]] = this.state.battleshipLocation7
    clonedAllPlayerLocations[this.state["battleshipLocation8"]] = this.state.battleshipLocation8
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
