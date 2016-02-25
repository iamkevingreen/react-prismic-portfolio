'use strict';

import 'styles/main.scss';

import React from 'react';
import { render } from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Index from 'components/Index/Index';
import Router from 'react-mini-router';
import WorkIndex from 'components/Work/WorkIndex';



let Main = React.createClass({
  mixins: [Router.RouterMixin],

  routes: {
    '/': 'onIndex',
    '/work': 'onWorkIndex'
  },

  onIndex: function() {
    return <Index items={[1,2,3]} />;
  },

  onWorkIndex: function() {
    return <WorkIndex />
  },


  render() {
    const animateApp = React.cloneElement(this.renderCurrentRoute(), {key: this.state.path});

    return (
      <div className="wrapper">
        <nav>
          <a href="/">Index</a>
          <a href="/work">Work</a>
        </nav>
        <ReactCSSTransitionGroup component="div" transitionName="pageTransition" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          {animateApp}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
});

render(<Main history={true} />, document.getElementById('main'));
