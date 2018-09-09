import React, { Component } from 'react';

class Table extends Component {
  constructor() {
    super();

    this.state = {
      sortBy: null,
      sortType: null,
      direction: null,
    }
  }

  sort = (key, type) => {
    if (this.state.sortBy === key && this.state.direction === 'accending') {
      return this.setState({ direction: 'decending' });
    } else if (this.state.sortBy === key && this.state.direction === 'decending') {
      return this.setState({ direction: 'accending' });
    }

    return this.setState({ sortBy: key, direction: 'accending', sortType: type });
  }

  render() {
    if (!this.props.data || this.props.data.length <= 0) {
      return null;
    }

    let data = this.props.data;

    if (this.state.sortBy) {
      data = sortRepos(data, this.state.sortBy, this.state.direction, this.state.sortType);
    }

    return (
      <table>
        <tbody>
          <tr>
            {this.props.headers.map(header => (
            <th onClick={() => this.sort(header.key, header.type)}>{header.display}</th>
            ))}
          </tr>

          {this.props.data.map(data => (
            <tr>
              {this.props.headers.map(header => <td>{data[header.key]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;

function sortRepos(repos, key, direction, type) {
  console.log(key, direction, type);
  if (type === 'string') {
    return sortName(repos, key, direction);
  }

  if (direction === 'accending') {
    return repos.sort((a, b) => {
      return a[key] - b[key];
    });
  } else {
    return repos.sort((a, b) => {
      return b[key] - a[key];
    });
  }

}

function sortName (repos, key, direction) {
  if (direction === 'accending') {
    
    return repos.sort((a, b) => {
      const nameA = a[key].toUpperCase();
      const nameB = b[key].toUpperCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
  }

  return repos.sort((a, b) => {
    const nameA = a[key].toUpperCase();
    const nameB = b[key].toUpperCase();

    if (nameB < nameA) {
      return -1;
    }
    if (nameB > nameA) {
      return 1;
    }

    return 0;
  });
}
