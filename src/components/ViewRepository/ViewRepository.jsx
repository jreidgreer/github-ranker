import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import './ViewRepository.scss';

import { getCommits } from '../../utils/repository.util';

// Commit history can lack proper author metadata
const AuthorMeta = ({ author }) => {
  if (author) {
    return (
      <a
        href={author.html_url}
        target="_blank"
        className="AuthorMeta"
      >
        {author.login}
      </a>
      );
  }

  return null;
}

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
        <Helmet>
          <title>
            {this.props.match.params.org} / {this.props.match.params.repo} - GitHub Repo Ranker
          </title>
        </Helmet>
        <h1 className="ViewRepository-title">
          <Link to={`/${org}`}>{org}</Link> / <span className="ViewRepository-title--current">{this.props.match.params.repo}</span>
        </h1>

        <h2>Commits</h2>
        
        <ul className="ViewRepository-commits">
          {this.state.commits.map(commit => (
            <li className="ViewRepository-commit">
              <p className="ViewRepository-commit-message">
              <a href={commit.html_url} target="_blank">{commit.commit.message}</a>
              </p>
              <div className="ViewRepository-commit-meta">
                <AuthorMeta author={commit.author} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ViewRepository;
