// import the React and ReactDOM libs
import React from 'react';
import ReactDOM from 'react-dom';

// create React component
const App = function() {
  return <div>Hi there!</div>
};

// take the React component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
