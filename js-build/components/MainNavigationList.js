// use strict mode
"use strict";

import { MainNavigationListItem } from './MainNavigationListItem';

export const MainNavigationList = ({resourceTypes}) => (
    <ul className="nav__list">
      {resourceTypes.map((getTypes, i) =>
        <MainNavigationListItem key={i}
                                type={getTypes.type} />
      )}
    </ul>
  )