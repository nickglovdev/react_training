// Importing our files
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//we can pass data into our components by using props
ReactDOM.render
  (<App cat={5} txt="This is the prop text" />,
  document.getElementById('root')
);
