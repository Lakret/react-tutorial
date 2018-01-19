import React from 'react';
import Square from './square.js';

export default class Board extends React.Component {
  renderSquare(i) {
    return ( 
      <Square 
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        cell={i}
        isWinning={this.props.winningSquares.includes(i)}
        key={`cell-${i}`}
      />);
  }

  render() {
    let rows = Array(3).fill(null);
    for(var i = 0; i < 3; i++) {
      let cells = Array(3).fill(null);
      for(var j = 0; j < 3; j++) {
        cells[j] = this.renderSquare(i * 3 + j)
      }
      rows[i] = (
        <div className="board-row" key={`row-${i}`}>
          {cells}
        </div>
      )
    }

    return (
      <div>
        {rows}
      </div>
    );
  }
}
