import React, {useState} from 'react';
import Header from './Header';
// import Footer from './Footer';
import BodyContent from './bodyContent';
import Events from './Events';
import { Breakpoint, BreakpointProvider } from "react-socks";

function App() {
  const [width, setWindowWidth] = useState(0);

  return (
    <div className="App">
      <BreakpointProvider>
      <Breakpoint></Breakpoint>
        <Header className="App-header"/>
        <BodyContent/>
        <Events/>
      {/* <Footer/> */} 
      </BreakpointProvider>
    </div>
  );
}

export default App;
