import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const toDoList = [
  {
    title: 'Pick up Groceries',
    text: 'Bannanas,Eggs, Milk',
    complete: false

  }, {
    title: 'Call Mike',
    text: 'on Friday the 16th',
    complete: false

  }, {
    title: 'Test 3',
    text: 'text3 here',
    complete: false

  }, {
    title: 'Test 4',
    text: 'text4 here',
    complete: false

  }
]

ReactDOM.render(<App toDoList = {toDoList}/>, document.getElementById('root'));
registerServiceWorker();
