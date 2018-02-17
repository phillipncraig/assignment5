import React, { Component } from 'react';
import '../../App.css';
import ListItem from '../ListItem'



//FullList Component that receives an array of toDoList objects
//and uses map to create a list of children listItem components
class FullList extends Component {
  render() {
    //Take the array of toDoList and map each item into a listItem component
    let toDos = this.props.toDoList.map((toDo, i) => {
      return (
        <ListItem toDo={toDo} key={i} id={i} completeCheck={this.props.completeCheck} clearList={this.props.clearList}/>
      )
    })

    //Output the array of listItem components in cardsJSX
    return (
      <div className="row">
        {toDos}
      </div>
    )
  }
}



export default FullList;
