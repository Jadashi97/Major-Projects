import React from 'react';
import Header from './Header';
// import Footer from './Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import BodyContent from './bodyContent';
import Events from './Events';
import Location from './Location';

function App() {

  return (
    <BrowserRouter className="App">
      <Routes>
          <Route path="/" element={<Header className="App-header"/>}>
              <Route path="/" element={<BodyContent/>}/>
              <Route path="/" element={<Events/>}/>
              <Route path="/" element={<Location/>}/> 
          </Route>
        </Routes>
    </BrowserRouter>
    );    
}

export default App;
