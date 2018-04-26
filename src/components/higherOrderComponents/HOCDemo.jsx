import React, { Component } from "react";
import compose from "lodash/fp/compose";
import withLoader from "./withLoader.jsx";
import withLogger from "./withLogger.jsx";
import JokeReader from "./JokeReader.jsx";
import fetchJoke from "./api_util";

const HOCDemo = () => {
  const doAThing = () => {
    console.log("Did a thing!");
  };
  const JokeWithLoader = compose(withLogger, withLoader)(JokeReader);

  return <JokeWithLoader asyncCall={fetchJoke} />;
};

const withButton = customOnClick => {
  return class Button extends Component {
    render() {
      return (
        <button onClick={customOnClick} className="button">
          {this.props.children}
        </button>
      );
    }
  };
};

export default HOCDemo;
