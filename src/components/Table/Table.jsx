import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <ul>
        {this.props.repos.map(repo => (
        <li key={repo.name}>{repo.name}</li>
        ))}
      </ul>
    );
  }
}

export default App;
