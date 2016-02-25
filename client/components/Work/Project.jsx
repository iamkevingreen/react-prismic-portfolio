import React from 'react'
import { render } from 'react-dom'

let Project = React.createClass({

  getInitialState() {
    return {
      title: this.props.data.title
    }
  },

  render() {
    return (
      <div className="block">
        <h2><a href={"work/" + this.props.slug}>{this.state.title}</a></h2> - coming from prizzy<br />
      </div>
    )
  }
})

export default Project
