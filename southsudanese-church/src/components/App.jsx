import React from 'react';
// import Footer from './Footer';
import { Outlet, Link} from 'react-router-dom';

function App() {

  return (
    <div>
      {/* create links to our various pages */}
      <nav >
        <div className='header'>
          <h4>SouthSudanese Community Church</h4>
          <img href="#events" className="space-pics" alt="myimage" src="./ss6.jpg" width={100} height={70}></img>
          <div className='links'>
            <Link to="/home">Home</Link> | {" "}
            <Link to="/about">About us</Link> | {" "}
            <Link to="/events">Events</Link> | {" "}
            <Link to="/sermons">Sermons & Teaching</Link> | {" "}
            <Link to="/giving"><button>GIVE</button></Link> | {" "}

          </div>
        </div>
      </nav>
      <Outlet/>
    
    </div>
  );    
}

export default App;
