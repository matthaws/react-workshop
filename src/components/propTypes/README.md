## PropTypes

In very large applications with multiple teams, its important that everyone is on the same page when it comes to using each React component in the app. That means everybody is giving each component the right kind of props that the component needs to work. A lot of bugs can be prevented by _enforcing_ that a component's props be of the types it needs. There are third-party extensions that some companies use to do this, but React comes with a native way of checking and enforcing prop types: called, shockingly enough, PropTypes.

In the React component defined in this folder, we have an incredibly simple and rather abstract little functional component that takes in a number of props: a string, a number, a function, a boolean, and a React component. Each of those props are used in a way that would likely cause the app to break or behave strangely if they were not the type we expect.

```javascript
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
```

We could leave this as is and just hope we remember what each prop is supposed to be, or hope that everybody on our team just remembers or looks closely at the code before using it. OR we could not be silly and just make sure React checks these props for us by defining a `propTypes` property on the component itself:

```javascript
propTypesDemo.propTypes = {
  string: PropTypes.string,
  number: PropTypes.number,
  component: PropTypes.element,
  func: PropTypes.func,
  isOn: PropTypes.bool
};
```

[See this link](https://reactjs.org/docs/typechecking-with-proptypes.html) for the full list of the different types you can check for, its rather comprehensive.

We will now get a helpful error in the console, alerting the developer that a prop was not the type expected so that we can address it immediately rather than having to debug and track down what the heck is going wrong later.

We can go a step further and enforce that some of these props are _required_ and have React raise an error if they are not provided. For the others, we can define reasonable defaults that will be used if that prop is not given:

```javascript
propTypesDemo.propTypes = {
  string: PropTypes.string,
  number: PropTypes.number,
  component: PropTypes.element.isRequired,
  func: PropTypes.func.isRequired,
  isOn: PropTypes.bool
};

propTypesDemo.defaultProps = {
  string: "",
  number: 0,
  isOn: true
};
```

Default props will be used if that key is `undefined` in the given props. Note: it will not use the default if the key is `null` or some other false-y value besides `undefined`.

Default props are useful, but you are _strongly encouraged_ to define prop types on your React components in your projects moving forward.
