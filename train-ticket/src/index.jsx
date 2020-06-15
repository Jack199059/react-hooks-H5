import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App.jsx';
import TodoList from './test/app2.jsx'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <TodoList/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();


