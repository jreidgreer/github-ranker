import React, { Component } from 'react';
import './Table.scss';
import { sortRepos } from '../../utils/table.util';

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
    if (this.state.sortBy === key && this.state.direction === 'ascending') {
      return this.setState({ direction: 'descending' });
    } else if (this.state.sortBy === key && this.state.direction === 'descending') {
      return this.setState({ direction: 'ascending' });
    }

    return this.setState({ sortBy: key, direction: 'ascending', sortType: type });
  }

  getHeaderClasses = (key) => {
    let classes = '';

    if (this.state.sortBy === key) {
      classes = 'Table-header--active ';
      classes +=
        this.state.direction === 'ascending'
        ? 'Table-header--ascending'
        : 'Table-header--descending';
    }

    return classes;
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
      <table className="Table">
        <tbody>
          <tr>
            {this.props.headers.map(header => (
            <th>
              <button
                onClick={() => this.sort(header.key, header.type)}
                className={this.getHeaderClasses(header.key)}
              >
                {header.display}
              </button>
            </th>
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
