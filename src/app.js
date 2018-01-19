import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import Game from './game.js';
import Landing from './landing.js';
import Time from './time.js';
import Timeline from './timeline.js';

export default function App(props) {
  return (
    <div className="app">
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Mycelium</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem>
            <Link to="/timeline">Timeline</Link>
          </NavItem>
        </Nav>
        <Nav>
          <NavItem>
            <Link to="/game">Game</Link>
          </NavItem>
        </Nav>
        <Nav>
          <NavItem>
            <Link to="/time">Time</Link>
          </NavItem>
        </Nav>
      </Navbar>
      <div className="container">
        <div>
          <Route exact path="/" component={Landing}/>
        </div>
        <div>
          <Route path="/game" component={Game}/>
        </div>
        <div>
          <Route path="/time" component={Time}/>
        </div>
        <div>
          <Route path="/timeline" component={Timeline}/>
        </div>
      </div>
    </div>
  );
}
