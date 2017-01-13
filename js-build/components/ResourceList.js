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

  renderResources({author}) {
    return <article className="single-resource">
      <a className="nav__button">{author}</a>
    </article>;
  }
}