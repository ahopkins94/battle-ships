import React from 'react'
import { Square } from './square'

export class Game extends React.Component {

  renderSquare(i) {
    return (
      <Square
      value={this.props.allPlayerLocations[i]}
      />
    )
  }

  render() {
    return(
      <div id="Game">
      <div>
      <table border="1" width="1000" height="600">
        <tbody>
          <tr>
            <th>{this.renderSquare(0)}</th>
            <th>{this.renderSquare(1)}</th>
            <th>{this.renderSquare(2)}</th>
            <th>{this.renderSquare(3)}</th>
            <th>{this.renderSquare(4)}</th>
            <th>{this.renderSquare(5)}</th>
            <th>{this.renderSquare(6)}</th>
            <th>{this.renderSquare(7)}</th>
            <th>{this.renderSquare(8)}</th>
            <th>{this.renderSquare(9)}</th>
          </tr>
          <tr>
            <td>{this.renderSquare(10)}</td>
            <td>{this.renderSquare(11)}</td>
            <td>{this.renderSquare(12)}</td>
            <td>{this.renderSquare(13)}</td>
            <td>{this.renderSquare(14)}</td>
            <td>{this.renderSquare(15)}</td>
            <td>{this.renderSquare(16)}</td>
            <td>{this.renderSquare(17)}</td>
            <td>{this.renderSquare(18)}</td>
            <td>{this.renderSquare(19)}</td>
          </tr>
          <tr>
          <td>{this.renderSquare(20)}</td>
          <td>{this.renderSquare(21)}</td>
          <td>{this.renderSquare(22)}</td>
          <td>{this.renderSquare(23)}</td>
          <td>{this.renderSquare(24)}</td>
          <td>{this.renderSquare(25)}</td>
          <td>{this.renderSquare(26)}</td>
          <td>{this.renderSquare(27)}</td>
          <td>{this.renderSquare(28)}</td>
          <td>{this.renderSquare(29)}</td>
          </tr>
          <tr>
          <td>{this.renderSquare(30)}</td>
          <td>{this.renderSquare(31)}</td>
          <td>{this.renderSquare(32)}</td>
          <td>{this.renderSquare(33)}</td>
          <td>{this.renderSquare(34)}</td>
          <td>{this.renderSquare(35)}</td>
          <td>{this.renderSquare(36)}</td>
          <td>{this.renderSquare(37)}</td>
          <td>{this.renderSquare(38)}</td>
          <td>{this.renderSquare(39)}</td>
          </tr>
          <tr>
          <td>{this.renderSquare(40)}</td>
          <td>{this.renderSquare(41)}</td>
          <td>{this.renderSquare(42)}</td>
          <td>{this.renderSquare(43)}</td>
          <td>{this.renderSquare(44)}</td>
          <td>{this.renderSquare(45)}</td>
          <td>{this.renderSquare(46)}</td>
          <td>{this.renderSquare(47)}</td>
          <td>{this.renderSquare(48)}</td>
          <td>{this.renderSquare(49)}</td>
          </tr>
          <tr>
          <td>{this.renderSquare(50)}</td>
          <td>{this.renderSquare(51)}</td>
          <td>{this.renderSquare(52)}</td>
          <td>{this.renderSquare(53)}</td>
          <td>{this.renderSquare(54)}</td>
          <td>{this.renderSquare(55)}</td>
          <td>{this.renderSquare(56)}</td>
          <td>{this.renderSquare(57)}</td>
          <td>{this.renderSquare(58)}</td>
          <td>{this.renderSquare(59)}</td>
          </tr>
        </tbody>
      </table>
      </div>
      </div>
    )
  }
}
