import React, { Component } from "react";
import MouseTracker from "./MouseTracker";

const error = "THAT IS BAD";

const RenderPropsDemo = () => (
  <section>
    <EnhancedInput
      label="Demo Input"
      error={error}
      render={inputProps => <input type="text" {...inputProps} />}
    />
  </section>
);

export default RenderPropsDemo;

class EnhancedInput extends Component {
  uniqueId() {
    return Math.random()
      .toString(36)
      .substr(2, 16);
  }

  render() {
    const inputProps = {
      id: this.uniqueId,
      className: this.props.error ? "input error" : "input"
    };

    return (
      <div>
        <label for={inputProps.id}>{this.props.label}</label>
        {this.props.render(inputProps)}
        {this.props.error ? <span>{this.props.error}</span> : null}
      </div>
    );
  }
}
