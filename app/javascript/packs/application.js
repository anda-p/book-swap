import React from "react";
import { render } from "react-dom";
import AllBooks from "../components/AllBooks"

document.addEventListener('DOMContentLoaded', () => {
  const container = document.body.appendChild(document.createElement('div'));
  render(<AllBooks/>, container);
});