// import the React and ReactDOM libs
import React from 'react';
import ReactDOM from 'react-dom';

// create React component
const App = function() {
  const buttonText = {text: 'Click Me!'}

  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        { buttonText.text }
      </button>
    </div>
  );
};

// take the React component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
