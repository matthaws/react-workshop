import React, { Component } from "react";

const PropTypesDemo = ({
  string,
  number,
  component: Component,
  func,
  isOn
}) => {
  const funcResult = func();

  if (isOn) {
    return (
      <section>
        <p>String: {string.toUpperCase()}</p>
        <p>Number: {number * 5}</p>
        <p>Function result: {funcResult}</p>
        <p>
          <Component />
        </p>
      </section>
    );
  } else {
    return null;
  }
};

export default PropTypesDemo;
