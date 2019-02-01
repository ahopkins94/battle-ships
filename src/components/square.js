import React from 'react'

export class Square extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.value !== null) {
      return(
        <div>{"X"}</div>
      )
    }
    return <div></div>
  }
}
