//import logo from './logo.svg';
import './App.css';
import {Component} from 'react';

const Header = () => {
  return (
    <header className='App'>
      <h1>Scoreboard</h1>
      <span className="stats">Players: 1</span>
    </header>
  );
}

// const Field = () => {
//   const holder = 'Enter here';
//   const styledField = {
//     width: '300px'
//   };
//   return (
//     <input type="text" 
//     placeholder={holder} 
//     style={styledField}/>
//   )
// }

class Field extends Component {
  render() {
      const holder = 'Enter here';
      const styledField = {
        width: '300px'
      };
    return <input type="text" 
          placeholder={holder} 
          style={styledField}/>
  }
}

function Btn () {
  const text = 'Log in';
  const logged = false;
  // const res = () =>{
  //   return 'Add player';
  // }
  //const p = <p>Log in</p>;
  return (
    <button>{logged ? 'Enter' : text}</button>
  )
}

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="App">
      <Header />
      <Field />
      <Btn />

    </div>
  );
}

export {Header};
export default App;
