import {useState} from "react";
import "./Counter.css";
export interface Props {
}
export function Counter(props: Props) {
    const [count, setCount] = useState(0);
    return (
        <div className="panel">
            <button className="btn" onClick={() => setCount(count + 1)}>
                Clicked {count} times
            </button>
        </div>
    )
}