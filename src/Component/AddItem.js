import React, { Component } from 'react';


class AddItem extends Component {
  static defaultProps = {
    categories: ['Cereal','Candy','soda']
  }

  render() {
let categoriesOptions =this.props.categories.map(category =>
{return<option key ={category} value="category">{category}</option>
});
  //console.log(this.props);
    return (
      <div className="AddItem">
        <h1 >Add Item</h1>
        <form>
        <div>
          <label> Name</label><br />
          <input type ="text" ref ="desc"/>
        </div>
        <div>
          <label> Select</label><br />
          <select ref ="category">
          {categoriesOptions}
          </select>
        </div>
        </form>
      </div>
    );
  }
}

export default AddItem;
