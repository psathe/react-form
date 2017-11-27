import React, { Component } from 'react';
import ItemList from './ItemList.js';
import AddNewItem from './AddNewItem.js';

class Items extends Component {

  render() {
    let itemLists;
    if(this.props.items)
    {
      itemLists = this.props.items.map(item =>
      {
        return(
          <ItemList key={item.name} item = {item}/>
        );
    //  console.log(itemList);
    });
    }

  //console.log(this.props);
    return (
      <div className="Items">
        <h1 >Item</h1>

{itemLists}
<AddNewItem/>
      </div>
    );
  }
}

export default Items;
