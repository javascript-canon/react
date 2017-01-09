// use strict mode
"use strict";

import React from 'React';
import { render } from 'react-dom'
import { CoreSiteNavigation } from './CoreSiteNavigation';
import _ from 'underscore';

export class NavList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <nav className="nav nav--notVisible" id="navigation" role="navigation">
      <h2 className="nav__header">display by resource type</h2>
      <ul className="nav__list">
        <li className="nav__list-item">
          <a href="/react" className="nav__button">show all types</a>
        </li>
        {this.props.resourceTypes.map(this.renderResourceTypes)}
      </ul>
      <CoreSiteNavigation />
    </nav>;
  }

  renderResourceTypes(i) {
    return <li className="nav__list-item" key={i}>
      <a className="nav__button">{i}</a>
    </li>;
  }
}