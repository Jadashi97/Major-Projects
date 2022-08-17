import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Home from './components/Home';
import BodyContent from './components/BodyContent';
import Events from './components/Events';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="Home" element={<Home/>}/>
                <Route path="BodyContent" element={<BodyContent/>}/>
                <Route path="Events" element={<Events/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);

