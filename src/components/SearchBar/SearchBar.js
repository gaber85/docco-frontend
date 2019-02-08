import React, { Component } from 'react';
import './SearchBar.css';

// eslint-disable-next-line
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }
  }

  updateNewSearch = e => {
    this.setState({ search: e.target.value});
  }

  handleSearchSubmit = (e) => {
    const { search } = this.state;
    e.preventDefault();
    if (search) {
      // some search logic here
    }
    this.setState({
      search: '',
    })
  }

  render() {
    const { search } = this.state;
    return (
      <form className="search-bar" onSubmit={this.handleSearchSubmit}>
          <i className="fas fa-search" />
          <input onChange={this.updateNewSearch} 
            value={search} className="text-input" 
            type="text" placeholder="Search..." />
      </form>
    )
  }
}

export default SearchBar;
