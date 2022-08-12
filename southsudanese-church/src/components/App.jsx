import React from 'react';
import Header from './Header';
// import Footer from './Footer';
import BodyContent from './bodyContent';
import Events from './Events';
// import { Breakpoint, BreakpointProvider } from "react-socks";

function App() {

  return (
    <div className="App">
        <Header className="App-header"/>
        <BodyContent/>
        <Events/>
    </div>
  );
}

export default App;
