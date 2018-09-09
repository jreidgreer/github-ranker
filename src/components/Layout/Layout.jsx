import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Layout.scss';

class Layout extends Component {
  render() {
    console.log('this.history', this.props.location);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <Link to="/">GitHub Repo Ranker</Link>
          </h1>
        </header>
        
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
