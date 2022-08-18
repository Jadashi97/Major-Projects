import React from 'react';
// import Footer from './Footer';
import { Outlet, Link} from 'react-router-dom';

function App() {

  return (
    <div>
      {/* create links to our various pages */}
      <nav>
        <h1>South Sudanese Community Church</h1>
        <Link to="/home">Home</Link> | {" "}
        <Link to="/about">About us</Link> | {" "}
        <Link to="/events">Events</Link> | {" "}
        <Link to="/sermons">Sermons & Teaching</Link> | {" "}

      </nav>
      <Outlet/>
    
    </div>
  );    
}

export default App;
