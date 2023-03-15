export interface Todo {
    id: number
    description: string
    done: boolean
}

export interface TodoProps {
    item: Todo
}

export function TodoItem(props: TodoProps) {

    return <>
       <div>{props.item.description}</div>
    </>
}