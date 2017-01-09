// use strict mode
"use strict";

// Import React
import React from 'React';

// Import jQuery
import $ from 'jquery';

// Import core jQuery
import _ from 'underscore';

// Import the NavList child component
import { NavList } from './NavList';

/* An implementation of the React Container Components design pattern,
 * where a parent component fetches data via AJAX and passes it down
 * to a child component (read more at: http://bit.ly/2jiTEdg). The
 * data being fetched contains duplicates...they're removed by
 * underscore before being passed down to the child component.
 */
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

        this.resourceTypes = filteredArray;
        this.setState({resourceTypes: filteredArray});
      }.bind(this)
    });
  }
  render() {
    return <NavList resourceTypes={this.state.resourceTypes} />;
  }
}