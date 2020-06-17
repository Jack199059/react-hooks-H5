import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Example from './test/Example.jsx'
import TodoList from './test/app2.jsx'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Example/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();


