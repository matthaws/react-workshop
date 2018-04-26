import React, { Component } from "react";

const withLogger = ChildComponent => {
  return props => {
    console.log(props);
    return <ChildComponent {...props} />;
  };
};

export default withLogger;
