import React from "react";
import {Props} from "./Counter"

import styles from "./Counter.module.scss"

interface State {
    counter: number
}

export class CounterClassic extends React.Component<Props, State> {
    state = {counter: 0}
    increment() {
        this.setState({counter: 1 + this.state.counter})
    }
    render() {
        return (
            <div className={styles.panel}>
                <button className="btn" onClick={this.increment.bind(this)}>
                    Clicked {this.state.counter} times
                </button>
            </div>
        )
    }
}
