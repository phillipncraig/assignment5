import React, { Component } from 'react';
import '../../App.css';

//A List component that is responsible for displaying a card. A card has an image and a title
//and a button for liking the image
class ListItem extends Component {

  constructor(props) {
    super(props)

    this.state = {
      toDoList: this.props.toDoList,
    }
  }
  // CONDITIONAL FOR CHECKBOX COMPLETE STATUS HANDLED IN PARENT, no longer needed here. Styles and Ternary remain.

  //Output the details of the ListItem. 
  render() {

    let { toDo } = this.props

    const styles = {
      finishedTask: {
        textDecorationLine: 'line-through'
      },
      notFinishedTask: {
        textDecorationLine: 'none'
      },
    }

    //using "strikeTurnary" as in-component styling will strikethrough checkbox completed tasks
    let strikeTernary = toDo.complete ? styles.finishedTask : styles.notFinishedTask

    return (
      //<div className={"col-xs-6 col-md-4 col-lg-3 toDo"}>

      <tr>
        <td>
          <span style={{
            ...styles.checkStyle,
            ...strikeTernary
          }}>
            
          </span>
          
          <input type="checkbox"
            checked={toDo.complete}
            //THIS BITCH HERE FIXED THE INHERITED CHECKBOX ON MULTIPLE CLEAR 
            //TODO is this.props.todo and holds the checked state within the ListItem component dummy. 
            onChange={
              () => {
                this.props.completeCheck(this.props.id)
              }
            } />
        </td>
        <td>
          <h4 style={strikeTernary}>{toDo.title}</h4>
        </td>
        <td>
          <p style={strikeTernary}>{toDo.text}</p>
        </td>
      </tr>

      /* Display the status, and a checkbox that updates the complete event handler*/


      //</div>
    )
  }
}



export default ListItem;
