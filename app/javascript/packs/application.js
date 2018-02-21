import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import BooksContainer from "../components/BooksContainer"
import configureStore from '../store/configureStore'

const store = configureStore({ books: [
  {
    title: "Head first networking",
    description: "Very good introduction to networking",
    available: true,
    tags: ["Development", "Beginner"],
    displayed: true
  },
  {
    title: "Agile retrospectives",
    description: "A series activities to make your retrospectives more interesting",
    available: true,
    tags: ["Agile", "Beginner"],
    displayed: true
  },
  {
    title: "A test book",
    description: "I like it",
    available: false,
    tags: ["Development"],
    displayed: true
  },
  {
    title: "Another good book",
    description: "Highly recommended",
    available: true,
    tags: ["Management"],
    displayed: true
  }
], filters: {
  all: [{name: "Development", enabled: true} , {name: "Agile", enabled: true}, 
        {name: "Beginner", enabled: true}, {name: "Management", enabled: true} ]
}});

document.addEventListener('DOMContentLoaded', () => {
  const container = document.body.appendChild(document.createElement('div'));
  render(
    <Provider store={store}>
      <BooksContainer />
    </Provider>,
  container);
});