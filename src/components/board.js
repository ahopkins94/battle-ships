import React from 'react'
import { Square } from './square'

export class Board extends React.Component {

  formatSquare() {
    var squares = [];
    for (var i = 0; i < 100; i++) {
        squares.push(<Square key={i} />);
    }
    return(
     <div id="squaresClass">
       <div>{squares.slice(0, 10)}</div>
       <div>{squares.slice(10, 20)}</div>
       <div>{squares.slice(20, 30)}</div>
       <div>{squares.slice(30, 40)}</div>
       <div>{squares.slice(40, 50)}</div>
       <div>{squares.slice(50, 60)}</div>
       <div>{squares.slice(60, 70)}</div>
       <div>{squares.slice(70, 80)}</div>
       <div>{squares.slice(80, 90)}</div>
       <div>{squares.slice(90, 100)}</div>
     </div>
     )
  }

  render() {
    return (
      <div>
      {this.formatSquare()}
      </div>
    )
  }
}
