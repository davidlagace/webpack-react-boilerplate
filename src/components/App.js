import React from 'react';

export default class App extends React.Component {
  state = {
    name: "Toto"
  };

  render() {
    return (
      <div>
        <div className="container-fluid">
          <h1>Hello</h1>
          <p>Hello {this.state.name}</p>
        </div>
      </div>
    );
  }
}