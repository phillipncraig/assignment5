import React, { Component } from 'react';
import '../../App.css';




// ClearList component will evaluate which ListItems have a complete status===true, and remove them from the ToDo list
class ClearList extends Component {
  
  render() {
    return (
      <button onClick={
        () => { 
          this.props.clearList(this.props.id) 
        }
      }> Clear Finished Tasks </button>
    )
  }
}


export default ClearList;
