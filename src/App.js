import React, { Component } from "react";
import PropTypesDemo from "./components/propTypes/PropTypesDemo";
import RefsDemo from "./components/refs/refsDemo";
import UncontrolledForm from "./components/refs/uncontrolledForm";
import FragmentDemo from "./components/fragments/fragments";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="App">
        <FragmentDemo />
      </main>
    );
  }
}

export default App;
