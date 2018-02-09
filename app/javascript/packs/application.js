import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AllBooks from "../components/AllBooks"
import configureStore from '../store/configureStore'

const store = configureStore({ "books": [
  {
    title: "Head first networking",
    description: "Very good introduction to networking",
    available: true,
    tags: ["Development"]
  },
  {
    title: "Agile retrospectives",
    description: "A series activities to make your retrospectives more interesting",
    available: true,
    tags: ["Agile"]
  }
]});

document.addEventListener('DOMContentLoaded', () => {
  const container = document.body.appendChild(document.createElement('div'));
  render(
    <Provider store={store}>
      <AllBooks/>
    </Provider>,
  container);
});