import {useState} from "react";
import {Todo, TodoItem} from "./TodoItem";

export function TodoContainer() {

    const [ items /*, setItems*/] = useState([] as Todo[])

    return <>
        {items.map((item) => <TodoItem item={item}/>)}
    </>
}