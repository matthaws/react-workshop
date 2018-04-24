import React, { Component, createRef } from "react";

// This is an example of an "uncontrolled" component. The value of the input fields
// is handled exclusively by the actual HTML elements on the DOM and not held in
// React state. While this limits us in what we can do with those values in React,
// it's a very simple pattern with little code that might be appropriate for small forms.

class UncontrolledForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    logInUser(this.nameInput.value, this.passwordInput.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input ref={input => (this.nameInput = input)} />
        </label>

        <label>
          Password:
          <input ref={input => (this.passwordInput = input)} />
        </label>

        <input type="submit" value="submit" />
      </form>
    );
  }
}

const logInUser = (username, password) => {
  console.log(`${username}: ${password}`);
};

export default UncontrolledForm;
