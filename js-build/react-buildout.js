// use strict mode
"use strict";

import React from 'react'
import { render } from 'react-dom'
//import { MainNavigationList } from './components/MainNavigationList';
import { CommentListContainer } from './components/CommentListContainer';

// Make sure React is attached to the window object to avoid bugs
window.React = React;

// Build the <nav>x`
render(
  <CommentListContainer />,
  document.getElementById('nav__react-target')
)