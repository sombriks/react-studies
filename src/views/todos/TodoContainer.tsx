import {useState} from "react";
import {Todo, TodoItem} from "./TodoItem";

import style from "./Todo.module.scss";

export function TodoContainer() {

    const [items, setItems] = useState([] as Todo[])
    const [newTodo, setNewTodo] = useState("")

    function saveTodo(item: Todo) {
        if (!item.id) {
            item.id = new Date().getTime()
            setItems([...items, item])
        }
        setNewTodo("")
    }

    function update(item: Todo) {
        const newItems = items.filter(i => i.id !== item.id)
        newItems.push(item)
        // @ts-ignore
        newItems.sort((a,b) => a.id - b.id)
        setItems(newItems)
    }

    function del(item: Todo) {
        const newItems = items.filter(i => i.id !== item.id)
        setItems(newItems)
    }

    return <div className={style["todo-app"]}>
        <fieldset className={style["todo-container"]}>
            <legend>New todo</legend>
            <input type="text" value={newTodo} placeholder="what to do next?"
                   onChange={e => setNewTodo(e.target.value)}/>
            <button onClick={() => saveTodo({
                description: newTodo,
                done: false
            })} title="add new todo">add
            </button>
        </fieldset>

        {items.map((item) =>
            <TodoItem key={item.id} item={item} update={update} del={del}/>)}
    </div>
}