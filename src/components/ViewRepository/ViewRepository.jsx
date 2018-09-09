import React, { Component } from 'react';
import './ViewRepository.scss';

import { getCommits } from '../../utils/repository.util';

class ViewRepository extends Component {
  constructor() {
    super();
    
    this.state = {
      commits: [],
    };
  }

  componentDidMount() {
    const { org, repo } = this.props.match.params;

    getCommits(org, repo)
      .then(commits => this.setState({ commits }));
  }

  render() {
    return (
      <div className="ViewRepository">
        <h1>{`${this.props.match.params.org} / ${this.props.match.params.repo}`}</h1>

        <h2>Commits</h2>
        
        <ul className="ViewRepository-commits">
          {this.state.commits.map(commit => (
            <li>
              <p>{commit.commit.message}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ViewRepository;
