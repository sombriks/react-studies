import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import './App.scss';
import {Home} from "./views/home/Home";
import {Counter} from "./views/counter/Counter";

function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/counter">Counter</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home></Home>}/>
                <Route path="/counter" element={<Counter></Counter>}/>
            </Routes>
        </Router>
    );
}

export default App;
