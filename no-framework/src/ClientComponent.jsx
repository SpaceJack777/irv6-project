"use client"

import { useState } from "react"

export default function ClientComponent() {
    console.log("rendering client ClientComponent client component")
    const [counter, setCounter] = useState(0)

    return (
        <fieldset>
            <legend>CLient Component</legend>
            <p>Counter {counter}</p>
            <button onClick={() => setCounter(counter++)}>Increment</button>
        </fieldset>
    )
}
