import styles from "./Memory.module.css";
import {useState} from "react";
import {MCard, useCards} from "./cards";

export function Memory() {

    const {
        selected,
        cardList,
        setCardList,
        msg,
        tok,
        gameFinished,
        cardSelect,
        cardMatch,
        cardMismatch,
        restart
    } = useCards()

    const select = (c: MCard) => {
        console.log(c)
        if (c.status === "matched") return
        if (tok) return
        if (gameFinished) return

        if (!selected) {
            cardSelect(c)
        } else {
            if (c.item === selected.item) {
                cardMatch(c)
            } else {
                cardMismatch(c)
            }
        }
        setCardList([...cardList])
    }

    return <div className={styles.content}>
        <h1>Memory</h1>
        <p>{msg}</p>
        <button onClick={e => restart()}>restart</button>
        <div className={styles.board}>
            {cardList.map(c => {
                return <div aria-id={c.id} key={c.id} className={`${styles.card} ${styles[c.status]}`}
                            onClick={e => select(c)}>
                    {"hidden" === c.status ? "?" : c.item}
                </div>
            })}
        </div>
    </div>
}
