import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

import Items from './Component/Items.js';
import AddItem from './Component/AddItem.js';

class App extends Component {
//initialize
constructor(){
  super();
  this.state={
    items:[]
  }
}

//lifecycle method
componentWillMount()
{
  this.setState({items:[
    {
  name: "x cereal",
  category:"cereal",
  purchased:"no"
  },
  {
  name:"y cereal",
  category:"cereal",
  purchased:"no"
  },
  {
  name:"x Candy",
  category:"Candy",
  purchased:"yes"
  },
  {
  name:"x soda",
  category:"soda",
  purchased:"yes"
  }
]});
}

  render() {
    return (
      <div className="App">
      <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Add to cart</h1>
        </header>
        <p className="App-intro">
          Search
        </p>
        <AddItem/>
        <Items items = {this.state.items}/>
        <input></input>
        <button>Submit</button>
      </div>
    );
  }
}

export default App;
