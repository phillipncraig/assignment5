import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const toDoList = [
  {
    title: 'Listen to Dr. Meladandri\'s podcast',
    text: 'https://www.radionz.co.nz/national/programmes/ourchangingworld/audio/2018631849/science-speed-dating-leads-to-top-award',
    complete: false

  }, {
    title: 'Haircut',
    text: 'Book for early next week',
    complete: false

  }, 
]

ReactDOM.render(<App toDoList = {toDoList}/>, document.getElementById('root'));
registerServiceWorker();
