// use strict mode
"use strict";

import React from 'react'
import { render } from 'react-dom'
import { MainNavigationList } from './components/MainNavigationList';

// Make sure React is attached to the window object to avoid bugs
window.React = React;

  render(
    <MainNavigationList resourceTypes = {
      [
        {
          type: "show all types"
        },
        {
          type: "books"
        },
        {
          type: "websites"
        },
        {
          type: "classes"
        }
      ]
    } />,
  document.getElementById('nav__react-target')
)