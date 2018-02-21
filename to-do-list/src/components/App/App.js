import React, { Component } from 'react';
import logo from './hourglass.svg.png';
import '../../App.css';
import FullList from '../FullList'
import UpdateList from '../UpdateList'
import ClearList from '../ClearList'
import Filter from '../Filter'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //Pulled in from props, object nested in ./src/index.js
      toDoList: props.toDoList,
      filter: 'all',
    }
    //binding is best practice to make sure changes in the DOM doesn't impact state, 
    //although I'm not fully sure what the effect is here.. nothing noticeable? Need to test more 
    this.addToDo = this.addToDo.bind(this)
    this.completeCheck = this.completeCheck.bind(this)
  }

  addToDo = (title, text) => {
    this.state.toDoList.unshift({
      title,
      text,
      complete: false
    })
    this.setState({
      toDoList: this.state.toDoList,
    })
  }
  
  // An event handler that will filter out all un-checked items frm the array and reset the state of toDoList showing only incomplete tasks
  clearList = (id) => {
    let inComplete = this.state.toDoList.filter(toDoList => toDoList.complete === false)
    //let toDoList = fullList
    this.setState({
      toDoList: inComplete,
    })
  }

  //filtering
  changeFilter = (filter) => {
    this.setState({
      filter: filter
    })
  }

  // An event handler that will update the status value in state and pass down to ListItem to update styling in the child Ternary
  // Caused issues now resolved on interaction with clearList, where array id complete states were being passed along (in a 4 long array props[2] moves position in as state changes) 
  completeCheck = (id) => {
    this.state.toDoList[id].complete = !this.state.toDoList[id].complete
    // this.setState({
    //   toDoList: {
    //    complete: !this.state.complete,
    //   },
    // })
    this.setState({
      toDoList: this.state.toDoList
    })
  }

  render() {
    return (
      
        <div className="App">
        <Filter changeFilter={this.changeFilter} />
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">To-Do List</h1>
            
          </header>

          <main className="container">
            <div className="row">
            
            <UpdateList addToDo={this.addToDo} />
              
            </div>

            <FullList toDoList={this.state.toDoList}
              filter={this.state.filter}
              completeCheck={this.completeCheck}
              changeFilter={this.changeFilter}
            />
          <div className="row">
            
            <ClearList clearList={this.clearList} />
          </div>
          </main>
        </div>
      
    );
  }
}


export default App;
