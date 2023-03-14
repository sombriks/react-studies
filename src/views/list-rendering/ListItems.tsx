import "./foo.css"

export interface ListProps {
    items: ListItem[]
}

export interface ListItem {
    id: number
    label: string
}

export function ListItems(props: ListProps) {

    return <div className="content">
        <h3>Items came as props</h3>
        <ul>
            {props.items.map(item => <li key={item.id}>{item.label}</li>)}
        </ul>
    </div>
}