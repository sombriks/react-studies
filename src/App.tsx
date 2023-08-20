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
import {TodoContainer} from "./views/todos/TodoContainer";
import {Memory} from "./views/memory/Memory";

function App() {
    return (
        <Router basename={process.env.REACT_APP_URI}>
            <nav>
                <Link to="">Home</Link>
                <Link to="counter">Counter</Link>
                <Link to="counter-classic">Counter (classic)</Link>
                <Link to="list-rendering">List rendering</Link>
                <Link to="todo-list">TODO List</Link>
                <Link to="memory">Memory game</Link>
                <a target="_blank"
                   href="https://github.com/sombriks/react-studies"
                   rel="noreferrer">See on github</a>
            </nav>
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="counter" element={<Counter/>}/>
                <Route path="counter-classic"
                       element={<CounterClassic/>}/>
                <Route path="list-rendering"
                       element={<ListItems items={[
                           {id: 1, label: "One"},
                           {id: 2, label: "two"}]}/>}/>
                <Route path="todo-list" element={<TodoContainer/>}/>
                <Route path="memory" element={<Memory/>}/>
            </Routes>
        </Router>
    );
}

export default App;
