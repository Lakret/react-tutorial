import React from 'react';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';

import Board from './board.js';
import './game.css';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      moveNumber: 0,
      xIsNext: true,
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.moveNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (Game.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      moveNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(move) {
    this.setState({
      moveNumber: move,
      xIsNext: (move % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.moveNumber];
    let winner = Game.calculateWinner(current.squares);
    let winningSquares = [];
    if (winner) {
      [winner, winningSquares] = winner;
    }

    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : `Go to game start`;
      const isActiveTurn = move === this.state.moveNumber;
      let descElem;
      if (isActiveTurn) {
        descElem = (<strong>{desc}</strong>)
      } else {
        descElem = (<span>{desc}</span>)
      }

      return (
        <ListGroupItem key={`move-${move}`}>
          <Button 
            bsStyle={isActiveTurn ? "primary" : "info"}
            block={true}
            onClick={() => this.jumpTo(move)}>
            {descElem}
          </Button>
        </ListGroupItem>
      )
    })

    let status;
    if (winner) {
      status = `Winner: ${winner}`
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`
    }

    return (
      <div className="game">
        <div className="game-board">
          <h3>___</h3>
          <Board 
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            winningSquares={winningSquares}
          />
        </div>
        <div className="game-info">
          <div>
            <h3>{status}</h3>
          </div>
          <ListGroup>{moves}</ListGroup>
        </div>
      </div>
    );
  }

  // helpers

  static calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return [squares[a], lines[i].slice()];
      }
    }
    return null;
  }
}
