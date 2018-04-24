# Fragments

As you know, React components typically have to return one parent element with children. You couldn't, for example, do something like this:

```javascript
return (
  <li> 1 </li>
  <li> 2 </li>
  <li> 3 </li>
)
```

You've probably run into that warning in the console that yells at you and tell you that you need a parent wrapper, so something like this:

```javascript
return (
  <ul>
    <li> 1 </li>
    <li> 2 </li>
    <li> 3 </li>
  </ul>
);
```

But what if you _really_ wanted that ul to be in the parent component? What if you _really really_ want a React component to return siblings that are NOT wrapped in one parent component? Turns out plenty of developers wanted exactly that, and its now supported via the use of React Fragments.

```javascript
return (
  <React.Fragment>
    <li> 1 </li>
    <li> 2 </li>
    <li> 3 </li>
  </React.Fragment>
);
```

See the code in this folder for a further demo. In that example, returning the children in a wrapping div messes up the CSS flex properties on the parent. Returning the children wrapped in the React.Fragment syntax will allow the flex to work properly.

[More on React Fragments here in the official docs.](https://reactjs.org/docs/fragments.html)
