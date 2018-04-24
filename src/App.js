import React, { Component } from "react";
import PropTypesDemo from "./components/propTypes/PropTypesDemo";
import RefsDemo from "./components/refs/refsDemo";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="App">
        <RefsDemo />
      </main>
    );
  }
}

export default App;
