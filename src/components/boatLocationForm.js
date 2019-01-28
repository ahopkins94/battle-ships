import React from 'react'

export class BoatLocationForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dinghyLocation: Array(3).fill(null)
    }

  }

  handleChange(index, event) {
    this.setState({
      [event.target.value]: this.state.dinghyLocation.map((coord, i) => (
        i === index ? event.target.value: coord
      ))
    })
  }

  render() {
    return(
      <div id="boatLocationForm">
      <div>Please enter your boats' coordinates below:</div>
      <div>
      <form>
        The Dinghy:
        <br></br><input type="text" value="dinghyLocation" placeholder="Coordinate 1" onChange={(e) => this.handleChange(0, e)}></input>
        <br></br><input type="submit" value="submit"></input>
      </form>
      </div>
      </div>
    )
  }
}
