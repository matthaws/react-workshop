import React, { Component } from "react";
import PropTypes from "prop-types";
import "./fragments.css";

const FragmentDemo = () => {
  return (
    <article className="parent-element">
      <FlexedChildren number={4} />
    </article>
  );
};

const FlexedChildren = ({ number }) => {
  const divs = [];
  for (let i = 0; i < number; i++) {
    divs.push(<div className="circle" />);
  }

  return <React.Fragment>{divs}</React.Fragment>;
};

FlexedChildren.propTypes = {
  number: PropTypes.number
};

export default FragmentDemo;
