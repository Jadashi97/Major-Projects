import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Sermons from './components/Sermons';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="Home" element={<Home/>}/>
                <Route path="About" element={<About/>}/>
                <Route path="Events" element={<Events/>}/>
                <Route path="Sermons" element={<Sermons/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);

