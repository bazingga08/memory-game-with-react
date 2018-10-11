import React, { Component } from 'react';
import './App.css';
import Maingame from './MainGame';
import { BrowserRouter as Router} from 'react-router-dom';



class App extends Component {
 
  render() {
  
    return (
      <div className="App">  
       <Maingame />
      </div>
    );
  }
}

export default App;
