import React, { Component } from 'react';
import './RepoMeta.scss';

import { getRepoMeta } from '../../utils/repository.util';

class RepoMeta extends Component {
  constructor() {
    super();
    
    this.state = {
      repoMeta: null
    };
  }

  componentDidMount() {
    const { org, repo } = this.props;

    getRepoMeta(org, repo)
      .then(repoMeta => this.setState({ repoMeta }));
  }

  render() {
    if (!this.state.repoMeta) {
      return null;
    }

    const { repoMeta } = this.state;

    return (
      <div className="RepoMeta">
        <span className="RepoMeta-item">
        <span className="RepoMeta-item-title">Watchers:</span> {repoMeta.watchers_count}
        </span>
        <span className="RepoMeta-item">
          <span className="RepoMeta-item-title">Stars:</span> {repoMeta.stargazers_count}
        </span>
        <span className="RepoMeta-item">
          <span className="RepoMeta-item-title">Forks:</span> {repoMeta.forks}
        </span>
      </div>
    );
  }
}

export default RepoMeta;
