// use strict mode
"use strict";

import React from 'React';
import { NavList } from './NavList';
import $ from 'jquery';
import _ from 'underscore';


export class NavListContainer extends React.Component {
  constructor() {
    super();
    this.state = { resourceTypes: [] };
  }
  componentDidMount() {
    $.ajax({
      url: "http://localhost:3000/api/resources",
      dataType: 'json',
      success: function(resourceTypes) {

        var newArray = [],
            filteredArray;

        resourceTypes.forEach(function(item, index){
          newArray.push(item.type);
          return filteredArray = _.uniq(newArray);
        });

        // Make sure this gets deleted before deploying
        console.log(filteredArray);

        this.setState({filteredArray: filteredArray});
      }.bind(this)
    });
  }
  render() {
    return <NavList resourceTypes={this.state.resourceTypes} />;
  }
}