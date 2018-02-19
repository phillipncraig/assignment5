import React, { Component } from 'react';
import '../../App.css';

class Filter extends Component {
  constructor() {
    super()

    this.changeFilter = this.changeFilter.bind(this)
  }

  changeFilter() {
    this.props.changeFilter(this.filter.value)
  }

  render() {

    return (
      <select onChange={this.changeFilter} ref={(select) => { this.filter = select }} id="filter">
        <option value="all">all</option>
        <option value="active">active</option>
        <option value="complete">complete</option>
      </select>
    )
  }
}

export default Filter;