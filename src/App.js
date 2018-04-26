import React, { Component } from "react";
import PropTypesDemo from "./components/propTypes/PropTypesDemo";
import RefsDemo from "./components/refs/refsDemo";
import UncontrolledForm from "./components/refs/uncontrolledForm";
import FragmentDemo from "./components/fragments/fragments";
import HOCDemo from "./components/higherOrderComponents/HOCDemo.jsx";
import MouseTracker from "./components/renderProps/renderProps.jsx";
import CompoundDemo from "./components/compoundComponents/compoundDemo.jsx";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="App">
        <h1 className="welcome">React: Beyond the Basics!</h1>
      </main>
    );
  }
}

export default App;
