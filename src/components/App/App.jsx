import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import SelectOrganization from '../SelectOrganization/SelectOrganization';
import ViewRepository from '../ViewRepository/ViewRepository';
import ViewOrganization from '../ViewOrganization/ViewOrganization';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route exact path="/" component={SelectOrganization} />
          <Route path="/:org/:repo" component={ViewRepository} />
          <Route exact path="/:org" component={ViewOrganization} />
        </Layout>
      </Router>
    );
  }
}

export default App;
