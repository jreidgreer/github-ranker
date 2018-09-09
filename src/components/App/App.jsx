import React, { Component } from 'react';
import './App.scss';
// import RepositoryList from '../RepositoryList/RepositoryList';
import Table from '../Table/Table';
import { getRepos, getCommits } from '../../utils/repository.util';

class App extends Component {
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

  sortRepos = (event) => {
    console.log('sort');
  }

  render() {
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

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Enter your GitHub organization</h1>
        </header>
        <div className="App-textbox">
          <input
            type="text"
            onKeyDown={this.selectOrg}
            ref={node => this.input = node}
            placeholder="Enter your GitHub organization"
          />
        </div>

        <Table data={this.state.repos} headers={REPO_HEADERS}/>
      </div>
    );
  }
}

export default App;
