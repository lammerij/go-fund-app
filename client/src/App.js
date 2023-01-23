import React, {useState, useEffect, useContext} from "react-dom";
import logo from "./logo.svg";
import "./App.css";
import { UserContext } from "./context/userContext";


function App() {
const [currentUser, setCurrentUser] = useContext(UserContext)

  // useEffect(()=>{
  //   fetch("/me")
  //   .then((response) => response.json())
  //   .then((user) => setUser(user))
  // })

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
