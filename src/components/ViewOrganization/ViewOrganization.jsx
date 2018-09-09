import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './ViewRepository.scss';

import { getRepos } from '../../utils/repository.util';
import { REPO_HEADERS } from '../../constants';
import Table from '../Table/Table';

class ViewRepository extends Component {
  constructor() {
    super();
    
    this.state = {
      repos: [],
    };
  }

  componentDidMount() {
    const { org } = this.props.match.params;

    getRepos(org)
      .then(repos => this.setState({ repos }));
  }

  render() {
    const { org } = this.props.match.params;

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
