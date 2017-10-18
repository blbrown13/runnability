import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange(event) {
    this.setState({
      term: event.target.value
    })
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render () {
    return (<div>
      <h4>Search for a hotel!</h4>
      Enter a city or zip code: <input value={this.state.term} onChange={this.onChange}/>
      <button id="search-bar" onClick={this.search}> Search Hotels </button>
    </div>)
  }
}

export default Search;
