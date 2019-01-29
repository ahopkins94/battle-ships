import React, { Component } from 'react'

export class BoatLocationForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dinghyLocation: Array(3).fill(null),
      submitted: false
    }

  }

  handleChange(index, event) {
    this.setState({
      [event.target.value]: this.state.dinghyLocation.map((coord, i) => (
        i === index ? event.target.value: coord
      ))
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.history.push('/game')
  }

  render() {
    return(
      <div id="boatLocationForm">
      <div>Please enter your boats' coordinates below:</div>
      <div>
      <form onSubmit={(e) => this.handleSubmit(e)}>
        The Dinghy:
        <br></br><input type="text" name="dinghyLocation" placeholder="Coordinate 1" onChange={(e) => this.handleChange(0, e)}></input>
        <br></br><input type="submit" value="submit"></input>
      </form>
      </div>
      </div>
    )
  }
}
