import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AllBooks from "../components/AllBooks"
import configureStore from '../store/configureStore'

const store = configureStore({ books: [
  {
    title: "Head first networking",
    description: "Very good introduction to networking",
    available: true,
    tags: ["Development", "Beginner"]
  },
  {
    title: "Agile retrospectives",
    description: "A series activities to make your retrospectives more interesting",
    available: true,
    tags: ["Agile", "Beginner"]
  },
  {
    title: "A test book",
    description: "I like it",
    available: false,
    tags: ["Development"]
  },
  {
    title: "Another good book",
    description: "Highly recommended",
    available: true,
    tags: ["Management"]
  }
], filters: {
  all: [{name: "Development", enabled: true} , {name: "Agile", enabled: true}, 
        {name: "Beginner", enabled: true}, {name: "Management", enabled: true} ]
}});

document.addEventListener('DOMContentLoaded', () => {
  const container = document.body.appendChild(document.createElement('div'));
  render(
    <Provider store={store}>
      <AllBooks/>
    </Provider>,
  container);
});