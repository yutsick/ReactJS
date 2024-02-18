import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Header } from './App';

// const text = 'Hello, world!';
// const elem = (
//   <div>
//     <h2 className="green">{text}</h2>
//     <input type="text" />
//     <button>Click me</button>
//   </div>
// );

// const elem = React.createElement('h2', {className: "green"}, 'Hello, world!');

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>
  //elem
);


