import React from 'react'
import { render } from 'react-dom'

import API from '../../api/prismic'
import emitter from '../../emitters/default'
import Helmet from 'react-helmet'

let WorkSingle = React.createClass({
  getInitialState() {
    return {
      doc: [],
      meta: []
    }
  },
  componentWillMount() {
    this.getData()
  },
  getData() {
    console.log('hey');
    let api = new API();
    let slug = this.props.params;

    console.log('slug', slug);
    api.query('my.projects.uid', slug).then((response) => {
      let record = response.results[0];

      this.setState({
        doc: record,
        meta: {
          title: record.get('projects.title').asText(),
          image: record.getImage('projects.hero_image').url
        }
      });

    })
  },
  render() {
    return (
      <div className="page--background">
        <div className="site--wrapper">
          <h2>{this.state.meta.title}</h2>
          <img src={this.state.meta.image} />
        </div>
      </div>
    )
  }
});

export default WorkSingle;
