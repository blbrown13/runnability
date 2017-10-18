import React from 'react';
import ListItem from './ListItem.jsx';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      otherthing: ''
    }
  }

  render () {
    return (<div id="list-view">
      <h4> Hotel List </h4>
      We found { this.props.hotels.length } hotels.
      { this.props.hotels.map((hotel, index) => <ListItem hotel={hotel} key={index}/>)}
    </div>)
  }
}

export default List;
