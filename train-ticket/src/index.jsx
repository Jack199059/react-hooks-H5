import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Example from './test/Example.jsx'
import TodoList from './test/todoList'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <TodoList/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();


