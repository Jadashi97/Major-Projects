import React from 'react';
// import Footer from './Footer';
import { BrowserRouter, Routes, Route, Navigate, Link} from 'react-router-dom';
import Events from './Events';
import Location from './Location';

function App() {

  return (
    <div>
      <h1>South Sudanese Community Church</h1>
      {/* create links to our various pages */}
      <nav>
        <Link to="/Home">Home</Link> | {" "}
        <Link to="/BodyContent">About us</Link> | {" "}
        <Link to="/Events">Events</Link> | {" "}
      </nav>
    
    </div>
  );    
}

export default App;
