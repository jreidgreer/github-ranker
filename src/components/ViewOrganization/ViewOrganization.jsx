import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './ViewOrganization.scss';

import { getRepos } from '../../utils/repository.util';
import { REPO_HEADERS } from '../../constants';
import Table from '../Table/Table';

class ViewRepository extends Component {
  constructor() {
    super();
    
    this.state = {
      repos: [],
      loaded: false,
    };
  }

  componentDidMount() {
    const { org } = this.props.match.params;

    getRepos(org)
      .then(repos => this.setState({ repos, loaded: true }));
  }

  render() {
    const { org } = this.props.match.params;

    if (!this.state.loaded) {
      return <div className="ViewOrganization"></div>;
    }

    if (this.state.repos.length <= 0 && this.state.loaded) {
      return(
        <div className="ViewOrganization">
          <Helmet>
            <title>Not repos found - GitHub Repo Ranker</title>
          </Helmet>
          <h1>No repos found for '{org}'</h1>
        </div>
      )
    }

    return (
      <div className="ViewOrganization">
        <Helmet>
          <title>{org} - GitHub Repo Ranker</title>
        </Helmet>
        <h1>{org}</h1>
        
        <Table data={this.state.repos} headers={REPO_HEADERS} org={org} />
      </div>
    );
  }
}

export default ViewRepository;
