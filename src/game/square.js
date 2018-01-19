import React from 'react';
import { Button } from 'react-bootstrap';

export default function Square(props) {
  return (
    <Button 
      className={props.isWinning ? 'square winningSquare' : 'square'} 
      onClick={props.onClick} 
      cell={props.cell}
    >
      {props.value}
    </Button>
  );
}
