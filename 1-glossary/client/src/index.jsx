import React from "react";
import { render } from "react-dom";
import App from './components/App.jsx';

render(
  <div className="app-container">
    <h2>Glossary Application:</h2>
    <App />
  </div>,
  document.getElementById("root")
);
