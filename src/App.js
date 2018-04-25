import React, { Component } from "react";
import PropTypesDemo from "./components/propTypes/PropTypesDemo";
import RefsDemo from "./components/refs/refsDemo";
import UncontrolledForm from "./components/refs/uncontrolledForm";
import FragmentDemo from "./components/fragments/fragments";
import HOCDemo from "./components/higherOrderComponents/HOCDemo.jsx";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="App">
        <HOCDemo />
      </main>
    );
  }
}

export default App;
