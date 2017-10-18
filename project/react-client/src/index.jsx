import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: []
    }
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/hotels',
      success: (data) => {
        this.setState({
          hotels: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  search (term) {
    console.log(`Client made POST request to server for: ${term}...`);
    $.ajax({
      type: "POST",
      url: "http://127.0.0.1:3000/hotels/import",
      data: { term: term },
      success : (result) => {
        console.log('Success! Returned from server...');
        this.setState({
          hotels: result
        })
      },
      error: function(error) {
        alert(error);
      }
    });
  }

  render () {
    return (
      <div>
        <h1>Hotel Runnability Rating</h1>
        <Search onSearch={this.search}/>
        <List hotels={this.state.hotels}/>
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
