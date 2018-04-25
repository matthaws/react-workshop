import React, { Component } from "react";
import compose from "lodash/fp/compose";
import withLoader from "./withLoader.jsx";
import withLogger from "./withLogger.jsx";
import JokeReader from "./JokeReader.jsx";

const HOCDemo = () => {
  return <main />;
};

export default HOCDemo;

class Button extends Component {}
