import {useState} from "react";
import {TodoItem} from "./TodoItem";

export function TodoContainer() {

    const [ items, setItems] = useState([])

    return <>
        <TodoItem/>
    </>
}