# Refs

#### Using React with the native DOM

You've been taught to use React's declarative syntax to tell the app what you want the DOM to look like and then to leave it to the framework's under-the-hood functionality to make it happen as efficiently as possible using its virtual DOM. That's why we generally avoid messing with the real DOM with something like JQuery when using React - get out of React's way and let it do its thing!

There are a few use cases, however, when there actually isn't a great React-only way to manipulate the DOM in exactly the way that you want. For those cases, React has a feature which will give you access to the _real_ DOM node from within the component that is representing it. These associations are called "refs".

Common use cases for refs are things like manipulating focus on input elements or handling media playback. [Full info is available in the official React docs.](https://reactjs.org/docs/refs-and-the-dom.html)

Declaring a ref is very straightforward:

```JavaScript
constructor() {
  super();
  this.audio = React.createRef();
}

render() {
  return (
    <section className="lets-rock">
      <audio ref={this.audio} src="./source.mp3" />
    </section>
  );
}
```

We create ref using React's `createRef()` function, then assign that via a prop to the approrpiate element. We can now access the actual HTML audio element via `this.audio.current`. Now that we have a "ref"erence to the native DOM element, we can interact with it directly as we would normally. In the case of an audio element as in the example above, that means we have access to all the methods exposed by the HTML5 audio API:

```javascript
startMusic = () => this.audio.current.play();

stopMusic = () => this.audio.current.pause();

render() {
  return (
    <section className="lets-rock">
      <h1>LETS ROCK!</h1>
      <audio ref={this.audio} src={demo_music} />
      <button onClick={this.startMusic} value="Start">
        Start
      </button>
      <button onClick={this.stopMusic} value="Stop">
        Stop
      </button>
    </section>
  );
}
```

Another fairly common and simple way to define a ref is by giving a callback to the ref prop on the element itself. This creates a very basic ref without some of the extra features you get with `createRef()`. In the example below, we'll be able to access this input field just by calling `this.myInput` instead of `this.myInput.current` like we did in the audio example. That `current` property is one of the the things that `createRef()` gives you.

```javascript
<input ref={input => (this.myInput = input)} />
```

It's fairly common to use refs to interact with input fields directly. This allows us to manipulate focus directly. For example, if we wanted our input field to be focused when this component loads up, we might do somethign like this:

```javascript
componentDidMount() {
  this.myInput.focus();
}

render() {
  return (
    <form onSubmit={this.handleSubmit}
      <input className="demo-input" ref={input => this.input = myInput} />
    </form>
  );
}
```

Refs can be very useful BUT the docs caution you not to over-use them. Nine times out of ten, there's a more React-appropriate way to manipulate the DOM. Don't give in to the temptation to use refs to frequently circumvent React and manipulate the DOM directly or you may cause unexpected behaviors. Trust React to do what it does, and only fall back on refs for very specific scenarios where they are necessary.
