import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import "./styles.css";
import { checkPropTypes } from "prop-types";

class App extends React.Component {
  getChildContext() {
    return { color: "India is " };
  }

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        {this.context.color}
        <Component1 />
      </div>
    );
  }
}

App.childContextTypes = {
  color: PropTypes.string
};

class Component1 extends React.Component {
  render() {
    return (
      <div>
        <h2>Component1</h2>
        <Component2 />
      </div>
    );
  }
}

class Component2 extends React.Component {
  render() {
    return (
      <div>
        <h2>Component2</h2>
        {this.context.color}
        <Component3 />
      </div>
    );
  }
}

Component2.contextTypes = {
  color: PropTypes.string
};

class Component3 extends React.Component {
  render() {
    return (
      <div>
        <h2>Component3</h2>
        {this.context.color}
      </div>
    );
  }
}

Component3.contextTypes = {
  color: PropTypes.string
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
