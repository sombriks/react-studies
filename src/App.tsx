import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import './App.scss';
import {Home} from "./views/home/Home";
import {Counter, CounterClassic} from "./views/counter";
import {ListItems} from "./views/list-rendering/ListItems";

function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/counter">Counter</Link>
                <Link to="/counter-classic">Counter (classic)</Link>
                <Link to="/list-rendering">List rendering</Link>
                <a target="_blank"
                   href="https://github.com/sombriks/react-studies">See on
                    github</a>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/counter" element={<Counter/>}/>
                <Route path="/counter-classic"
                       element={<CounterClassic/>}/>
                <Route path="/list-rendering"
                       element={<ListItems items={[
                           {id: 1, label: "One"},
                           {id: 2, label: "two"}]}/>}/>
            </Routes>
        </Router>
    );
}

export default App;
