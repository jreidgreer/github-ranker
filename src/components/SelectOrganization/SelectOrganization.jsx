import React, { Component } from 'react';
import './SelectOrganization.scss';
import Table from '../Table/Table';
import { getRepos, getCommits } from '../../utils/repository.util';

class SelectOrganization extends Component {
  constructor() {
    super();
    this.state = {
      selectedOrg: '',
      repos: []
    };
  }

  selectOrg = async (event) => {
    if (event.key === 'Enter') {
      const selectedOrg = this.input.value;
      const repos = await getRepos(selectedOrg);
      this.setState({
        selectedOrg,
        repos
      });
    }
  }

  render() {
    let isUsed = false;
    const REPO_HEADERS = [
      {
        key: 'name',
        display: 'Name',
        type: 'string',
      },
      {
        key: 'forks',
        display: 'Forks',
        type: 'number',
      },
      {
        key: 'open_issues',
        display: 'Open Issues',
        type: 'number',
      },
    ];

    // Shrink down search box
    if (this.state.repos.length > 0) {
      isUsed = true;
    }

    return (
      <div className="SelectOrganization">
        <div className="SelectOrganization-textbox">
          <input
            type="text"
            onKeyDown={this.selectOrg}
            ref={node => this.input = node}
            placeholder="Enter your GitHub organization"
            className={isUsed ? 'SelectOrganization-input--used' : ''}
          />
        </div>

        <Table data={this.state.repos} headers={REPO_HEADERS}/>
      </div>
    );
  }
}

export default SelectOrganization;
