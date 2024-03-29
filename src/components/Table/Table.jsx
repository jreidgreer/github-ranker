import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Table.scss';
import { sortRepos } from '../../utils/table.util';

class Table extends Component {
  constructor() {
    super();

    this.state = {
      sortBy: 'name',
      sortType: 'string',
      direction: 'ascending',
    }
  }

  sort = (key, type) => {
    if (this.state.sortBy === key && this.state.direction === 'ascending') {
      return this.setState({ direction: 'descending' });
    } else if (this.state.sortBy === key && this.state.direction === 'descending') {
      return this.setState({ direction: 'ascending' });
    }

    return this.setState({ sortBy: key, direction: 'descending', sortType: type });
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
    let data = this.props.data;
    console.log(data);
    const { sortBy, direction, sortType } = this.state;

    if (!this.props.data || this.props.data.length <= 0) {
      return null;
    }

    if (sortBy) {
      data = sortRepos(data, sortBy, direction, sortType);
    }

    return (
      <table className="Table">
        <tbody>
          <tr>
            <th className="Table--no-background"></th>
            {this.props.headers.map(header => (
            <th key={header.key}>
              <button
                onClick={() => this.sort(header.key, header.type)}
                className={this.getHeaderClasses(header.key)}
              >
                {header.display}
              </button>
            </th>
            ))}
          </tr>

          {this.props.data.map((data, i) => (
            <tr key={data.name + i}>
              <td>{i + 1}</td>
              {this.props.headers.map(header => {

                // TODO: this makes this less data-agnostic. Decide whether to make
                // table less generic or redo this section to make configurable.
                if (header.key === 'name') {
                  return (
                    <td key={`${header.key}-${data[header.key]}`}>
                      <Link to={`/${this.props.org}/${data[header.key]}`}>{data[header.key]}</Link>
                    </td>
                  );
                }
                
                return <td key={`${header.key}-${data[header.key]}`}>{data[header.key]}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
