import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Brewery from "./components/Brewery";

ReactDOM.render(
  <Router>
    <Brewery />
  </Router>,
  document.getElementById('root')
);

