import React, { Component } from 'react';
import '../../App.css';

//A List component that is responsible for displaying a card. A card has an image and a title
//and a button for liking the image
class ListItem extends Component {
  constructor(props) {
    super(props)

    //Track the status of listitem (complete or not)
    this.state = {
      complete: false
    }
  }

  // CONDITIONAL FOR CHECKBOX COMPLETE STATUS HANDLED IN PARENT, no longer needed here. Styles and Ternary remain.

  //Output the details of the ListItem. Use bootstrap classes to
  //make the ListItems responsive.
  render() {
    //console.log(this.props.toDo.key)
    let { toDo } = this.props
    //console.log(toDo)
    const styles = {
      finishedTask: {
        textDecorationLine: 'line-through'
      },
      notFinishedTask: {
        textDecorationLine: 'none'
      },
      checkStyle: {
        fontSize: '0.65em'
      }
    }
    //using "strikeTurnary" as in-component styling will strikethrough checkbox completed tasks
    let strikeTernary = toDo.complete ? styles.finishedTask : styles.notFinishedTask

    return (
      <div className="col-xs-6 col-md-4 col-lg-3">
        <h3 style={strikeTernary}>{toDo.title}</h3>
        <p style={strikeTernary}>{toDo.text}</p>

        {/* Display the status, and a checkbox that updates the complete event handler*/}
        <span style={{ ...styles.checkStyle, 
                       ...strikeTernary }}>
        Check if complete: {this.state.complete}
        </span>

        <input type="checkbox" 
               id={this.key} 
               name={this.key} 
               value={this.state.complete} 
               onChange={
                 () => {
                   this.props.completeCheck(this.props.id)
                   //console.log(this.props.id)
                   //console.log(toDo.title)
                   }
               } />
        {/* <label htmlFor={this.key}>{this.key}</label> */}

      </div>
    )
  }
}



export default ListItem;
