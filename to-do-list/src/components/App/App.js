import React, { Component } from 'react';
import logo from './logo.svg';
import '../../App.css';
import FullList from '../FullList'
import UpdateList from '../UpdateList'
import ClearList from '../ClearList'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //Pulled in from props, object nested in ./src/index.JS
      toDoList: props.toDoList,
    }
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
    // this.setState({
    //   form: {
    //     title: "",
    //     text: "",
    //   }
    // })
  }

  clearList = () => {
    console.log(this.props.toDoList[0].complete)
    //console.log(this.toDoList.complete)
    let inComplete = this.state.toDoList.filter(toDoList => toDoList.complete === false)
    console.log(this.incomplete)
    this.setState({
      toDoList: inComplete
    })
  }

  // An event handler that will update the status value in state and pass down to ListItem to update styling in the child Ternary
  completeCheck = (id) => {
    //console.log(this.props.toDoList[id].title)
    //console.log('preComplete Check = ' + this.props.toDoList[id].complete)
    if (this.props.toDoList[id].complete === false) {
      this.setState({
        complete: true
      })
      this.props.toDoList[id].complete = true
    } else {
      this.setState({
        complete: false
      })
      this.props.toDoList[id].complete = false
    }
    //console.log('postComplete Check = ' + this.props.toDoList[id].complete)
  }

  render() {
    return (
      <div className="container">
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">To-Do List!</h1>

          </header>
          <UpdateList addToDo={this.addToDo} />
          <ClearList clearList={this.clearList} />
          <FullList toDoList={this.state.toDoList}
                    completeCheck={this.completeCheck} 
                    clearList={this.clearList}
          />
        </div>
      </div>
    );
  }
}


export default App;
