// use strict mode
"use strict";

import React from 'react';
import { render } from 'react-dom';
import { NavListContainer } from './components/NavListContainer';
import { ResourceListContainer } from './components/ResourceListContainer';

// Make sure React is attached to the window object to avoid bugs
window.React = React;

// Build the <nav> and place it on the page
render(
  <NavListContainer />,
  document.getElementById('nav__react-target')
)

// Build all the resources and place them on the page
render(
  <ResourceListContainer />,
  document.getElementById('container__react-target')
)