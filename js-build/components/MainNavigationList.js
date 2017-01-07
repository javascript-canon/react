// use strict mode
"use strict";

// Make the list item component available
import { MainNavigationListItem } from './MainNavigationListItem';
import { CoreSiteNavigation } from './CoreSiteNavigation';

/* Create a component that represents the core nav for the React
 * sexample page and point to the "resourceTypes" object in
 * "react-build-out.js" in the parameter
 */
export const MainNavigationList = ({resourceTypes}) => (

  /* Use Array.prototype.map() to loop over the resource type object
   * and place object properties in the list item component. Use the
   * JSX spread operator to populate the list item content. Also
   */
    <nav className="nav nav--notVisible" id="navigation" role="navigation">
      <h2 className="nav__header">display by resource type</h2>
      <ul className="nav__list">

        {resourceTypes.map((getTypes, i) =>
          <MainNavigationListItem key={i}
                                      {...getTypes} />
        )}
        <CoreSiteNavigation />
      </ul>
    </nav>
  )