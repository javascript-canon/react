// use strict mode
"use strict";

import { Component } from 'React';
import { render } from 'react-dom'

export class ResourceList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
       {this.props.resources.map(this.renderResources)}
    </div>;
  }

  renderResources({i, title, author, image, link, href}) {
    return <article className="single-resource" key={i}>
      <h2 className="single-resource__header">{title}<span className="single-resource__author"> &nbsp;by {author}</span>
      </h2>
      <img className="single-resource__book-image" src={'/img/book-images/' + image} />
      <a className="single-resource__button js-book" href={link}>Get This!</a>
      <a className="single-resource__button" href={'/react/' + href}>Why it's good?</a>
    </article>;
  }
}