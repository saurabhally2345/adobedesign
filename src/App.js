import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Page from './reusablecomponents/page/page';



function App() {
  return (
    <div>
   <Router>
   <Route exact path="/" component={Page}/> 
     </Router>   
    </div>
  );
}

export default App;
