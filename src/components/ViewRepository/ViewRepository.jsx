import React, { Component } from 'react';
import { Link } from "react-router-dom";
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
    console.log(this.state.commits);
    const { org, repo } = this.props.match.params;

    return (
      <div className="ViewRepository">
        <h1 className="ViewRepository-title">
          <Link to={`/${org}`}>{org}</Link> / {this.props.match.params.repo}
        </h1>

        <h2>Commits</h2>
        
        <ul className="ViewRepository-commits">
          {this.state.commits.map(commit => (
            <li className="ViewRepository-commit">
              <p className="ViewRepository-commit-message">
              <a href={commit.html_url} target="_blank">{commit.commit.message}</a>
              </p>
              <div className="ViewRepository-commit-meta">
              <a href={commit.author.html_url} target="_blank">{commit.author.login}</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ViewRepository;
