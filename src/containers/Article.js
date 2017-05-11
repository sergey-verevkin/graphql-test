import React, { Component } from 'react';

class Article extends Component {
  render() {
    return (
      <div>
        <p>
          You are looking on <code>src/containers/Article.js</code>.
        </p>
        <p>
          The <code>id</code> is <strong>{this.props.match.params.id}</strong>
        </p>
      </div>
    );
  }
}

export default Article;
