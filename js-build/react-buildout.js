import React from 'react'
import { render } from 'react-dom'
import { MainNavigationList } from './components/MainNavigationList';

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