import React, { Component } from 'react';
import './App.scss';
import RepositoryList from '../RepositoryList/RepositoryList';
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
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Enter your GitHub organization</h1>
        </header>
        <div className="App-textbox">
          <input type="text" onKeyDown={this.selectOrg} ref={node => this.input = node} />
        </div>

        <fieldset>
          <legend>Sort by</legend>

          <div>
              <input type="radio" id="sort-commits" name="sort-repos" onClick={this.sortRepos} />
              <label for="sort-commits">Commits</label>
          </div>

          {/* <div>
              <input type="radio" id="dewey" name="drone" />
              <label for="dewey">Dewey</label>
          </div>

          <div>
              <input type="radio" id="louie" name="drone" />
              <label for="louie">Louie</label>
          </div> */}

      </fieldset>

        <RepositoryList repos={this.state.repos} />
      </div>
    );
  }
}

export default App;
