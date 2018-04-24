import React, { Component } from "react";
import PropTypes from "prop-types";
import demo_music from "../../assets/ref_demo_music.mp3";
import "./refsDemo.css";

class RefsDemo extends Component {
  render() {
    return (
      <section className="lets-rock">
        <h1>LETS ROCK!</h1>
        <audio src={demo_music} />
        <button onClick={this.startMusic} value="Start">
          Start
        </button>
        <button onClick={this.stopMusic} value="Stop">
          Stop
        </button>
        <br />
        <input className="demo-input" />
      </section>
    );
  }
}

export default RefsDemo;
