# Higher Order Components

A Higher Order Component is simply a component that renders another component. You can think of it as a wrapper for other components that modifies or customizes their behavior. The connected container components we use in the Redux cycle are a common example of HOCs in work, but you can make your own in order to have customizable behavior!

Here's a very simple example to start. Let's make a custom Button component that we can use whenever we want a `<button>` element - this is an easy way to ensure that all our buttons have uniform behavior and styling:

```javascript
class Button extends Component {
  onClick = e => {
    e.preventDefault();
    this.props.onClick();
  };

  render() {
    return (
      <button className="styled-button" onClick={this.onClick}>
        {this.props.children}
      </button>
    );
  }
}
```

Now we can easily use this component to make buttons out of HTML elements or even other components!

```javascript
  render() {
    return (
      <main>
        <Button onClick={this.handleButton}>
          <h1>This is going to be a big button!</h1>
          <ButtonTextComponent / >
        </Button>
      </main>
    )
  }
```

Another common pattern is to make use of a function and closure to return a new component. Let's say for example we wanted to create a reusable HOC that will allow us to log to the console all of the props that its child component is receiving, useful for debugging.

```javascript
const withLogger = ConnectedComponent => {
  return props => {
    console.log(props);
    return <ConnectedComponent {...props} />;
  };
};

const ComponentWithLogger = withLogger(DemoComponent);
```

`ComponentWithLogger` is now a wrapped version of `DemoComponent` that will log its props to the console on each render.

Here's a slightly more complicated example. Let's make a reusable Loader component that will display a spinner until an asynchronous API call is returned. There are a lot of libraries and patterns out there that make these kind of DataFetcher or Loader components really efficiently and with robust options, but lets make a very simple example of our own:

```javascript
const withLoader = ChildComponent => {
  return class Loader extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isLoaded: false, payload: null };
    }

    componentDidMount() {
      this.props
        .asyncCall()
        .then(payload => this.setState({ isLoaded: true, payload }));
    }

    // ES7 async/await syntax which can replace .then syntax for promises.
    repeatAsyncCall = async e => {
      const payload = await this.props.asyncCall();
      this.setState({ payload });
    };

    render() {
      // ES7 syntax, we destructure asyncCall out of the props and then use ... to indicate that everything else in the props object be pulled out into a new object called otherProps.
      const { asyncCall, ...otherProps } = this.props;

      if (this.state.isLoaded) {
        return (
          <ChildComponent
            //spread the key/value pairs from otherProps so that each becomes a prop to ChildComponent
            {...otherProps}
            repeatAsyncCall={this.repeatAsyncCall}
            payload={this.state.payload}
          />
        );
      } else {
        return <div className="spinner" />;
      }
    }
  };
};
```

Now by calling `withLoader(DemoComponent)` we get back a wrapped version of `DemoComponent` that expects an `asyncCall` prop, will call that prop on mounting and initially render a spinner. When the async call comes back, it will render the wrapped component instead, passing down any props intended for that component along with a `payload` which is the returned data from the API.

The real power of having these utility higher order components is that we can pick and choose between them. A powerful, functional-programming way of doing this is using `compose`, a powerful function you can get from a library like Lodash or write yourself if you are feeling up to a challenge. Compose takes as an argument any number of functions that you want. It runs those functions in order, passing in the return value from each function as an argument to the next one. This all returns a function that just needs the arguments for the first function in the composed chain in order to get started. Its a cool way to chain up functions! Here's an example:

```javascript
const CoolComponent = compose(withLogger, withLoader)(DemoComponent);
```

Now we have a component wrapped with both a Logger and a Loader! As you can imagine, now we can easily customize all our app's components with utility HOCs.

This is just scratching the surface, but as you can see higher order components can be very powerful!
