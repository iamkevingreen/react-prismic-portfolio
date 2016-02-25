import React, { Component } from 'react';
import Helmet from 'react-helmet';

class IndexComponent extends Component {
  render() {
    if (this.props.items.length === 0) {
      return (
        <p ref="empty">Index is empty.</p>
      );
    }

    return (
      <div>
      <Helmet
        title="Te Spaghetti"
        meta={[
            {"name": "description", "content": "Spaghetti Emoji"}
          ]}
        />
        <h2>Index Emoji</h2>
        <ul ref="indexList" className="index-list">
          {this.props.items.map((item, index) => {
            return (<li key={index}>item {item}</li>);
          })}
        </ul>
      </div>
    );
  }
}

IndexComponent.defaultProps = {
  items: []
};

export default IndexComponent;
