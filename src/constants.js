export const GITHUB_API = 'https://api.github.com';
// https://developer.github.com/v3/media/#request-specific-version
export const GITHUB_REQUEST_HEADER = 'application/vnd.github.v3+json';
export const REPO_HEADERS = [
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
