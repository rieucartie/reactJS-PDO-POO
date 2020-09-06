import React from 'react';
import logo from './logo.svg';
import './App.css';
export default class App extends React.Component{
  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
         
          <li className="nav-item">
            <a className="nav-link" href={"/user/ajout"}>Ajout</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={"/user/liste"}>Liste</a>
          </li>
         
         
        </ul>
         
      </div>
    </nav>
    )
  }
}
