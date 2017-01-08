// use strict mode
"use strict";

import React from 'React';
import { NavList } from './NavList';
import $ from 'jquery';


export class NavListContainer extends React.Component {
  constructor() {
    super();
    this.state = { resourceTypes: [] }
  }
  componentDidMount() {
    $.ajax({
      url: "http://localhost:3000/api/resources",
      dataType: 'json',
      success: function(resourceTypes) {
        this.setState({resourceTypes: resourceTypes});
      }.bind(this)
    });
  }
  render() {
    return <NavList resourceTypes={this.state.resourceTypes} />;
  }
}