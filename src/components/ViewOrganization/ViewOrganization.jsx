import React, { Component } from 'react';
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
    return (
      <div className="ViewOrganization">
        <h1>{this.props.match.params.org}</h1>
        
        <Table data={this.state.repos} headers={REPO_HEADERS}/>
      </div>
    );
  }
}

export default ViewRepository;
