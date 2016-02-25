import React, { Component } from 'react';
import { render } from 'react-dom'

import API from '../../api/prismic'
import emitter from '../../emitters/default'
import Helmet from 'react-helmet'
import Project from './Project'

let WorkIndex = React.createClass({
  getInitialState() {
    return {
      projects: [],
      loading: true
    }
  },
  componentWillMount() {
    this.getData()
  },
  componentDidMount() {
    emitter.emit('nav/item/active', this.props.data.path)
  },
  componentLoader() {
    if (this.state.loading) {
      return (
        <div>loading</div>
      )
    }
    else {
      return null
    }
  },
  getData() {
    let api = new API()

    api.query('document.type', 'projects').then((response) => {
      let results      = response.results,
          resultTotal  = response.results_size,
          cleanResults = [];

      Array.from(results).forEach(function(record, i) {
        console.log(record);
        let result = {
          doc: record,
          data: {
            title: record.get('projects.title').asText(),
            slug: record.slug
          }
        }
        cleanResults.push(result);
      });

      this.setState({
        projects: cleanResults,
        loading: false
      });
    });
  },
  renderProjects() {
    return this.state.projects.map((project, i) => {
      return <Project key={i} data={project.data} slug={project.data.slug} />
    });
  },
  render() {
    return (
      <div className="page--background">

      <Helmet
        title="Projects Landing Page"
        meta={[
            {"name": "description", "content": "Spaghetti Emoji"}
          ]}
        />
        <div className="site--wrapper">
          <h2>Project - push meta data with helmets</h2>
          {this.renderProjects()}
        </div>
      </div>
    )
  }
});

export default WorkIndex;
