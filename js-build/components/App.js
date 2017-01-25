import { createClass } from 'react'
import { ResourceListContainer } from './ResourceListContainer'
import { SingleResource } from './SingleResource'
import { SingleType } from './SingleType'

export const App = createClass({
  render() {
    return (
      <div className="App">

        {
          (this.props.location.pathname === "/") ?
          <ResourceListContainer /> :
          (this.props.location.pathname === "/type") ?
          <SingleType /> :
          <SingleResource />
        }

      </div>
    )
  }
})