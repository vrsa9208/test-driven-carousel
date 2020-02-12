import React from "react";
import PropTypes from "prop-types";

export default (Component, propName, upperBoundPropName) =>
  class ComponentWithAutoAdvance extends React.PureComponent {
    static displayName = `AutoAdvances(${Component.displayName ||
      Component.name})`;

    static propTypes = {
      [propName]: PropTypes.number.isRequired,
      [`${propName}Increment`]: PropTypes.func.isRequired,
      [upperBoundPropName]: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.array
      ]).isRequired,
      autoAdvanceDelay: PropTypes.number.isRequired
    };

    static defaultProps = {
      autoAdvanceDelay: 10e3
    };

    componentDidMount() {
      this.startTimer();
    }

    componentDidUpdate(prevProps) {
      if (
        prevProps[propName] !== this.props[propName] ||
        prevProps[upperBoundPropName] !== this.props[upperBoundPropName]
      ) {
        this.startTimer();
      }
    }

    componentWillUnmount() {
      clearTimeout(this._timer);
    }

    startTimer() {
      clearTimeout(this._timer);
      if (!this.props.autoAdvanceDelay) return;

      let upperBound;

      if (typeof this.props[upperBoundPropName] === "number") {
        upperBound = this.props[upperBoundPropName];
      } else if (typeof this.props[upperBoundPropName] != undefined) {
        upperBound = this.props[upperBoundPropName].length;
      }

      this._timer = setTimeout(() => {
        this.props[`${propName}Increment`](upperBound);
      }, this.props.autoAdvanceDelay);
    }

    render() {
      return <Component {...this.props} />;
    }
  };
