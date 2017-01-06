// use strict mode
"use strict";

// Make the list item component available
import { MainNavigationListItem } from './MainNavigationListItem';

/* Create a list item component and point to the "resourceTypes"
 * object in "react-build-out.js" in the parameter
 */
export const MainNavigationList = ({resourceTypes}) => (
  /* Use Array.prototype.map() to loop over the resource type object
   * and place object properties in the list item component. Use the
   * JSX spread operator to populate the list item content.
   */
    <ul className="nav__list">
      {resourceTypes.map((getTypes, i) =>
        <MainNavigationListItem key={i}
                                {...getTypes} />
      )}
    </ul>
  )