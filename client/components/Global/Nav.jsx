'use strict';

import React from 'react'
import { render } from 'react-dom'

let Nav = React.createClass({
  render() {
    return (
      <nav className="navigation">
        <ul>
          <li><a href="/">Index</a></li>
          <li><a href="/work">Work</a></li>
        </ul>
      </nav>
    )
  }
});

export default Nav;
