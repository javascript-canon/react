// use strict mode
"use strict";

import { Component } from 'react';

/* Create a stateless "CoreSiteNavigation" component that contains the
 * the links to the core site pages.
 */
export const CoreSiteNavigation = () => (

  <ul className="nav__list">
    <li className="nav__list-item-home nav--link-top-padding">
      <a href="/" className="nav--homepage-link nav__button-home">return to main site</a>
    </li>
    <li className="nav__list-item-home">
      <a href="/about" className="nav--homepage-link nav__button-home">about</a>
    </li>
  </ul>
  )