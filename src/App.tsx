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
import {CounterClassic} from "./views/counter-classic/CounterClassic";

function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/counter">Counter</Link>
                <Link to="/counter-classic">Counter (classic)</Link>
                <a target="_blank"
                   href="https://github.com/sombriks/react-studies">See on
                    github</a>
            </nav>
            <Routes>
                <Route path="/" element={<Home></Home>}/>
                <Route path="/counter" element={<Counter></Counter>}/>
                <Route path="/counter-classic"
                       element={<CounterClassic></CounterClassic>}/>
            </Routes>
        </Router>
    );
}

export default App;
