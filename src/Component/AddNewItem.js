import React, { Component } from 'react';

class AddNewItem extends Component {
  componentWillMount()
  {
    console.log("something");
    this.state={input:''};
    this.handleInputName = this.handleInputName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    return{input:''};

  }

handleInputName(event)
{
  console.log("something1");
  this.setState({input: event.target.value});
  this.test =event.target.value
  return this.test;
}

handleSubmit(event)
{event.preventDefault();
  console.log("yay",this.state.input);

  return event.target.value;

}
  render() {

    return (
      <div className="AddNewItem">
        <h1 >Add New Item</h1>
        <form onSubmit={this.handleSubmit}>

          <label> Name</label><br />
          <input type ="text" ref ="desc" value= {this.state.input}  onChange={this.handleInputName.bind(this)}/>
          <button > Add New Item </button>
          <h1>{this.test}</h1>

        </form>
      </div>
    );
  }
}

export default AddNewItem;
