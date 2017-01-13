// use strict mode
"use strict";

// Import React
import { PropTypes, Component } from 'React';

// Import jQuery
import $ from 'jquery';

// Import core jQuery
import _ from 'underscore';

// Import the ResourceList child component
import { ResourceList } from './ResourceList';

/* An implementation of the React Container Components design pattern,
 * where a parent component fetches data via AJAX and passes it down
 * to a child component (read more at: http://bit.ly/2jiTEdg). The
 * data being fetched contains duplicates...they're removed by
 * underscore before being passed down to the child component. The
 * code to render it is in "react-buildout.js."
 */

/* Create a component called '<ResourceListContainer />' and execute
 * 'super()' inside 'constructor()' so that 'this' can be properly
 * used. Read 'Exploring ES6', (15.2.3.2 Superconstructor calls) for
 * more info. Then let the component state contain an array called
 * 'resources'
 */
export class ResourceListContainer extends Component {
  constructor() {
    super();
    this.state = { resources: [] };
  }

  /* After <ResourceListContainer /> lands on the page, AJAX in the
   * resources API with jQuery and let that be the returned data
   * that's named 'resources...
   */
  componentDidMount() {
    $.ajax({
      url: "http://localhost:3000/api/resources",
      dataType: 'json',
      success: function(resources) {
        this.setState({resources: resources});
      }.bind(this)
    });
  }

  /* Render the child <ResourceList /> component where its properties
   * are the <ResourceListContainer /> filter resource types
   */
  render() {
    return <ResourceList resources={this.state.resources} />;
  }
}