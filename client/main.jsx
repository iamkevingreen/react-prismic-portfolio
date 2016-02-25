'use strict';

import 'styles/main.scss'

import React from 'react'
import { render } from 'react-dom'
import Router from 'react-mini-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Nav from 'components/Global/Nav'
import Index from 'components/Index/Index'
import WorkIndex from 'components/Work/Index'
import WorkSingle from 'components/Work/Single'



let Main = React.createClass({
  mixins: [Router.RouterMixin],

  routes: {
    '/': 'onIndex',
    '/work': 'onWorkIndex',
    '/work/:slug': 'onWorkSingle'
  },

  onIndex: function() {
    return <Index items={[1,2,3]} />;
  },

  onWorkIndex: function() {
    return <WorkIndex data={this.state.path} />
  },

  onWorkSingle: function(slug) {
    return <WorkSingle params={slug} />
  },


  render() {
    const animateApp = React.cloneElement(this.renderCurrentRoute(), {key: this.state.path});

    return (
      <div className="site">
        <header>
          <h1>Spaghetti Emoji</h1>
          <Nav path={this.state.path} />
        </header>
        <ReactCSSTransitionGroup component="div" transitionName="pageTransition" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          {animateApp}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
});

render(<Main history={true} />, document.getElementById('main'));
