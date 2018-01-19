import React from 'react';
import shrooms from './images/shrooms.jpg';

export default function Landing(props) {
  return (
    <div>
      <h1>Welcome to Mycelium!</h1>
      <img src={shrooms} alt="Psylocibe Semilanceata" style={ {width: "75%", height: "75%"} }/>
    </div>
  )
}
