import React, { Component } from 'react';
import './SelectOrganization.scss';

class SelectOrganization extends Component {
  constructor() {
    super();
    this.state = {
      selectedOrg: '',
      repos: []
    };
  }

  selectOrg = async (event) => {
    if (event.key === 'Enter') {
      const selectedOrg = this.input.value;
      this.props.history.push(`/${selectedOrg}`);
    }
  }

  render() {
    return (
      <div className="SelectOrganization">
        <div className="SelectOrganization-textbox">
          <input
            type="text"
            onKeyDown={this.selectOrg}
            ref={node => this.input = node}
            placeholder="Enter your GitHub organization"
          />
        </div>
      </div>
    );
  }
}

export default SelectOrganization;
