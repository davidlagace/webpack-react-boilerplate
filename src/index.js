import React from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <h1>Hello</h1>
          <p>Hello {this.props.name}</p>
        </div>
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Jane" />, mountNode);
