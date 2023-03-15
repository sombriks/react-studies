import style from "./Todo.module.scss";

export interface Todo {
    id?: number
    description: string
    done: boolean
}

export interface TodoProps {
    item: Todo
    update: Function
    del: Function
}

export function TodoItem(props: TodoProps) {

    return <fieldset className={style["todo-container"]}>
        <div>{props.item.description}</div>
        <input type="checkbox" checked={props.item.done}
               onChange={e => props.update({
                   ...props.item,
                   done: !props.item.done
               })}/>
        <button onClick={e => props.del(props.item)}>&#x1f5d1;</button>
    </fieldset>
}