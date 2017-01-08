// use strict mode
"use strict";

import React from 'react'
import { render } from 'react-dom'
import { NavListContainer } from './components/NavListContainer';

// Make sure React is attached to the window object to avoid bugs
// window.React = React;

// Build the <nav>`
render(
  <NavListContainer />,
  document.getElementById('nav__react-target')
)