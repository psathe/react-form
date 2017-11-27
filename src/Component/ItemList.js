import React, { Component } from 'react';
import AddNewItem from './AddNewItem.js';

class ItemList extends Component {
  render() {
  console.log(this.props.item.purchased);
    return (
      <div>

      <li className="ItemList">
      <strong>{this.props.item.name}</strong> - {this.props.item.purchased}


      </li>


      </div>
    );
  }
}

export default ItemList;
