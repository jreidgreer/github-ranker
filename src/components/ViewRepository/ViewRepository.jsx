import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './ViewRepository.scss';

import { getCommits } from '../../utils/repository.util';
import RepoMeta from '../RepoMeta/RepoMeta';

// Commit history can lack proper author metadata
const AuthorMeta = ({ author, commit }) => {
  if (author) {
    return (
      <div className="AuthorMeta">
        <img src={author.avatar_url} alt="" />
        <a href={author.html_url} target="_blank">{author.login}</a>
        &nbsp;on {commit.author.date}
      </div>
      );
  } else if (commit.author) {
    return (
      <div className="AuthorMeta">
        {commit.author.name}
        &nbsp;on {commit.author.date}
      </div>
    );
  }

  return null;
}

class ViewRepository extends Component {
  constructor() {
    super();
    
    this.state = {
      commits: [],
      repoMeta: null
    };
  }

  componentDidMount() {
    const { org, repo } = this.props.match.params;

    getCommits(org, repo)
      .then(commits => this.setState({ commits }));
  }

  render() {
    const { org, repo } = this.props.match.params;

    return (
      <div className="ViewRepository">
        <Helmet>
          <title>
            {this.props.match.params.org} / {this.props.match.params.repo} - GitHub Repo Ranker
          </title>
        </Helmet>
        <div className="ViewRepository-meta-container">
          <div className="ViewRepository-meta-left">
            <h1 className="ViewRepository-title">
              <Link to={`/${org}`}>{org}</Link> / <span className="ViewRepository-title--current">{this.props.match.params.repo}</span>
            </h1>
          </div>
          <div className="ViewRepository-meta-right">
            <RepoMeta org={org} repo={repo} />
          </div>
        </div>

        <h2>Recent Commits</h2>
        
        <ul className="ViewRepository-commits">
          {this.state.commits.map(commit => (
            <li className="ViewRepository-commit" key={commit.sha}>
              <p className="ViewRepository-commit-message">
              <a href={commit.html_url} target="_blank">{commit.commit.message}</a>
              </p>
              <div className="ViewRepository-commit-meta">
                <AuthorMeta author={commit.author} commit={commit.commit} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ViewRepository;
