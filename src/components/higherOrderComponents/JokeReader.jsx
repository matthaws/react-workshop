import React, { Component } from "react";

class JokeReader extends Component {
  constructor(props) {
    super(props);
    this.state = { joke: this.props.payload.joke };
  }

  componentDidMount() {
    this.tellJoke(this.state.joke);
  }

  tellJoke(joke) {
    this.speech = new SpeechSynthesisUtterance(joke);
    window.speechSynthesis.speak(this.speech);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.payload.joke !== prevState.joke) {
      const joke = nextProps.payload.joke;
      return { joke };
    } else {
      return prevState;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.joke !== this.state.joke) {
      this.tellJoke(this.state.joke);
    }
  }

  render() {
    const { repeatAsyncCall } = this.props;
    return (
      <div>
        <h1>I'm telling a joke!</h1>
        <button onClick={repeatAsyncCall}>Tell me another one!</button>
      </div>
    );
  }
}

export default JokeReader;
