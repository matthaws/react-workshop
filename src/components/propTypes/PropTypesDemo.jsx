import React, { Component } from "react";
import PropTypes from "prop-types";

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

class DemoComponent extends Component {
  static propTypes = {
    sampleProps: PropTypes.string
  };

  static defaultProps = {
    sampleProps: "this is a string"
  };
}

PropTypesDemo.propTypes = {
  string: PropTypes.string,
  number: PropTypes.number,
  func: PropTypes.func.isRequired,
  isOn: PropTypes.bool
};

PropTypesDemo.defaultProps = {
  string: "String",
  number: 0,
  isOn: true
};

export default PropTypesDemo;
