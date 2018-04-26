import React from "react";
import "./compound.css";

class Toggle extends React.Component {
  state = { on: false };
  toggle = () => this.setState(({ on }) => ({ on: !on }));
  renderOnText = () => this.state.on && <p>The toggle is on.</p>;
  renderOffText = () => !this.state.on && <p>The toggle is off.</p>;

  render() {
    return (
      <div>
        <button className={this.state.on ? "on" : "off"} onClick={this.toggle}>
          Toggle
        </button>
        {this.renderOnText()}
        {this.renderOffText()}
      </div>
    );
  }
}

export default Toggle;
