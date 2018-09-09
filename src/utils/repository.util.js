import * as rp from 'request-promise';

import { GITHUB_API, GITHUB_REQUEST_HEADER } from '../constants';

/**
 * Requests a list of repositories for a given GitHub organization.
 * @param {string} org GitHub organization to request repos from
 * @see {@link https://developer.github.com/v3/repos/#list-organization-repositories}
 * @returns {Array} Array of repository info objects
 */
export async function getRepos(org) {
  const options = {
    uri: `${GITHUB_API}/orgs/${org}/repos`,
    headers: {
      'Accept': GITHUB_REQUEST_HEADER
    }
  };
  let result = [];

  try {
    result = await rp(options);
  } catch (e) {
    console.error(e);
    return result;
  }

  try {
    result = JSON.parse(result);
  } catch (e) {
    console.error('Error parsing result from getRepos ', e);
  }

  // We only need a subset of this data, and it needs to be enhanced
  return result.map(repo => {
    const {
      name,
      forks,
      open_issues,
      watchers
    } = repo;

    return {
      name,
      forks,
      open_issues
    }
  })
}

/**
 * Requests a list of commits for a given GitHub repository.
 * @param {string} org GitHub organization the repo belongs to
 * @param {string} repo GitHub organization to request commits from
 * @see {@link https://developer.github.com/v3/repos/commits/#list-commits-on-a-repository}
 */
export async function getCommits(org, repo) {
  const options = {
    uri: `${GITHUB_API}/repos/${org}/${repo}/commits`,
    headers: {
      'Accept': GITHUB_REQUEST_HEADER
    }
  };

  let result = [];

  try {
    result = await rp(options);
  } catch (e) {
    console.error(e);
    return result;
  }

  try {
    result = JSON.parse(result);
  } catch (e) {
    console.error('Error parsing result from getRepos ', e);
  }

  return result;
}
