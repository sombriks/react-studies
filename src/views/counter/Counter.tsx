import {useState} from "react";

import "./Counter.css";

export function Counter(props: any) {

    const [count, setCount] = useState(0);

    return (
        <div className="panel">
            <button className="btn" onClick={() => setCount(count + 1)}>
                Clicked {count} times
            </button>
        </div>
    )
}