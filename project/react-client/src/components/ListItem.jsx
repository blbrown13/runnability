import React from 'react';
import $ from 'jquery';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.hotel.rating
    };
    this.onChange = this.onChange.bind(this);
    this.updateRating = this.updateRating.bind(this);
  }

  onChange(event) {
    this.setState({
      rating: event.target.value
    })
  }

  updateRating(event) {
    this.props.hotel.rating = event.target.value;
    this.refs.updateBar.value = '';
    console.log('updated rating');
    console.log('gonna save to database...');
    this.updateDB();
  }

  updateDB() {
    // let stuff = {
    //   name: this.props.hotel.name,
    //   address: this.props.hotel.vicinity,
    //   location: this.props.hotel.loc,
    //   rating: this.state.rating
    // }
    // console.log(stuff);
    console.log('inside updateDB function');
    $.ajax({
      type: "POST",
      url: "http://127.0.0.1:3000/hotels/updatedb",
      data: {
        name: this.props.hotel.name,
        address: this.props.hotel.vicinity,
        location: this.props.hotel.loc,
        rating: this.state.rating
      },
      success : (result) => {
        console.log('Not broken...yet');
      },
      error: function(error) {
        alert(error);
      }
    });
  }

  render () {
    return (<div id="list-item">
      <div id="list-item-name">{ this.props.hotel.name }</div>
      <div id="list-item-rating">Runnability: { this.state.rating }</div>
      <div>{ this.props.hotel.vicinity }</div>
      <div>{ this.props.hotel.loc }</div>
        Update Runnability: <input value={this.state.rating} onChange={this.onChange} ref="updateBar"/>
      <button onClick={this.updateRating}> Update </button>
    </div>)
  }
}

export default ListItem;
