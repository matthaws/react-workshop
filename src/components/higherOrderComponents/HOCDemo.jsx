import React, { Component } from "react";
import compose from "lodash/fp/compose";
import withLoader from "./withLoader.jsx";
import withLogger from "./withLogger.jsx";
import JokeReader from "./JokeReader.jsx";

const HOCDemo = () => {
  const doAThing = () => {
    console.log("Did a thing!");
  };

  return (
    <section>
      <button className="button" onClick={doAThing}>
        Button One!
      </button>

      <button className="button" onClick={doAThing}>
        <h1>This is a bigger and fancier button!</h1>
        <p>Why do we even have this button?</p>
      </button>
    </section>
  );
};

export default HOCDemo;
