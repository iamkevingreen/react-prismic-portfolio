'use strict';

import React from 'react'
import { render } from 'react-dom'
import emitter from '../../emitters/default'


let Nav = React.createClass({
  componentDidMount() {
    emitter.addListener('nav/item/active', this.handleNavActive)
  },
  handleNavActive(item) {
    console.log(item);
  },
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
