import React from 'react';
import ReactDOM from 'react-dom';

const App = () => "Hello";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
