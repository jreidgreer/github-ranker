import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';
import SelectOrganization from '../SelectOrganization/SelectOrganization';
import ViewRepository from '../ViewRepository/ViewRepository';
import ViewOrganization from '../ViewOrganization/ViewOrganization';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GitHub Repo Ranker</h1>
        </header>
        
        <div className="App-content">
          <Route exact path="/" component={SelectOrganization} />
          <Route path="/:org/:repo" component={ViewRepository} />
          <Route path="/:org" component={ViewOrganization} />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
