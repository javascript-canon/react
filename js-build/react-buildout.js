import React from 'react'
import { render } from 'react-dom'
import { hello, goodbye } from './lib'

// AJAX in the resources API with Axios after the component renders
// componentDidMount: function() {
//   var _this = this;
//   this.serverRequest =
//     axios.get('http://localhost:3000/api/resources')
//       .then(function (response) {
//         console.log(response.data);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   },

  render(
    <div>
      {hello}
      {goodbye}
    </div>,
  document.getElementById('navigation')
)

