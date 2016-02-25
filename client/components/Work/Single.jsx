import React from 'react'
import { render } from 'react-dom'

import API from '../../api/prismic'
import emitter from '../../emitters/default'
import Helmet from 'react-helmet'

let WorkSingle = React.createClass({
  componentWillMount() {
    this.getData()
  },
  getData() {
    console.log('hey');
    let api = new API();
    let slug = this.props.slug;

    console.log(this.props);
  },
  render() {
    return (
      <div className="page--background">
        <div className="site--wrapper">
          Test
        </div>
      </div>
    )
  }
});

export default WorkSingle;
