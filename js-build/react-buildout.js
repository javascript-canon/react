const { render } = ReactDOM;

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
  <h1 id='title'
      className='header'
      style={{backgroundColor: 'orange', color: 'white', fontFamily: 'verdana'}}>
    Hello World
  </h1>,
  document.getElementById('navigation')
)

