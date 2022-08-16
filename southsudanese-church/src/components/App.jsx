import React from 'react';
import Header from './Header';
// import Footer from './Footer';
import { BrowserRouter, Switch, Routes,Route } from 'react-router-dom'
import BodyContent from './bodyContent';
import Events from './Events';
import Location from './Location';
// import { Breakpoint, BreakpointProvider } from "react-socks";

function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route>
          <switch>
            <Header className="App-header"/>
            <BodyContent/>
            <Events/>
            <Location/> 
          </switch>
        </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
