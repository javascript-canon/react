// use strict mode
"use strict";

// Import React
import { Component } from 'React';

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
 * underscore before being passed down to the child component. The
 * code to render it is in "react-buildout.js."
 */

/* Create a component called '<NavListContainer />' and execute
 * 'super()' inside 'constructor()' so that 'this' can be properly
 * used. Read 'Exploring ES6', (15.2.3.2 Superconstructor calls) for
 * more info. Then let the component state contain an array called
 * 'resourceTypes'
 */
export class NavListContainer extends Component {
  constructor() {
    super();
    this.state = { resourceTypes: [] };
  }

  /* After <NavListContainer /> lands on the page, AJAX in the
   * resources API with jQuery and let that be the returned data
   * that's named 'resources. Check to see if the the component is
   * mounted before setting state with data and set mounting to false
   * on unmount to prevent a memory leak. Read more at
   * http://bit.ly/2jVWNUe and http://bit.ly/2jW1mhc.
   */
  componentDidMount() {

    $.ajax({
      url: "/api/resources",
      dataType: 'json',
      success: function(resourceTypes) {
        if(this._mounted != false) {
        /* ...create two variables: one that will be an array of
         * resource types and another that will be an array of
         * resources types with its multiple copies removed.
         */
        var typesArray = [],
            filteredTypesArray;

        /* ...loop through resources API, find the types, add them to
         * 'typesArray', and then remove any multiple copies it
         * contains using undescore's 'uniq' method. The array with
         * out the duplicates is called 'filteredTypesArray'.
         */
        resourceTypes.forEach(function(item, index){
          typesArray.push(item.type);
          return filteredTypesArray = _.uniq(typesArray);
        });

        /* ...finally, let the resourcesTypes equal the new filtered
         * array update the component's state with this new array
         * using this.setState.
         */
        this.resourceTypes = filteredTypesArray;
        this.setState({resourceTypes: filteredTypesArray});
      }
      }.bind(this)
    });
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  /* Render the child <NavList /> component where its properties are
   * the <NavListContainer /> filter resource types
   */
  render() {
    return <NavList resourceTypes={this.state.resourceTypes} />;
  }
}