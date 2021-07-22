import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/*
*   包裹一层<React.StrictMode> 可以检查<APP>代码里不合理的地方
* */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
