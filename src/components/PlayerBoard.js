import React from 'react'
import { Square } from './square'

export class PlayerBoard extends React.Component {

  formatSquare() {
    var squares = [];
    for (var i = 0; i < 100; i++) {
        squares.push(<Square key={i} />);
    }
    return(
     <div id="squaresClass">
       <div className="board-row">{squares.slice(0, 10)}</div>
       <div className="board-row">{squares.slice(10, 20)}</div>
       <div className="board-row">{squares.slice(20, 30)}</div>
       <div className="board-row">{squares.slice(30, 40)}</div>
       <div className="board-row">{squares.slice(40, 50)}</div>
       <div className="board-row">{squares.slice(50, 60)}</div>
       <div className="board-row">{squares.slice(60, 70)}</div>
       <div className="board-row">{squares.slice(70, 80)}</div>
       <div className="board-row">{squares.slice(80, 90)}</div>
       <div className="board-row">{squares.slice(90, 100)}</div>
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
