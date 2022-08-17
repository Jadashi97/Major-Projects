import React from 'react';
import Home from './Home';
// import Footer from './Footer';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import BodyContent from './BodyContent';
import Events from './Events';
import Location from './Location';

function App() {

  return (
    <BrowserRouter className="App">
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<Navigate replace to="/BodyContent"/>}/>
          <Route path="/BodyContent" element={<BodyContent/>}>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<BodyContent/>}/>
          </Route>
          <Route path="/" element={<Events/>}/>
          <Route path="/" element={<Location/>}/> 
      </Routes>
    </BrowserRouter>
    );    
}

export default App;
