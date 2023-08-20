import {useState} from "react";

export interface MCard {
    id: number,
    item: string,
    status: "hidden" | "revealed" | "matched" | "mismatch"
}

export const DELAY = 2000

export function useCards() {

    const [cardList, setCardList] = useState<MCard[]>([
        {id: 1, item: "A", status: "hidden"}, {id: 2, item: "C", status: "hidden"},
        {id: 3, item: "B", status: "hidden"}, {id: 4, item: "E", status: "hidden"},
        {id: 5, item: "C", status: "hidden"}, {id: 6, item: "G", status: "hidden"},
        {id: 7, item: "D", status: "hidden"}, {id: 8, item: "A", status: "hidden"},
        {id: 9, item: "E", status: "hidden"}, {id: 10, item: "H", status: "hidden"},
        {id: 11, item: "F", status: "hidden"}, {id: 12, item: "B", status: "hidden"},
        {id: 13, item: "G", status: "hidden"}, {id: 14, item: "D", status: "hidden"},
        {id: 15, item: "H", status: "hidden"}, {id: 16, item: "F", status: "hidden"}
    ])

    const [selected, setSelected] = useState<MCard>()

    const [msg, setMsg] = useState("Select a card")

    const [tok, setTok] = useState()

    const [gameFinished, setGameFinished] = useState(false)

    const cardSelect = (c: MCard) => {
        c.status = "revealed"
        setSelected(c)
        setMsg("Select another card")
    }

    const cardMatch = (c: MCard) => {
        if (!selected) return
        c.status = "matched"
        selected.status = "matched"
        setSelected(undefined)
        setMsg("You matched a pair of cards!")
        const fin = cardList.every(c => c.status === "matched")
        if (!fin) {
            const key = setTimeout(() => {
                setMsg("Select a card")
                setTok(undefined)
            }, DELAY) as any
            setTok(key)
        } else {
            setGameFinished(fin)
            setMsg("Game finished! Congratulations!")
        }
    }

    const cardMismatch = (c: MCard) => {
        if (!selected) return
        c.status = "revealed"
        setMsg("Cards didn't match!")
        c.status = "mismatch"
        selected.status = "mismatch"
        const key = setTimeout(() => {
            c.status = "hidden"
            selected.status = "hidden"
            setSelected(undefined)
            setCardList([...cardList])
            setMsg("Select a card")
            setTok(undefined)
        }, DELAY) as any
        setTok(key)
    }

    const restart = () => {
        setSelected(undefined)
        setGameFinished(false)
        setMsg("Select a card")
        setCardList([...cardList.map(c => ({
            ...c, status: "hidden"
        }) as MCard)])
    }

    return {
        cardList, setCardList,
        selected, setSelected,
        msg, setMsg,
        tok, setTok,
        gameFinished, setGameFinished,
        cardSelect,
        cardMatch,
        cardMismatch,
        restart
    }
}
