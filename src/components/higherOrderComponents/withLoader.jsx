import React from "react";
import PropTypes from "prop-types";
import "./HOC.css";

const withLoader = ChildComponent => {
  return class Loader extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isLoaded: false, payload: null };
    }

    componentDidMount() {
      this.props
        .asyncCall()
        .then(payload => this.setState({ payload, isLoaded: true }));
    }

    repeatAsyncCall = () => {
      this.props.asyncCall().then(payload => this.setState({ payload }));
    };

    static propTypes = {
      asyncCall: PropTypes.func.isRequired
    };

    render() {
      const { asyncCall, ...otherProps } = this.props;
      return (
        <section>
          {this.state.isLoaded ? (
            <ChildComponent
              repeatAsyncCall={this.repeatAsyncCall}
              payload={this.state.payload}
              {...otherProps}
            />
          ) : (
            <div className="spinner" />
          )}
        </section>
      );
    }
  };
};

export default withLoader;
